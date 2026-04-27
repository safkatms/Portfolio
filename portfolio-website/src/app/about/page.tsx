import React from "react";
import Skills from "../components/skills";
import Educational from "../components/educational";

export default function About() {
  const experience = [
    {
      title: "Software Engineer",
      company: "ByteCode Limited",
      period: "Jan 2026 – Present",
      type: "Full-time",
      desc: "Leading feature development and system modernization, including legacy migration and performance optimization for enterprise applications.",
    },
    {
      title: "Junior Software Engineer",
      company: "ByteCode Limited",
      period: "Feb 2025 – Dec 2025",
      type: "Full-time",
      desc: "Contributed to full-stack development, implementing features and supporting system maintenance and debugging.",
    },
  ];

  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
      {/* Page title */}
      <div style={{ marginBottom: "4rem" }}>
        <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)" }}>
          About Me
        </span>
        <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 600, color: "var(--white)", marginTop: "0.5rem", lineHeight: 1.1 }}>
          Building systems that<br />
          <em style={{ fontStyle: "italic" }}>scale and endure.</em>
        </h1>
        <div style={{ width: "40px", height: "2px", background: "var(--accent)", marginTop: "1.5rem" }} />
      </div>

      {/* Bio */}
      <div style={{ marginBottom: "4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="bio-grid">
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--text-muted)", fontWeight: 300 }}>
          I&apos;m a Full Stack Developer currently working at ByteCode Limited, where I lead feature development and
          modernization of enterprise systems. My work spans .NET, NestJS, Next.js, and complex SQL environments.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--text-muted)", fontWeight: 300 }}>
          I graduated in Computer Science from AIUB with a 3.76 CGPA and bring a strong foundation in
          software engineering principles, scalable architecture, and production-grade development.
        </p>
      </div>

      {/* Experience */}
      <section style={{ marginBottom: "4rem" }}>
        <div style={{ marginBottom: "0.4rem" }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)" }}>
            Professional Experience
          </span>
        </div>
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2rem", fontWeight: 600, color: "var(--white)", marginBottom: "2rem" }}>
          Work History
        </h2>

        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: 0, top: "6px", bottom: 0, width: "1px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }} />

          {experience.map((exp, i) => (
            <div key={i} style={{ position: "relative", marginBottom: "2.5rem" }}>
              {/* Dot */}
              <div style={{
                position: "absolute",
                left: "-2.35rem",
                top: "6px",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: i === 0 ? "var(--accent)" : "var(--surface-2)",
                border: "1px solid var(--accent)",
              }} />
              <div style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                padding: "1.5rem",
                transition: "border-color 0.2s",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--white)" }}>{exp.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 400 }}>{exp.company}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      display: "block",
                    }}>
                      {exp.period}
                    </span>
                    <span style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: i === 0 ? "var(--accent)" : "var(--text-muted)",
                    }}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-muted)", fontWeight: 300 }}>
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)", marginBottom: "4rem" }} />

      <Educational />

      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)", marginBottom: "4rem" }} />

      <Skills />

      <style>{`
        @media (max-width: 640px) {
          .bio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
