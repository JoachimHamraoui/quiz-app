/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      'red': '#eb4034',
      'blue': '#3081f2',
      'yellow': '#d4ce33',
      'green': '#30ba3e',
      'white': '#EBEBEB',
      'black': '#212121',
      'grey': '#606060'
    },
    fontFamily: {
      display: ['Coolvetica', 'sans-serif'],
      mont: ['Montserret', 'sans-serif']
    },
  },
  plugins: [],
}

