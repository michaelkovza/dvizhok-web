import type { Config } from 'tailwindcss'

const withMT = require('@material-tailwind/react/utils/withMT')

const config: Config = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#1C1C1E',
        dark: '#0D0D0E',
        'accent-purple': '#6979F8',
        'accent-dark': '#242426',
        'blur-dark': 'rgba(28, 28, 30, 0.67)',
        'border-input': '#3A3A3C',
        'card-background': '#0F0F10',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}) as Config

export default config
