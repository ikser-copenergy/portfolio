// tailwind.config.ts
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Tu paleta sobria y futurista
        brand: {
          black: "#050505",
          grey: "#121212",
          emerald: "#50C878", // El verde de acento
        },
      },
    },
  },
  plugins: [],
};