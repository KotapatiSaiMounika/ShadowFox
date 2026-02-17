/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rcbRed: "#DA1818",
        rcbGold: "#FFD700",
        rcbDark: "#0D0D0D"
      }
    },
  },
  plugins: [],
}
