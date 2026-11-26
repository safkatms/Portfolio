import { profile, socials } from "@/data/portfolio";
import {
  ArrowRightIcon,
  GitHubIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./icons";
import ProfilePhoto from "./profile-photo";
import RoleRotator from "./role-rotator";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section
      id="home"
      data-hero
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Background: panning grid + local accent wash (global ambient light sits behind) */}
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 overflow-hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_75%_40%,rgba(66,214,197,0.07),transparent_70%)]"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 pb-20 pt-32 sm:pt-36 lg:min-h-[100svh] lg:grid-cols-[1.08fr_1fr] lg:gap-16 lg:pb-24 lg:pt-28">
        <div>
          <p
            className="eyebrow animate-in flex items-center gap-3"
            style={delay(150)}
          >
            <span aria-hidden="true" className="h-px w-6 bg-accent/70" />
            Hello, I&apos;m
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-fg transition-colors sm:text-6xl lg:text-[4.1rem]"
          >
            <span className="word-rise" style={delay(220)}>
              Safkat
            </span>{" "}
            <span className="word-rise" style={delay(300)}>
              Mahmud
            </span>
            <br />
            <span className="word-rise" style={delay(380)}>
              Sakib<span className="text-accent">.</span>
            </span>
          </h1>
          <p
            className="animate-in mt-5 text-lg font-medium text-fg sm:text-xl"
            style={delay(480)}
          >
            <RoleRotator roles={profile.roles} />
          </p>
          <p
            className="animate-in mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-[1.0625rem]"
            style={delay(560)}
          >
            {profile.intro}
          </p>

          <div
            className="animate-in mt-9 flex flex-col gap-3 sm:flex-row"
            style={delay(640)}
          >
            <a href="#contact" className="btn-primary group">
              Get in Touch
              <ArrowRightIcon
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href={socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <GitHubIcon
                size={17}
                className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
              />
              View GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <ul
            className="animate-in mt-10 flex flex-col gap-3 border-t border-line/70 pt-6 text-sm text-fg-muted sm:flex-row sm:flex-wrap sm:gap-x-7"
            style={delay(720)}
          >
            <li className="flex items-center gap-2.5">
              <PinIcon size={16} className="text-accent" />
              {profile.location}
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-2.5 transition-colors hover:text-accent"
              >
                <MailIcon
                  size={16}
                  className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span className="break-all">{profile.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone}`}
                className="group flex items-center gap-2.5 transition-colors hover:text-accent"
              >
                <PhoneIcon
                  size={16}
                  className="text-accent transition-transform duration-300 group-hover:-rotate-12"
                />
                {profile.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        {/* Visual: scroll parallax → pointer tilt → portrait */}
        <div className="animate-in relative min-w-0" style={delay(450)}>
          <div
            data-hero-parallax
            className="hero-parallax mx-auto w-full max-w-[440px] lg:mr-0"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-10 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(66,214,197,0.14),transparent)]"
            />
            <div data-hero-tilt className="hero-tilt relative">
              <ProfilePhoto />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue (large screens) */}
      <div
        data-hero-cue
        className="scroll-cue absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <a
          href="#about"
          aria-label="Scroll to About"
          className="animate-in flex flex-col items-center gap-2 text-fg-subtle transition-colors hover:text-accent"
          style={delay(1500)}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
            Scroll
          </span>
          <span className="relative h-9 w-px overflow-hidden bg-line">
            <span className="scroll-cue-dot absolute left-0 top-0 h-3 w-px bg-accent" />
          </span>
        </a>
      </div>
    </section>
  );
}
