"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { profile } from "@/data/portfolio";
import { ArrowRightIcon, CheckIcon } from "./icons";

type Status = { type: "success" | "error"; msg: string } | null;

const fieldClass =
  "w-full rounded-md border border-line bg-ink/70 px-3.5 py-3 text-[0.95rem] text-fg placeholder:text-fg-subtle transition-[border-color,box-shadow,background-color] duration-300 hover:border-fg-subtle/50 focus:border-accent/70 focus:bg-ink focus:shadow-[0_0_0_4px_rgba(66,214,197,0.12)] focus:outline-none";

const labelClass = "mb-2 block text-sm font-medium text-fg transition-colors duration-300 group-focus-within/field:text-accent";

/** Posts to the existing /api/contact route (nodemailer). */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json().catch(() => ({ success: false }));
      if (res.ok && result.success) {
        setStatus({ type: "success", msg: "Message sent — thank you. I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", msg: `Couldn't send the message. Please email me directly at ${profile.email}.` });
      }
    } catch {
      setStatus({ type: "error", msg: `Couldn't send the message. Please email me directly at ${profile.email}.` });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="group/field">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={onChange} className={fieldClass} />
        </div>
        <div className="group/field">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={onChange} className={fieldClass} />
        </div>
      </div>
      <div className="group/field">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={onChange}
          className={`${fieldClass} resize-y`}
        />
      </div>
      <button type="submit" disabled={sending} className="btn-primary group w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {sending ? (
          <>
            <span aria-hidden="true" className="spinner h-4 w-4 rounded-full border-2 border-ink/30 border-t-ink" />
            Sending…
          </>
        ) : status?.type === "success" ? (
          <>
            <CheckIcon size={16} className="status-in" />
            Sent
          </>
        ) : (
          <>
            Send message
            <ArrowRightIcon size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p role="status" aria-live="polite" className="min-h-5 text-sm">
        {status && (
          <span key={status.msg + status.type} className={`status-in block ${status.type === "success" ? "text-accent" : "text-[#F4A3A3]"}`}>
            {status.msg}
          </span>
        )}
      </p>
    </form>
  );
}
