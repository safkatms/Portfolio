import { skillGroups } from "@/data/portfolio";
import Reveal from "./reveal";
import Section from "./section";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="Technical toolkit."
      lead="The languages, frameworks and tools I use in day-to-day work and projects."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 90} className="spotlight group/cell bg-ink p-6 sm:p-7">
            <h3 className="flex items-center gap-2.5 text-sm font-semibold text-fg">
              <span
                aria-hidden="true"
                className="font-mono text-xs font-normal text-accent transition-transform duration-500 group-hover/cell:translate-x-0.5"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {group.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip hover:border-accent/50 hover:bg-card hover:text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
