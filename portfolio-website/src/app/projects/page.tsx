"use client";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "All-In-One Business Solution",
    category: "SaaS / ERP",
    description: "Designed, led and developed a multi-tenant SaaS ERP application featuring HR, Accounts, Inventory and Sales management modules.",
    techStack: ["NestJS", "Next.js", "PostgreSQL", "TypeORM"],
    link: "https://github.com/safkatms/All-in-OneBusinessSolution",
    featured: true,
  },
  {
    id: 2,
    title: "Compliant",
    category: "Enterprise",
    description: "Enhanced and maintained a compliance management system by implementing new features and migrating legacy modules to improve performance and maintainability.",
    techStack: [".NET 5", "ASP.NET MVC", "SQL Server", "React"],
    link: null,
    featured: true,
  },
  {
    id: 3,
    title: "TaskMaster",
    category: "Enterprise",
    description: "Migrated and modernized an enterprise system to .NET 8, adding new features and improving scalability, performance, and system reliability.",
    techStack: [".NET 8", "ASP.NET MVC", "SQL Server", "React"],
    link: null,
    featured: true,
  },
  {
    id: 4,
    title: "Dealora",
    category: "E-Commerce",
    description: "Designed, led and developed a B2C e-commerce platform for online shopping with full product, cart, and order management.",
    techStack: ["ASP.NET MVC", "SQL Server"],
    link: "https://github.com/safkatms/Dealora",
    featured: false,
  },
  {
    id: 5,
    title: "TrainTrack",
    category: "Internal Tool",
    description: "Developed a Training Management System for managing a company's internal training programs, scheduling, and tracking.",
    techStack: ["ASP.NET Core", "Next.js", "SQL Server", "Entity Framework", "Redux"],
    link: null,
    featured: false,
  },
  {
    id: 6,
    title: "NestCart",
    category: "E-Commerce",
    description: "A microservice-based e-commerce platform for seamless shopping experiences built with NestJS and Next.js.",
    techStack: ["NestJS", "Next.js", "Microservices"],
    link: "https://github.com/safkatms/NestCart",
    featured: false,
  },
  {
    id: 7,
    title: "StayDriveGo",
    category: "Web App",
    description: "An online hotel booking website with dynamic features using PHP, AJAX, and jQuery.",
    techStack: ["PHP", "JavaScript", "AJAX", "jQuery"],
    link: "https://github.com/safkatms/StayDriveGo",
    featured: false,
  },
];

const categories = ["All", "SaaS / ERP", "Enterprise", "E-Commerce", "Internal Tool", "Web App"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)" }}>
          Portfolio
        </span>
        <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 600, color: "var(--white)", marginTop: "0.5rem", lineHeight: 1.1 }}>
          Selected Work
        </h1>
        <div style={{ width: "40px", height: "2px", background: "var(--accent)", marginTop: "1.5rem" }} />
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "6px 16px",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: activeCategory === cat ? "var(--accent)" : "transparent",
              color: activeCategory === cat ? "var(--bg)" : "var(--text-muted)",
              border: activeCategory === cat ? "1px solid var(--accent)" : "1px solid var(--border)",
              borderRadius: "1px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured */}
      {activeCategory === "All" && (
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "20px", height: "1px", background: "var(--border)", display: "inline-block" }} />
            Featured Projects
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {projects.filter(p => p.featured).map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      )}

      {/* All or filtered */}
      <div>
        {activeCategory !== "All" ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <>
            <p style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "20px", height: "1px", background: "var(--border)", display: "inline-block" }} />
              All Projects
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {projects.filter(p => !p.featured).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

function ProjectCard({ project, featured = false }: { project: typeof projects[0]; featured?: boolean }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "2px",
        padding: featured ? "2rem" : "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "border-color 0.2s, transform 0.2s",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.3)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Category + arrow */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          fontSize: "0.62rem",
          fontWeight: 500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--accent)",
          padding: "3px 10px",
          border: "1px solid rgba(201,169,110,0.25)",
          borderRadius: "1px",
        }}>
          {project.category}
        </span>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 13L13 3M13 3H7M13 3v6" />
            </svg>
          </a>
        )}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: featured ? "1.4rem" : "1.15rem",
        fontWeight: 600,
        color: "var(--white)",
        lineHeight: 1.2,
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text-muted)", fontWeight: 300, flexGrow: 1 }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.techStack.map((tech) => (
          <span key={tech} style={{
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            color: "var(--text-muted)",
            padding: "2px 8px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--border)",
            borderRadius: "1px",
          }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Projects;
