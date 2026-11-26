"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { CloseIcon, DownloadIcon, MenuIcon } from "./icons";
import { vars } from "./motion/vars";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());

  // Background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section crossing the upper third of the viewport.
  // Sections without a nav link (skills, education) map to the nearest preceding linked section.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const linkIds = new Set<string>(navLinks.map((l) => l.id));
    const owner = new Map<string, string>();
    let last = "home";
    for (const s of sections) {
      if (linkIds.has(s.id)) last = s.id;
      owner.set(s.id, last);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(owner.get(entry.target.id) ?? "home");
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Sliding active indicator: measure the active link and move one shared underline to it
  const measure = useCallback(() => {
    const el = linkRefs.current.get(active);
    if (!el || el.offsetParent === null) return;
    setIndicator({ x: el.offsetLeft + 12, w: el.offsetWidth - 24 });
  }, [active]);

  useLayoutEffect(measure, [measure]);
  useEffect(() => {
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Close the mobile menu on Escape or when resizing up to desktop
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`header-in fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid ? "border-line/80 bg-ink/75 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-6">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group font-mono text-[0.95rem] font-semibold tracking-tight text-fg"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="inline-block text-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-0.5">
            &lt;/&gt;
          </span>{" "}
          <span className="transition-colors group-hover:text-accent">{profile.shortName}</span>
        </a>

        <div className="relative hidden md:block">
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  ref={(el) => {
                    if (el) linkRefs.current.set(link.id, el);
                  }}
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-md px-3 py-2 text-sm transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-fg-muted hover:bg-surface/60 hover:text-fg"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px left-0 h-px w-px origin-left bg-accent transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            style={{
              // 1px-wide bar positioned + stretched with transform only (compositor-friendly, no layout per frame)
              transform: `translateX(${indicator?.x ?? 0}px) scaleX(${indicator?.w ?? 0})`,
              opacity: indicator ? 1 : 0,
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="group hidden min-h-9 items-center gap-2 rounded-md border border-accent/50 px-3.5 text-sm font-medium text-accent transition-[background-color,border-color,transform] hover:border-accent hover:bg-accent/10 active:scale-[0.98] sm:inline-flex"
          >
            <DownloadIcon size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            Resume
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-fg transition-colors hover:border-accent/50 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative h-5 w-5">
              <MenuIcon
                size={20}
                className={`absolute inset-0 transition-[transform,opacity] duration-300 ${open ? "rotate-90 scale-50 opacity-0" : ""}`}
              />
              <CloseIcon
                size={20}
                className={`absolute inset-0 transition-[transform,opacity] duration-300 ${open ? "" : "-rotate-90 scale-50 opacity-0"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu: animated height via grid rows; inert while closed */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`grid transition-[grid-template-rows,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className={`container-page stagger flex flex-col border-t border-line/80 py-3 ${open ? "stagger-play" : ""}`} style={vars({ "--step": "45ms" })}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`flex min-h-12 items-center justify-between border-b border-line/50 text-base ${
                    active === link.id ? "text-accent" : "text-fg-muted"
                  }`}
                >
                  {link.label}
                  {active === link.id && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />}
                </a>
              </li>
            ))}
            <li className="pb-2 pt-4">
              <a href={profile.resume.href} download={profile.resume.fileName} className="btn-primary w-full">
                <DownloadIcon size={16} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Reading progress */}
      <span
        aria-hidden="true"
        data-scroll-progress
        className="pointer-events-none absolute -bottom-px left-0 h-[2px] w-full origin-left bg-gradient-to-r from-accent to-accent-soft opacity-80 will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
