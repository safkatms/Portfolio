import Image from "next/image";
import { profile } from "@/data/portfolio";

/**
 * Hero portrait. The source is a full-length photo, so it is cropped to head-and-torso by scaling
 * from the bottom edge (scale 1.6 → shows roughly the lower 62% of the image), then toned into the
 * palette with a bottom fade. next/image serves resized WebP/AVIF, so the PNG source size is fine.
 */
export default function ProfilePhoto() {
  return (
    <figure className="glass-border relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-2xl bg-surface shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)] lg:mr-0">
      <Image
        src="/images/safkat-mahmud-sakib.png"
        alt={`${profile.name}, ${profile.roles[0]}`}
        fill
        priority
        sizes="(min-width: 1024px) 700px, 150vw"
        className="origin-bottom scale-[1.6] object-cover"
      />

      {/* Palette toning: soft navy vignette + bottom fade into the page */}
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_35%,transparent_55%,rgba(11,18,32,0.55))]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
      {/* Top light edge */}
      <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <figcaption className="glass glass-border absolute bottom-4 left-4 flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs text-fg">
        <span aria-hidden="true" className="pulse-ring relative h-1.5 w-1.5 rounded-full bg-accent" />
        <span>
          {profile.roles[0]} <span className="text-fg-subtle">·</span> ByteCode Limited
        </span>
      </figcaption>
    </figure>
  );
}
