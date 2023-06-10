import tailwindcssAnimate from 'tailwindcss-animate'
import { colors, fontSizes } from '@jasmim-ds/tokens'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
      fontSize: fontSizes,
    },
    colors,
  },
  plugins: [tailwindcssAnimate],
}
