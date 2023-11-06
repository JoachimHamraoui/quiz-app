/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      'green': '#2be95ade',
      'white': '#EBEBEB',
      'black': '#111111',
      'grey': '#606060'
    },
    fontFamily: {
      display: ['Coolvetica', 'sans-serif'],
      mont: ['Montserret', 'sans-serif']
    },
  },
  plugins: [],
}

