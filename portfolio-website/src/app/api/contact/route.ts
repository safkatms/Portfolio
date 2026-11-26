import nodemailer from "nodemailer";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export async function POST(req: Request) {
  let payload: { name?: unknown; email?: unknown; message?: unknown };
  try {
    payload = await req.json();
  } catch {
    return json({ success: false, error: "Invalid request." }, 400);
  }

  const name = typeof payload.name === "string" ? payload.name.trim().slice(0, 200) : "";
  const email = typeof payload.email === "string" ? payload.email.trim().slice(0, 320) : "";
  const message = typeof payload.message === "string" ? payload.message.trim().slice(0, 5000) : "";

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, error: "Please provide a name, a valid email and a message." }, 400);
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "safkatmahmudsakib@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name.replace(/[\r\n]+/g, " ")}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return json({ success: true, message: "Email sent successfully!" }, 200);
  } catch (error) {
    console.error("Error sending email:", error);
    return json({ success: false, error: "Failed to send email." }, 500);
  }
}
