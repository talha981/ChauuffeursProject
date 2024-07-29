/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Navbar" : "#24252a",
        "Primary" : "#d6e3ec",
        "Form" : "rgba(96,96,96,255)",
        "Form2" : "rgb(232, 232, 216)",
        "Form3" : "#e5e7eb"
      }
    },
  },
  plugins: [],
}

