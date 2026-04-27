import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      colors: {
        accent: "#c9a96e",
        bg: "#0a0a0f",
        surface: "#111118",
      },
    },
  },
  plugins: [],
} satisfies Config;
