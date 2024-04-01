import {Config} from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontWeight: {
        book: '450',
      },
      colors: {
        custom: {
          black: '#111',
          white: '#EEE',
          't-gray': '#B4B4B4',
          'b-gray': '#191919',
          'b-gray2': '#2A2A2A',
          'b-gray3': '#2C2C2C',
          'b-card': '#37373710',
        },
      },
    },
    screens: {
      xl: {max: '1536px'},
      lg: {max: '1024px'},
      sm: {max: '768px'},
      xs: {max: '350px'},
    },
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value: string) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
  ],
}

export default config
