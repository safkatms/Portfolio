"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ minHeight: "calc(100vh - 72px)", display: "flex", alignItems: "center" }}>
      {/* Background ambient */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
          className="grid-responsive">

          {/* Left — Text */}
          <div>
            <div className="animate-fade-up" style={{ marginBottom: "2rem" }}>
              <span style={{
                fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase",
                color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: "8px",
              }}>
                <span style={{ width: "30px", height: "1px", background: "var(--accent)", display: "inline-block" }} />
                Software Engineer
              </span>
            </div>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                color: "var(--white)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Safkat<br />
              <span className="text-shimmer">Mahmud Sakib</span>
            </h1>

            <p
              className="animate-fade-up delay-200"
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--text-muted)",
                maxWidth: "480px",
                marginBottom: "2.5rem",
                fontWeight: 300,
              }}
            >
              Full Stack Developer building enterprise applications, SaaS ERP systems, and scalable architectures with{" "}
              <span style={{ color: "var(--text)" }}>.NET</span>,{" "}
              <span style={{ color: "var(--text)" }}>NestJS</span>, and{" "}
              <span style={{ color: "var(--text)" }}>Next.js</span>.
            </p>

            <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <a href="/projects" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 28px", background: "var(--accent)", color: "var(--bg)",
                fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
                borderRadius: "1px", textDecoration: "none", transition: "opacity 0.2s",
              }}>
                View Projects
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/cv.pdf" download style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "11px 28px", background: "transparent", color: "var(--accent)",
                fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
                border: "1px solid rgba(201,169,110,0.4)", borderRadius: "1px", textDecoration: "none", transition: "all 0.2s",
              }}>
                Download CV
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 1v8M3 6l3.5 3.5L10 6M1 12h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Social */}
            <div className="animate-fade-up delay-400" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>Find me</span>
              <span style={{ width: "24px", height: "1px", background: "var(--border)" }} />
              {[
                {
                  href: "https://github.com/safkatms",
                  label: "GitHub",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  href: "https://linkedin.com/in/safkatms",
                  label: "LinkedIn",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  href: "mailto:safkatmahmudsakib@gmail.com",
                  label: "Email",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 8l10 6 10-6" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="animate-fade-in delay-300" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              {/* Decorative frame */}
              <div style={{
                position: "absolute",
                inset: "-12px",
                border: "1px solid rgba(201,169,110,0.2)",
                borderRadius: "2px",
                zIndex: 0,
              }} />
              <div style={{
                position: "absolute",
                inset: "-24px",
                border: "1px solid rgba(201,169,110,0.07)",
                borderRadius: "2px",
                zIndex: 0,
              }} />
              {/* Gold accent corner */}
              <div style={{
                position: "absolute",
                bottom: "-12px",
                right: "-12px",
                width: "60px",
                height: "60px",
                borderBottom: "2px solid var(--accent)",
                borderRight: "2px solid var(--accent)",
                zIndex: 2,
              }} />
              <div style={{
                position: "absolute",
                top: "-12px",
                left: "-12px",
                width: "60px",
                height: "60px",
                borderTop: "2px solid var(--accent)",
                borderLeft: "2px solid var(--accent)",
                zIndex: 2,
              }} />
              <Image
                src="/Profile.jpg"
                alt="Safkat Mahmud Sakib"
                width={400}
                height={480}
                style={{
                  width: "100%",
                  maxWidth: "360px",
                  height: "440px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderRadius: "2px",
                  display: "block",
                  filter: "grayscale(15%) contrast(1.05)",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              {/* Status badge */}
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "-20px",
                background: "var(--surface)",
                border: "1px solid rgba(201,169,110,0.25)",
                padding: "10px 16px",
                borderRadius: "2px",
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <span style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 8px rgba(74,222,128,0.6)",
                  display: "inline-block",
                }} />
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-500" style={{
          marginTop: "5rem",
          paddingTop: "3rem",
          borderTop: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          maxWidth: "600px",
        }}>
          {[
            { num: "2+", label: "Years Experience" },
            { num: "5+", label: "Projects Shipped" },
            { num: "3.76", label: "CGPA — AIUB" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "2.2rem",
                fontWeight: 600,
                color: "var(--accent)",
                lineHeight: 1,
                marginBottom: "4px",
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .grid-responsive > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </main>
  );
}
