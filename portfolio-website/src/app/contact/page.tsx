"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setStatus({ type: "success", msg: "Message sent. I'll be in touch shortly." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", msg: "Failed to send. Please try again or email me directly." });
      }
    } catch {
      setStatus({ type: "error", msg: "An error occurred. Please email me directly." });
    } finally {
      setSending(false);
    }
  };

  const contacts = [
    { label: "Email", value: "safkatmahmudsakib@gmail.com", href: "mailto:safkatmahmudsakib@gmail.com" },
    { label: "Phone", value: "+880 1629 313026", href: "tel:+8801629313026" },
    { label: "LinkedIn", value: "linkedin.com/in/safkatms", href: "https://linkedin.com/in/safkatms" },
    { label: "GitHub", value: "github.com/safkatms", href: "https://github.com/safkatms" },
  ];

  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "4rem" }}>
        <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)" }}>
          Get In Touch
        </span>
        <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 600, color: "var(--white)", marginTop: "0.5rem", lineHeight: 1.1 }}>
          Let&apos;s work together.
        </h1>
        <div style={{ width: "40px", height: "2px", background: "var(--accent)", marginTop: "1.5rem" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }} className="contact-grid">
        {/* Left info */}
        <div>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-muted)", fontWeight: 300, marginBottom: "2.5rem" }}>
            Currently open to new opportunities and collaborations. Whether it&apos;s a project, role, or just to connect — feel free to reach out.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {contacts.map((c) => (
              <div key={c.label}>
                <p style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "4px" }}>
                  {c.label}
                </p>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.88rem", color: "var(--text)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "2px", padding: "2.5rem" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} style={{ display: "block", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  style={{
                    width: "100%",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    padding: "12px 16px",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    borderRadius: "1px",
                    outline: "none",
                    fontFamily: "inherit",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")}
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" style={{ display: "block", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                style={{
                  width: "100%",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  padding: "12px 16px",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  borderRadius: "1px",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent)")}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--border)")}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              style={{
                width: "100%",
                padding: "14px",
                background: sending ? "rgba(201,169,110,0.6)" : "var(--accent)",
                color: "var(--bg)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: "1px",
                cursor: sending ? "not-allowed" : "pointer",
                fontFamily: "inherit",
                transition: "opacity 0.2s",
              }}
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>

            {status && (
              <div style={{
                padding: "12px 16px",
                borderRadius: "1px",
                border: `1px solid ${status.type === "success" ? "rgba(74,222,128,0.3)" : "rgba(248,113,113,0.3)"}`,
                background: status.type === "success" ? "rgba(74,222,128,0.07)" : "rgba(248,113,113,0.07)",
                fontSize: "0.82rem",
                color: status.type === "success" ? "#4ade80" : "#f87171",
              }}>
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        ::placeholder { color: var(--text-muted); opacity: 1; }
      `}</style>
    </main>
  );
};

export default ContactPage;
