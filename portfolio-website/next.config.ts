import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Required for platforms like Netlify
  reactStrictMode: true, // Helps catch potential issues in React code
  trailingSlash: false, // Netlify works well with this set to false
};

export default nextConfig;
