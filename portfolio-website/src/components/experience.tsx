import { experience, type Role } from "@/data/portfolio";
import { ArrowRightIcon, PinIcon } from "./icons";
import { vars } from "./motion/vars";
import Reveal from "./reveal";
import Section from "./section";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experience"
      title="Professional experience."
      lead="From intern to Software Engineer at one company, with growing ownership of backend architecture and production systems."
    >
      <Reveal className="mb-10 flex flex-col gap-2 border-b border-line/70 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-fg">{experience.company}</h3>
          <p className="mt-1.5 flex items-center gap-2 text-sm text-fg-muted">
            <PinIcon size={14} className="text-fg-subtle" />
            {experience.location}
          </p>
        </div>
        <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">{experience.period}</p>
      </Reveal>

      {/* Timeline: base rail + accent rail that fills with scroll (scaleY written by MotionEffects) */}
      <div data-rail className="relative">
        <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-accent via-accent/70 to-accent-soft/40 will-change-transform"
          data-rail-fill
          style={{ transform: "scaleY(0)" }}
        />
        <ol className="relative space-y-10 sm:space-y-12">
          {experience.roles.map((role) => (
            <Reveal as="li" key={role.title} className="relative pl-9 sm:pl-12">
              <span
                aria-hidden="true"
                className={`pop absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 bg-ink ${
                  role.current ? "border-accent shadow-[0_0_0_4px_rgba(66,214,197,0.12)]" : "border-line"
                }`}
                style={vars({ "--d": "100ms" })}
              >
                {role.current && <span className="pulse-ring absolute inset-[3px] rounded-full bg-accent" />}
              </span>
              {role.current ? <CurrentRole role={role} /> : <PastRole role={role} />}
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function RoleHeader({ role }: { role: Role }) {
  return (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <h4 className={`font-semibold text-fg ${role.current ? "text-xl sm:text-2xl" : "text-lg"}`}>
        {role.title}
        {role.current && (
          <span className="ml-3 inline-flex translate-y-[-2px] items-center rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 align-middle font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
            Current
          </span>
        )}
      </h4>
      <p className="shrink-0 font-mono text-xs text-fg-subtle">
        <time dateTime={role.dateTime}>{role.period}</time>
      </p>
    </div>
  );
}

function Bullets({ points, accent, delay }: { points: string[]; accent?: boolean; delay: number }) {
  return (
    <ul className="stagger space-y-3" style={vars({ "--d": `${delay}ms`, "--step": "80ms" })}>
      {points.map((p) => (
        <li key={p} className="group/item flex gap-3 text-[0.95rem] leading-relaxed text-fg-muted">
          <span
            aria-hidden="true"
            className={`mt-[0.7em] h-px w-3 shrink-0 transition-[width] duration-300 group-hover/item:w-4 ${accent ? "bg-accent" : "bg-fg-subtle"}`}
          />
          <span className="transition-colors duration-300 group-hover/item:text-fg">{p}</span>
        </li>
      ))}
    </ul>
  );
}

function CurrentRole({ role }: { role: Role }) {
  return (
    <article className="glass glass-border spotlight rounded-xl bg-gradient-to-b from-card/50 to-transparent p-5 sm:p-8">
      <RoleHeader role={role} />

      {role.highlight && (
        <div className="mt-6 rounded-lg border border-accent/25 bg-ink/50 p-4 sm:p-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Key ownership · {role.highlight.label}</p>
          {/* Sequenced: legacy → arrow → new stack */}
          <div className="stagger mt-3 flex flex-wrap items-center gap-2.5" style={vars({ "--d": "300ms", "--step": "140ms" })}>
            <span className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-fg-subtle">{role.highlight.from}</span>
            <ArrowRightIcon size={16} className="text-accent" />
            {role.highlight.to.map((t) => (
              <span key={t} className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-xs text-fg">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-fg-muted">{role.highlight.note}</p>
        </div>
      )}

      <div className="mt-6">
        <Bullets points={role.points} accent delay={500} />
      </div>

      {role.tags && (
        <ul className="mt-7 flex flex-wrap gap-2 border-t border-line/70 pt-6" aria-label="Technologies">
          {role.tags.map((t) => (
            <li key={t} className="chip hover:border-accent/50 hover:text-fg">
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function PastRole({ role }: { role: Role }) {
  return (
    <article className="pt-0.5">
      <RoleHeader role={role} />
      <div className="mt-4">
        <Bullets points={role.points} delay={150} />
      </div>
    </article>
  );
}
