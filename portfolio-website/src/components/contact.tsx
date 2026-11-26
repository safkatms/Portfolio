import type { ReactNode } from "react";
import { profile, socials } from "@/data/portfolio";
import ContactForm from "./contact-form";
import { FacebookIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from "./icons";
import { vars } from "./motion/vars";
import Reveal from "./reveal";
import Section from "./section";

type Item = { label: string; value: string; href?: string; icon: ReactNode; external?: boolean };

export default function Contact() {
  const items: Item[] = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon size={18} /> },
    { label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phone}`, icon: <PhoneIcon size={18} /> },
    { label: "Location", value: profile.location, icon: <PinIcon size={18} /> },
    { label: "LinkedIn", value: socials.linkedin.handle, href: socials.linkedin.href, icon: <LinkedInIcon size={17} />, external: true },
    { label: "GitHub", value: socials.github.handle, href: socials.github.href, icon: <GitHubIcon size={17} />, external: true },
  ];

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Let's connect."
      lead="I'm open to new opportunities and collaborations. Whether it's a role, a project or a technical conversation, email is the quickest way to reach me."
      className="overflow-x-clip bg-gradient-to-b from-transparent to-surface/40"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
        <Reveal>
          <a href={`mailto:${profile.email}`} className="btn-primary group">
            <MailIcon size={16} className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
            Email me
          </a>

          <ul
            className="stagger mt-8 divide-y divide-line/70 border-y border-line/70"
            style={vars({ "--d": "200ms", "--step": "70ms" })}
          >
            {items.map((item) => {
              const content = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line text-accent transition-[background-color,border-color,transform] duration-300 group-hover:scale-105 group-hover:border-accent/50 group-hover:bg-accent/10">
                    {item.icon}
                  </span>
                  <span className="min-w-0 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-fg-subtle">{item.label}</span>
                    <span className="block break-words text-[0.95rem] text-fg transition-colors group-hover:text-accent">
                      {item.value}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 py-4"
                    >
                      {content}
                      {item.external && <span className="sr-only">(opens in a new tab)</span>}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <a
            href={socials.facebook.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-fg-subtle transition-colors hover:text-accent"
          >
            <FacebookIcon size={15} />
            Also on Facebook
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>

        <Reveal delay={100} className="relative isolate">
          {/* Ambient light rising behind the form */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -bottom-16 -top-10 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_50%_70%,rgba(66,214,197,0.10),transparent_70%)]"
          />
          <div className="glass glass-border spotlight rounded-xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-fg">Send a message</h3>
            <p className="mb-6 mt-1.5 text-sm text-fg-muted">It goes straight to my inbox.</p>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
