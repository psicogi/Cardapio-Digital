/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/imagens/fachaonca.jpg')"
      }
    },
  },
  plugins: [],
}

