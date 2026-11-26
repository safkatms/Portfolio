import { education } from "@/data/portfolio";
import { vars } from "./motion/vars";
import Reveal from "./reveal";
import Section from "./section";

export default function Education() {
  const { degree, secondary, certifications } = education;

  return (
    <Section id="education" index="05" eyebrow="Education" title="Education & certification.">
      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="h-full">
          <article className="glass glass-border spotlight lift flex h-full flex-col justify-between gap-8 rounded-xl p-6 sm:p-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Undergraduate degree</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg sm:text-2xl">{degree.title}</h3>
              <p className="mt-2 text-fg-muted">{degree.institution}</p>
            </div>
            <dl className="grid grid-cols-2 gap-4 border-t border-line/70 pt-6">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">Period</dt>
                <dd className="mt-1 text-fg">{degree.period}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">Result</dt>
                <dd className="mt-1 text-fg">{degree.grade}</dd>
              </div>
            </dl>
          </article>
        </Reveal>

        <Reveal group className="stagger flex flex-col gap-5" style={vars({ "--d": "120ms", "--step": "120ms" })}>
          {certifications.map((c) => (
            <article key={c.title} className="glass glass-border spotlight lift rounded-xl p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent">Certification</p>
              <h3 className="mt-3 text-lg font-semibold text-fg">{c.title}</h3>
              <p className="mt-1 text-sm text-fg-muted">
                {c.issuer} · <span className="font-mono text-xs text-fg-subtle">{c.period}</span>
              </p>
            </article>
          ))}
          {secondary.map((s) => (
            <article key={s.title} className="spotlight lift rounded-xl border border-line p-6 hover:border-accent/30">
              <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">Higher secondary</p>
              <h3 className="mt-3 text-base font-semibold text-fg">{s.title}</h3>
              <p className="mt-1 text-sm text-fg-muted">
                {s.institution} · <span className="font-mono text-xs text-fg-subtle">{s.period}</span>
              </p>
              <p className="mt-1 text-sm text-fg-muted">{s.grade}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
