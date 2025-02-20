/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        foreground: "var(--foreground)",
        accent: "var(--accent-color)",
        primaryText: "var(--primary-text)",
        secondaryText: "var(--secondary-text)",
        accentText: "var(--accent-text)",
      },
    },
  },
  plugins: [],
};
