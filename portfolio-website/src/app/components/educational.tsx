import React from "react";

const degrees = [
  {
    level: "BSc",
    title: "Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    period: "2021 – 2025",
    score: "3.76 / 4.00",
    note: "Relevant: OOP, Data Structures, Algorithms, Software Engineering, AI, ERP, .NET",
  },
  {
    level: "HSC",
    title: "Higher Secondary Certificate",
    institution: "Milestone College, Dhaka",
    period: "2019",
    score: "5.00 / 5.00",
    note: "Science Group",
  },
  {
    level: "SSC",
    title: "Secondary School Certificate",
    institution: "Patuakhali Govt. Jubilee High School",
    period: "2017",
    score: "4.59 / 5.00",
    note: "Science Group",
  },
];

const Educational = () => {
  return (
    <section id="education" style={{ paddingBottom: "3rem" }}>
      <div style={{ marginBottom: "0.4rem" }}>
        <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)" }}>
          Academic Background
        </span>
      </div>
      <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2rem", fontWeight: 600, color: "var(--white)", marginBottom: "2rem" }}>
        Education
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        {degrees.map((d, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: "2rem",
              padding: "1.75rem 0",
              borderBottom: "1px solid var(--border)",
              alignItems: "start",
              transition: "background 0.2s",
            }}
            className="edu-row"
          >
            {/* Level badge */}
            <div>
              <span style={{
                display: "inline-block",
                padding: "4px 10px",
                border: "1px solid rgba(201,169,110,0.35)",
                color: "var(--accent)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderRadius: "1px",
              }}>
                {d.level}
              </span>
            </div>

            {/* Info */}
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--white)", marginBottom: "4px" }}>
                {d.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "6px" }}>
                {d.institution} · {d.period}
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                {d.note}
              </p>
            </div>

            {/* Score */}
            <div style={{ textAlign: "right" }}>
              <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.4rem", fontWeight: 600, color: "var(--accent)" }}>
                {d.score}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .edu-row:hover { padding-left: 8px; transition: padding 0.3s ease; }
        @media (max-width: 640px) {
          .edu-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
          .edu-row > div:last-child { text-align: left !important; }
        }
      `}</style>
    </section>
  );
};

export default Educational;
