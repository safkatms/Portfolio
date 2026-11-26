import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        surface: "#121D2E",
        card: "#172438",
        line: "#26364B",
        accent: { DEFAULT: "#42D6C5", soft: "#79AFFF" },
        fg: { DEFAULT: "#F3F6FB", muted: "#A9B7C9", subtle: "#718198" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { content: "72rem" },
    },
  },
  plugins: [],
} satisfies Config;
