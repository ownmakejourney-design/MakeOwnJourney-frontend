import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        container: "var(--container)",
        card: "var(--card)",

        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",

        border: "var(--border)",
        "button-text": "var(--button-text)",

        "hover-container": "var(--hover-container)",
        "hover-card": "var(--hover-card)",
      },

      boxShadow: {
        card: "var(--shadow)",
      },

      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

