import type { Project } from "@/data/portfolio";
import { vars } from "./motion/vars";

/**
 * Stylised architecture preview built purely from a project's existing `tech` list —
 * not a screenshot. Doubles as the card's technology list for assistive tech.
 */
const LAYERS: { label: string; match: (t: string) => boolean }[] = [
  { label: "Client", match: (t) => ["React", "Next.js", "Redux"].includes(t) },
  {
    label: "Server",
    match: (t) =>
      /^(\.NET|ASP\.NET)/.test(t) || ["NestJS", "Node.js", "REST APIs", "Entity Framework", "TypeORM", "Flutter (Backend)"].includes(t),
  },
  { label: "Data", match: (t) => ["SQL Server", "PostgreSQL"].includes(t) },
];

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function ProjectPreview({ project, large = false }: { project: Project; large?: boolean }) {
  const assigned = new Set<string>();
  const layers = LAYERS.map((l) => {
    const items = project.tech.filter((t) => l.match(t));
    items.forEach((t) => assigned.add(t));
    return { label: l.label, items };
  }).filter((l) => l.items.length > 0);
  const extras = project.tech.filter((t) => !assigned.has(t));
  const mid = (layers.length - 1) / 2;

  return (
    <div
      role="group"
      aria-label={`${project.name} technologies`}
      className="relative overflow-hidden rounded-lg border border-line/80 bg-ink/70"
    >
      {/* window chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-line/70 px-3 py-2">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
          </span>
          <span aria-hidden="true" className="font-mono text-[10px] text-fg-subtle">
            {slug(project.name)}
          </span>
        </div>
        {extras.length > 0 && (
          <ul className="flex flex-wrap justify-end gap-1">
            {extras.map((t) => (
              <li key={t} className="rounded border border-accent/30 bg-accent/10 px-1.5 py-px font-mono text-[10px] text-accent">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* stack */}
      <div className={`relative ${large ? "space-y-2.5 p-4" : "space-y-2 p-3"}`}>
        {/* rail + flowing data dot behind the layers */}
        <span aria-hidden="true" className="absolute bottom-5 left-[2.15rem] top-5 w-px overflow-hidden bg-line/80">
          <span className="flow-dot absolute left-0 top-0 h-4 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
        </span>
        {layers.map((layer, i) => (
          <div
            key={layer.label}
            className="preview-layer relative flex items-center gap-3 rounded-md border border-line/80 bg-surface px-2.5 py-1.5"
            style={vars({ "--spread": i - mid })}
          >
            <span className="w-11 shrink-0 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">{layer.label}</span>
            <ul className="flex flex-wrap gap-1.5">
              {layer.items.map((t) => (
                <li
                  key={t}
                  className="rounded border border-line/70 bg-ink/40 px-1.5 py-px font-mono text-[11px] text-fg-muted transition-colors duration-300 group-hover:text-fg"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
