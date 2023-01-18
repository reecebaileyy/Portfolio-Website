/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
require('tailwind-typewriter')
  const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '380px',
      'md': '775px',
      'lg': '1030px',
      'xlg': '1310px',
    },
    colors: {
      primary: '#2fcc4e',
      secondary: '#cb2727',
      black: colors.black,
      'white': '#ffffff',
    },
    extend: {
      fontFamily: {
        pressStart: ['"Press Start 2P"', 'cursive'],
      }
    },
  plugins: [
      require('tailwind-typewriter') ({
        wordsets: {
            fruit: {
                words: ['apple', 'banana', 'orange', 'pear', 'strawberry'],
                delay: 3
            }
        }
    })
  ],
}
}