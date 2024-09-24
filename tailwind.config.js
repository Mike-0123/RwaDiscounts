/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#022b5f",
        "primary-pink": "#ed017f",
        "dark-pink": "#94004f"
      }
    },
  },
  plugins: [],
}

