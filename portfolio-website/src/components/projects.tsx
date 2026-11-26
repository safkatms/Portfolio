import { otherProjects, projects, socials, type Project } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon, LockIcon } from "./icons";
import { vars } from "./motion/vars";
import ProjectPreview from "./project-preview";
import Reveal from "./reveal";
import Section from "./section";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Projects"
      title="Featured projects."
      lead="Production work at ByteCode Limited alongside academic projects. Company codebases are private; public repositories are linked."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.name} delay={i * 110} className="h-full">
            <ProjectCard project={p} large />
          </Reveal>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.name} delay={i * 110} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="flex flex-col gap-4 border-t border-line/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">More on GitHub</h3>
          <a
            href={socials.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <GitHubIcon size={16} />
            All repositories
            <ArrowUpRightIcon size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <ul className="stagger mt-5 grid gap-3 sm:grid-cols-2" style={vars({ "--d": "150ms", "--step": "90ms" })}>
          {otherProjects.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="spotlight group flex items-center justify-between gap-4 rounded-lg border border-line px-4 py-3.5 transition-colors duration-300 hover:border-accent/40 hover:bg-surface/60"
              >
                <span className="min-w-0 transition-transform duration-300 group-hover:translate-x-1">
                  <span className="block text-sm font-medium text-fg">{p.name}</span>
                  <span className="mt-0.5 block text-sm text-fg-muted">
                    {p.description} <span className="font-mono text-xs text-fg-subtle">{p.tech}</span>
                  </span>
                </span>
                <ArrowUpRightIcon
                  size={16}
                  className="shrink-0 text-fg-subtle transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
                <span className="sr-only">View {p.name} on GitHub (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article
      data-tilt={large ? 2.5 : undefined}
      className={`glass glass-border spotlight lift group flex h-full flex-col rounded-xl ${large ? "p-6 sm:p-8" : "p-6"}`}
    >
      <ProjectPreview project={project} large={large} />

      <div className="mt-6 flex items-start justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{project.kind}</p>
        {!project.href && (
          <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] text-fg-subtle">
            <LockIcon size={12} />
            Private
          </span>
        )}
      </div>
      <h3
        className={`mt-3 font-semibold tracking-tight text-fg transition-colors duration-300 group-hover:text-white ${
          large ? "text-2xl" : "text-lg"
        }`}
      >
        {project.name}
      </h3>
      <p className={`mt-3 flex-1 leading-relaxed text-fg-muted ${large ? "text-[0.95rem]" : "text-sm"}`}>{project.description}</p>

      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-6 inline-flex items-center gap-2 self-start border-t border-line/70 pt-5 text-sm font-medium text-fg transition-colors hover:text-accent"
        >
          <GitHubIcon size={16} />
          View source
          <ArrowUpRightIcon
            size={14}
            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
          <span className="sr-only">for {project.name} on GitHub (opens in a new tab)</span>
        </a>
      )}
    </article>
  );
}
