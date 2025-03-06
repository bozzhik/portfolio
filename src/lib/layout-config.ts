import type {Metadata} from 'next'
import localFont from 'next/font/local'

const meta = {
  title: 'BOZZHIK',
  description: `I'm a website developer and user interface designer. I am currently working as a self-employed frontend developer, specializing in creating stunning landing pages and interactive websites.`,
  keywords: 'bozzhik, bozhik, bojic, maxim bozhik, maxim bojic, website developer, frontend developer, landing pages, interactive websites, веб-разработчик, веб-разработка, веб-сайт, веб-сайты',

  generator: 'Next.js',
  url: 'https://bozzhik.com',
  image: '/og.jpg',
  locale: 'en-US',
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${meta.title}`,
    default: `${meta.title}`,
  },
  description: meta.description,
  keywords: meta.keywords,

  generator: meta.generator,
  metadataBase: new URL(meta.url),

  openGraph: {
    type: 'website',
    url: meta.url,
    title: meta.title,
    description: meta.description,
    images: meta.url + meta.image,
    locale: meta.locale,
  },
}

export const suisseIntl = localFont({
  variable: '--font-suisse-intl',
  src: [
    {
      path: '../assets/fonts/SuisseIntl-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/SuisseIntl-Medium.woff2',
      weight: '500',
    },
  ],
})
