/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': colors.blue[50],
          '100': colors.blue[100],
          '200': colors.blue[200],
          '300': colors.blue[300],
          '400': colors.blue[400],
          '500': colors.blue[500],
          '600': colors.blue[600],
          '700': colors.blue[700],
          '800': colors.blue[800],
          '900': colors.blue[900],
          DEFAULT: colors.blue[50], //50
          'on': colors.blue[900],    //900 
          'dark': {
            DEFAULT: colors.blue[900], //900
            'on': colors.blue[50],    //50  
          }
        }
      }      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

