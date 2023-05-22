/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: '#FFCF40',
        light: '#FFE492'},
      secondary: '#A96215',
      black: colors.black,
      white: colors.white,
      slate: colors.slate
    }
    
  },
  plugins: [],
}

