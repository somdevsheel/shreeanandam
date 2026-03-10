import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  "#fff8ed",
          100: "#ffefd3",
          200: "#ffdba6",
          300: "#ffc06e",
          400: "#ff9b33",
          500: "#ff7d0a",
          600: "#f06000",
          700: "#c74700",
          800: "#9e3900",
          900: "#7f3000",
          950: "#451500",
        },
        spice: {
          50:  "#fdf3ee",
          100: "#fbe4d8",
          200: "#f7c8b1",
          300: "#f1a37f",
          400: "#e8754c",
          500: "#e05228",
          600: "#d03d1e",
          700: "#ac2f1a",
          800: "#89281b",
          900: "#6f2319",
          950: "#3c0f0b",
        },
        cream: {
          50:  "#fdfaf5",
          100: "#faf3e6",
          200: "#f4e4ca",
          300: "#eacfa7",
          400: "#ddb47e",
          500: "#d09a61",
          600: "#c08050",
          700: "#a06643",
          800: "#81523a",
          900: "#694432",
          950: "#382219",
        },
        forest: {
          700: "#2d5a27",
          800: "#1e3d1a",
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
