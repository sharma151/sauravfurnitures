import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        section: "#EEF2F7",
        card: "#FFFFFF",
        primaryText: "#0F172A",
        secondaryText: "#475569",
        border: "#E2E8F0",
        accent: "#1E3A8A",
        accentLight: "#3B82F6",
        cta: "#1D4ED8",
        ctaHover: "#1E40AF",
        highlight: "#DBEAFE",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-geist-mono)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",
        "soft-hover": "0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.06)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};
export default config;
