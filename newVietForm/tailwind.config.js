/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FDBF50",
        secondary: "#FF724C",
        light: "#F4F4F8",
        black: "#212A3E",
        darkBlue: "#2A2C41",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        heroPattern: "url('/src/assets/heroBackground.jpg')",
      },
    },
  },
  plugins: [],
};
