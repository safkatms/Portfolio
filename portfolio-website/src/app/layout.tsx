import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";
import AmbientBackground from "@/components/ambient-background";
import MotionEffects from "@/components/motion/motion-effects";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

const title = `${profile.name} — Software Engineer | Full-Stack Developer`;
const description =
  "Software Engineer in Dhaka, Bangladesh specialising in .NET, React and SQL Server — backend architecture, REST APIs, multi-tenant SaaS and backend development for Flutter applications.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: profile.name }],
  keywords: [
    "Safkat Mahmud Sakib",
    "Software Engineer",
    "Full-Stack Developer",
    ".NET 8",
    "React",
    "SQL Server",
    "ASP.NET Core",
    "Multi-tenant SaaS",
    "Dhaka",
  ],
  openGraph: {
    type: "profile",
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal,.reveal *{opacity:1!important;transform:none!important;animation:none!important}`}</style>
        </noscript>
        <AmbientBackground />
        {children}
        <MotionEffects />
      </body>
    </html>
  );
}
