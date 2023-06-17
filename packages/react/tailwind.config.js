import tailwindcssAnimate from 'tailwindcss-animate'
import { colors, fontSizes } from '@jasmim-ds/tokens'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['var(--work_sans-font)', 'sans-serif'],
        'nunito-sans': ['var(--nunito_sans-font)', 'sans-serif'],
      },
      fontSize: fontSizes,
    },
    colors,
  },
  plugins: [tailwindcssAnimate],
}
