import type {Config} from 'tailwindcss'

import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export default {
  theme: {
    screens: {
      xl: {max: '1780px'},
      sm: {max: '500px'},
    },
    fontFamily: {
      sans: ['var(--font-suisse-intl)', ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
    },
    extend: {
      colors: {
        custom: {
          black: '#090909',
          gray: '#191919',
        },
      },
    },
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value: string) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
  ],
} satisfies Config
