import type { ReactNode } from "react";
import { vars } from "./motion/vars";
import Reveal from "./reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Consistent section shell: anchor id, numbered eyebrow, heading and optional lead — revealed as a stagger. */
export default function Section({ id, index, eyebrow, title, lead, children, className = "" }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`relative border-t border-line/70 py-20 sm:py-24 ${className}`}>
      <div className="container-page">
        <Reveal group className="stagger mb-12 max-w-2xl sm:mb-14" style={vars({ "--step": "90ms" })}>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-fg-subtle">{index}</span>
            <span aria-hidden="true" className="draw-x h-px w-8 bg-accent/60" style={vars({ "--d": "150ms" })} />
            {eyebrow}
          </p>
          <h2 id={headingId} className="mt-4 text-3xl font-semibold tracking-tight text-fg transition-colors sm:text-4xl">
            {title}
          </h2>
          {lead && <p className="mt-4 text-base leading-relaxed text-fg-muted">{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
