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
          black: '#090909',
          gray: '#191919',
        },
        gradient: {
          gray: '#33333350',
          black: '#10101050',
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
  safelist: ['hover:from-[rgba(252_112_143/0.4)]', 'hover:from-[rgba(74_123_86/0.4)]', 'hover:from-[rgba(102_102_102/0.4)]', 'hover:from-[rgba(245_253_90/0.4)]', 'hover:from-[rgba(204_204_204/0.4)]', 'hover:from-[rgba(203_251_69/0.4)]', 'hover:from-[rgba(68_68_68/0.4)]', 'hover:from-[rgba(125_117_111/0.4)]', 'hover:from-[rgba(163_139_244/0.4)]', 'hover:from-[rgba(251_107_179/0.4)]'],
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value: string) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
  ],
}

export default config
