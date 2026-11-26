import { about, experience } from "@/data/portfolio";
import { vars } from "./motion/vars";
import Reveal from "./reveal";
import Section from "./section";

export default function About() {
  // Oldest → newest for the progression strip
  const path = [...experience.roles].reverse();

  return (
    <Section id="about" index="01" eyebrow="About" title="Building and owning production software.">
      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <Reveal group className="stagger space-y-5 text-base leading-[1.8] text-fg-muted sm:text-[1.0625rem]" style={vars({ "--step": "120ms" })}>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={100} className="space-y-6">
          <dl
            className="stagger glass glass-border spotlight divide-y divide-line/70 overflow-hidden rounded-lg"
            style={vars({ "--d": "250ms", "--step": "60ms" })}
          >
            {about.facts.map((f) => (
              <div
                key={f.label}
                className="grid grid-cols-[7.5rem_1fr] gap-4 px-5 py-3.5 text-sm transition-colors duration-300 hover:bg-card/50"
              >
                <dt className="font-mono text-xs uppercase leading-5 tracking-wider text-fg-subtle">{f.label}</dt>
                <dd className="text-fg">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="glass glass-border rounded-lg px-5 py-5">
            <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">Progression at ByteCode</p>
            <div className="relative mt-4">
            {/* connector rail drawn behind the dots */}
            <span
              aria-hidden="true"
              className="draw-y absolute bottom-2 left-[3.5px] top-2 w-px bg-gradient-to-b from-line to-accent/60"
              style={vars({ "--d": "500ms" })}
            />
            <ol className="relative space-y-3.5">
              {path.map((r, i) => (
                <li key={r.title} className="relative flex items-baseline justify-between gap-4 text-sm">
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`pop h-2 w-2 shrink-0 rounded-full ${
                        r.current ? "pulse-ring relative bg-accent" : "border border-fg-subtle bg-ink"
                      }`}
                      style={vars({ "--d": "600ms", "--s": i, "--step": "260ms" })}
                    />
                    <span className={r.current ? "font-medium text-fg" : "text-fg-muted"}>{r.title}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs text-fg-subtle">{r.period.split(" – ")[0]}</span>
                </li>
              ))}
            </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
