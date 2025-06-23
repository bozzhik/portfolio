import type {Metadata} from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: {
    default: 'Maxim Bozhik — Developer',
    template: '%s — Maxim Bozhik',
  },
  description: 'Creative developer, specializing in building stunning landing pages, interactive websites, and powerful web & mobile applications.',
  keywords: 'bozzhik, bozhik, bojic, maxim bozzhik, maxim bozhik, maxim bojic, website developer, frontend developer, landing pages, interactive websites, веб-разработчик, веб-разработка, веб-сайт',
  openGraph: {
    images: 'https://bozzhik.com' + '/open-graph.jpg',
  },
}

export const sfProDisplay = localFont({
  variable: '--font-sf-pro-display',
  src: [
    {
      path: '../assets/fonts/SFProDisplay-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/SFProDisplay-Semibold.woff2',
      weight: '600',
    },
  ],
})
