/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#262626',
        white: {
          light: '#F8F8F8',
          DEFAULT: '#FFFFFF',
        },
        green: {
          DEFAULT: '#688272',
        },

      },
    },
  },
  plugins: [],
}
