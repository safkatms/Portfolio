import React from "react";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnet/dotnet-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" style={{ paddingBottom: "3rem" }}>
      <div style={{ marginBottom: "0.4rem" }}>
        <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)" }}>
          Technical Proficiency
        </span>
      </div>
      <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2rem", fontWeight: 600, color: "var(--white)", marginBottom: "2.5rem" }}>
        Skills & Technologies
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ width: "20px", height: "1px", background: "var(--border)", display: "inline-block" }} />
              {group.label}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    transition: "border-color 0.2s, transform 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.35)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <img src={skill.icon} alt={skill.name} style={{ width: "18px", height: "18px", objectFit: "contain" }} />
                  <span style={{ fontSize: "0.82rem", fontWeight: 400, color: "var(--text)" }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
        <h3 style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ width: "20px", height: "1px", background: "var(--border)", display: "inline-block" }} />
          Certifications
        </h3>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 20px",
          background: "var(--surface)",
          border: "1px solid rgba(201,169,110,0.2)",
          borderRadius: "2px",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M8.56 13.96L7 22l5-3 5 3-1.56-8.04" />
          </svg>
          <div>
            <p style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text)" }}>IT Essentials</p>
            <p style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Cisco · Issued June 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
