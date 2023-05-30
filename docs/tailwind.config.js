/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}","./index.html","./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary'  : {
           'light' : '#CCD8FF',
           'dark'  : '#0D205F',
           DEFAULT : '#4060C9'},
        'secondary':'#163292 ',
        'accent':'#E2B628'
         
        
      }
    },
  },
  plugins: [],
}
 
