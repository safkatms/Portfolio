"use client";

import { useEffect, useState } from "react";
import { profile, socials } from "@/data/portfolio";
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Footer() {
  // Computed on the client so the year stays current even on a statically built page.
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  const links = [
    { label: "GitHub", href: socials.github.href, icon: <GitHubIcon size={17} />, external: true },
    { label: "LinkedIn", href: socials.linkedin.href, icon: <LinkedInIcon size={16} />, external: true },
    { label: "Email", href: `mailto:${profile.email}`, icon: <MailIcon size={17} />, external: false },
  ];

  return (
    <footer className="border-t border-line/70">
      <div className="container-page flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-5">
          <a href="#home" className="font-mono text-sm font-semibold text-fg transition-colors hover:text-accent">
            <span className="text-accent">&lt;/&gt;</span> {profile.shortName}
          </a>
          <p className="text-sm text-fg-subtle">
            © <span suppressHydrationWarning>{year ?? ""}</span> {profile.name}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={l.external ? `${l.label} (opens in a new tab)` : l.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-fg-muted transition-[color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-surface hover:text-accent"
            >
              {l.icon}
            </a>
          ))}
          <span aria-hidden="true" className="mx-2 h-5 w-px bg-line" />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
            className="group inline-flex h-10 items-center gap-2 rounded-md border border-line px-3 text-sm text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <ArrowUpIcon size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
