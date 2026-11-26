"use client";

import { useEffect, useRef, useState } from "react";

type Props = { roles: readonly string[]; interval?: number };

/**
 * Shows one role at a time: the current role slides up and out while the next slides in from below.
 * - All roles share one grid cell, so the line keeps the width of the longest role (no layout shift).
 * - Screen readers get the full list once (sr-only); the animated copy is aria-hidden.
 * - Pauses while hovered; under prefers-reduced-motion it doesn't rotate and CSS shows all roles statically.
 */
export default function RoleRotator({ roles, interval = 2600 }: Props) {
  const [{ index, prev }, setState] = useState<{ index: number; prev: number | null }>({ index: 0, prev: null });
  const paused = useRef(false);

  useEffect(() => {
    if (roles.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (paused.current || document.hidden) return;
      setState((s) => ({ prev: s.index, index: (s.index + 1) % roles.length }));
    }, interval);
    return () => window.clearInterval(id);
  }, [roles.length, interval]);

  return (
    <>
      <span className="sr-only">{roles.join(", ")}</span>

      {/* Reduced motion: static list, same as the original layout */}
      <span aria-hidden="true" className="roles-static flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
        {roles.map((role, i) => (
          <span key={role} className="flex items-center gap-3">
            {i > 0 && <span className="hidden h-4 w-px bg-line sm:block" />}
            {role}
          </span>
        ))}
      </span>

      <span
        aria-hidden="true"
        className="roles-rotator items-center gap-3"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <span className="h-5 w-[2px] rounded-full bg-accent" />
        <span className="grid overflow-hidden py-1">
          {roles.map((role, i) => {
            // Before the first tick the current role is shown without animation (the hero handles the entrance).
            const state = i === index ? (prev === null ? "role-static" : "role-in") : i === prev ? "role-out" : "role-hidden";
            return (
              <span key={role} className={`col-start-1 row-start-1 whitespace-nowrap ${state}`}>
                {role}
              </span>
            );
          })}
        </span>
      </span>
    </>
  );
}
