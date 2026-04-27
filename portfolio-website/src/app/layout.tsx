import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import ScrollToTop from "./components/scroll";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Safkat Mahmud Sakib — Software Engineer",
  description: "Full Stack Developer specializing in enterprise applications, SaaS ERP systems, and scalable architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}
        style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
        <Header />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
