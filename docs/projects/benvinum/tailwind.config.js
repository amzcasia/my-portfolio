const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#912D3F',
          light: '#BF6E7D',
          dark: '#511A21'
        },
        //'black': '#000000',
        'gray': '#464646',
        'white': '#FFFFFF',
        'accent': '#F9C71B',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        grey: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        slate: colors.slate,
        red: colors.red,
        green: colors.green,
        blue: colors.blue
      
      }
    },
    colors:{
      /*
      'primary': {
        DEFAULT: '#912D3F',
        light: '#BF6E7D',
        dark: '#511A21'
      }*/
    }
  },
  plugins: [],
}

