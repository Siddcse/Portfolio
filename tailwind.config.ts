import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#30051a",
        blush: "#EC4899",
        lavender: "#7C3AED",
        ink: "#171016",
        muted: "#6f6270",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px rgba(48, 5, 26, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
