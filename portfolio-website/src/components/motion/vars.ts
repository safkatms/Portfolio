import type { CSSProperties } from "react";

/** Typed helper for passing CSS custom properties through `style`. */
export const vars = (v: Record<`--${string}`, string | number>) => v as CSSProperties;
