import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is now a single page; keep old routes and the old resume URL working.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/cv.pdf", destination: "/Safkat_Mahmud_Sakib_Resume.pdf", permanent: false },
    ];
  },
};

export default nextConfig;
