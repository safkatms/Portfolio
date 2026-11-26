"use client";

import { useEffect } from "react";

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/**
 * One controller for every scroll/pointer-driven effect on the page, so sections can stay
 * server components and declare effects with data attributes / classes:
 *
 * - [data-scroll-progress]  → transform: scaleX(page progress)
 * - [data-hero]             → scroll parallax on [data-hero-parallax] / fade of [data-hero-cue];
 *                              pointer tilt on [data-hero-tilt]
 * - [data-rail]             → scaleY of its [data-rail-fill] by how far it has been scrolled through
 * - .spotlight              → --mx/--my (pointer position inside the element)
 * - [data-tilt="<deg>"]     → --rx/--ry (pointer tilt, max <deg>)
 * - a[href^="#"] clicks     → briefly accents the target section heading
 *
 * Pointer effects run only for fine pointers; motion effects are skipped under prefers-reduced-motion.
 */
export default function MotionEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const twoColumn = window.matchMedia("(min-width: 1024px)");

    const progressBars = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-progress]"));
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const heroParallax = hero?.querySelector<HTMLElement>("[data-hero-parallax]") ?? null;
    const heroCue = hero?.querySelector<HTMLElement>("[data-hero-cue]") ?? null;
    const heroTilt = hero?.querySelector<HTMLElement>("[data-hero-tilt]") ?? null;
    const rails = Array.from(document.querySelectorAll<HTMLElement>("[data-rail]")).map((el) => ({
      el,
      fill: el.querySelector<HTMLElement>("[data-rail-fill]"),
      last: -1,
    }));

    // Scroll work writes only transform/opacity, directly on the elements that move (never CSS
    // variables on ancestors, which would re-style whole subtrees), and skips unchanged values.
    let scrollRaf = 0;
    let lastProgress = -1;
    let lastSy = -1;
    const updateScroll = () => {
      scrollRaf = 0;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;

      // Reads first…
      const progress = max > 0 ? Math.round(clamp(window.scrollY / max, 0, 1) * 1000) / 1000 : 0;
      // Parallax/fade only in the two-column layout; when stacked (mobile/tablet) the visual sits
      // below the text and would already be fading by the time it's reached.
      const heroRect = hero && !reduce.matches && twoColumn.matches ? hero.getBoundingClientRect() : null;
      const sy = heroRect ? Math.round(clamp(-heroRect.top / heroRect.height, 0, 1) * 1000) / 1000 : 0;
      const railValues = rails.map(({ el }) => {
        if (reduce.matches) return 1;
        const r = el.getBoundingClientRect();
        return Math.round(clamp((vh * 0.65 - r.top) / r.height, 0, 1) * 1000) / 1000;
      });

      // …then writes.
      if (progress !== lastProgress) {
        lastProgress = progress;
        for (const bar of progressBars) bar.style.transform = `scaleX(${progress})`;
      }
      if (sy !== lastSy) {
        lastSy = sy;
        if (heroParallax) {
          heroParallax.style.transform = sy ? `translate3d(0, ${(-70 * sy).toFixed(1)}px, 0)` : "";
          heroParallax.style.opacity = sy ? String(1 - sy * 0.8) : "";
        }
        if (heroCue) heroCue.style.opacity = String(Math.max(0, 1 - sy * 6));
      }
      rails.forEach((rail, i) => {
        if (railValues[i] === rail.last || !rail.fill) return;
        rail.last = railValues[i];
        rail.fill.style.transform = `scaleY(${railValues[i]})`;
      });
    };
    const onScroll = () => {
      if (!scrollRaf) scrollRaf = requestAnimationFrame(updateScroll);
    };

    // ── Pointer ─────────────────────────────────────────────
    let pointerRaf = 0;
    let lastEvent: PointerEvent | null = null;
    let tiltEl: HTMLElement | null = null;
    let heroActive = false;

    const resetTilt = () => {
      if (!tiltEl) return;
      tiltEl.style.setProperty("--rx", "0deg");
      tiltEl.style.setProperty("--ry", "0deg");
      tiltEl = null;
    };
    const setHeroPointer = (px: number, py: number) => {
      if (heroTilt) heroTilt.style.transform = `perspective(1400px) rotateX(${(py * -3).toFixed(2)}deg) rotateY(${(px * 4).toFixed(2)}deg)`;
    };
    const resetHero = () => {
      if (!hero || !heroActive) return;
      setHeroPointer(0, 0);
      heroActive = false;
    };

    const updatePointer = () => {
      pointerRaf = 0;
      const e = lastEvent;
      if (!e) return;
      const target = e.target instanceof Element ? e.target : null;

      const spot = target?.closest<HTMLElement>(".spotlight");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      if (reduce.matches) return;

      const tilt = target?.closest<HTMLElement>("[data-tilt]") ?? null;
      if (tilt !== tiltEl) resetTilt();
      if (tilt) {
        tiltEl = tilt;
        const max = Number(tilt.dataset.tilt) || 3;
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.setProperty("--ry", `${(x * max * 2).toFixed(2)}deg`);
        tilt.style.setProperty("--rx", `${(-y * max * 2).toFixed(2)}deg`);
      }

      if (hero) {
        const r = hero.getBoundingClientRect();
        if (e.clientY >= r.top && e.clientY <= r.bottom) {
          heroActive = true;
          setHeroPointer(
            clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1),
            clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1),
          );
        } else resetHero();
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !fine.matches) return;
      lastEvent = e;
      if (!pointerRaf) pointerRaf = requestAnimationFrame(updatePointer);
    };
    const onPointerLeave = () => {
      resetTilt();
      resetHero();
    };

    // ── In-page link: accent the destination heading ───────
    const onClick = (e: MouseEvent) => {
      const link = e.target instanceof Element ? e.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      const id = link?.getAttribute("href")?.slice(1);
      if (!id || id === "main") return;
      const heading = document.getElementById(`${id}-heading`) ?? (id === "home" ? document.getElementById("hero-heading") : null);
      if (!heading) return;
      heading.classList.remove("heading-flash");
      window.setTimeout(() => {
        void heading.offsetWidth; // restart animation
        heading.classList.add("heading-flash");
      }, reduce.matches ? 0 : 450);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(scrollRaf);
      cancelAnimationFrame(pointerRaf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
