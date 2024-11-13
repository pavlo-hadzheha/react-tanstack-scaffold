import { Config } from 'tailwindcss'
import { colors } from './tailwind.colors'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,

      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
}

export default config
