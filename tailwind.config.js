/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      'sm': '384px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '3000px'
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

