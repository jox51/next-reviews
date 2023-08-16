/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,tsx,ts,jsx}",
    "./components/**/*.{html,js,tsx,ts,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-exo2)", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
