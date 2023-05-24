/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/*.{html,js}","./index.html"],
  theme: {
    extend: {
      colors: {
        'myblk': '#111111',
        'mygray': '#EBEBEB',
        
      }
    },
   // "colors": colors,
  },
  plugins: [],
}

