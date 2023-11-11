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
      'dark-red': '#ad2c23',
      'blue': '#3081f2',
      'dark-blue': '#1758b3',
      'yellow': '#d4ce33',
      'dark-yellow': '#a19c12',
      'green': '#30ba3e',
      'dark-green': '#1d8f28',
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

