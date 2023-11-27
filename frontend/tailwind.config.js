/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a2500",
        secondary: "#00ff29"
      },
      backgroundImage: {
        'bgimg': "url('./src/assets/bgimg.jpg')",
      }
    },
    fontFamily: {
      'Bakbak': ['Bakbak One', 'Arial'],
    }
  },
  plugins: [],
}