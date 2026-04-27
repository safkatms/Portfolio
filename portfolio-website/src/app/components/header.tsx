"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "0.05em" }}>
            Safkat
          </span>
          <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            Software Engineer
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: pathname === link.href ? "var(--accent)" : "var(--text-muted)",
                transition: "color 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = "var(--text)"; }}
              onMouseLeave={(e) => { if (pathname !== link.href) (e.target as HTMLElement).style.color = "var(--text-muted)"; }}
            >
              {link.label}
              {pathname === link.href && (
                <span style={{ position: "absolute", bottom: "-4px", left: 0, right: 0, height: "1px", background: "var(--accent)" }} />
              )}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            download
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--bg)",
              background: "var(--accent)",
              padding: "8px 18px",
              borderRadius: "1px",
              transition: "opacity 0.2s ease",
            }}
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer", padding: "8px" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {isMenuOpen ? (
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7h16M3 11h16M3 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: pathname === link.href ? "var(--accent)" : "var(--text-muted)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            download
            style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
