/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: 'class',
  theme: {
  screens: {
  sm: '480px',
  md: ' 768px',
  lg: '1024px',
  },
  extend: {
    colors: {
      primayColor: '#010a5e',
      primayColorLight: '#010d78',
      secondaryColor: '#fc0',
      paragraphColor: '#c0c0c0',
      whiteColor: '#fff',
      blackColor: '#000',
      greenColor: '#007936',
      redColor: '#cc3433',
      darkColor: '#000',
      darkColorLight: '#171717',
      },
      keyframes: {
        move: {
          "50%": {transfrom: 'translateY(-1rem)'}
          }
        },
        animation: {
          'movingY': 'move 2s linear infinite'
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
        }
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      }
    },
    plugins: [],
  }


