"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Delay in ms; also offsets any staggered children. */
  delay?: number;
  /**
   * When true the element itself doesn't fade; only its `.stagger` children,
   * `.pop` and `.draw-*` descendants animate.
   */
  group?: boolean;
  style?: CSSProperties;
};

// One IntersectionObserver shared by every Reveal on the page.
const callbacks = new WeakMap<Element, () => void>();
let observer: IntersectionObserver | null = null;

function observe(el: Element, cb: () => void) {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          callbacks.get(entry.target)?.();
          callbacks.delete(entry.target);
          observer?.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
  }
  callbacks.set(el, cb);
  observer.observe(el);
  return () => {
    callbacks.delete(el);
    observer?.unobserve(el);
  };
}

/** Reveals content once when it scrolls into view. Reduced motion is handled in CSS. */
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, group = false, style }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    return observe(node, () => setVisible(true));
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${group ? "reveal-group" : ""} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? ({ "--d": `${delay}ms`, ...style } as CSSProperties) : style}
    >
      {children}
    </Tag>
  );
}
