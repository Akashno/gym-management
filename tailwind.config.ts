/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        colors:{
          transparent: 'transparent',
          current: 'currentColor',
          black: '#262626',
          white: colors.white,
          gray: colors.gray,
          emerald: colors.emerald,
          indigo: colors.indigo,
          yellow: colors.yellow,
        }
      },
    },
    plugins: [],
  }