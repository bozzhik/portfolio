import BozzhikImage from '$/profile/bozzhik.jpg'
import BozzhikImage2 from '$/profile/bozzhik2.jpg'
import BozzhikImage3 from '$/profile/bozzhik3.jpg'
import CursorIcon from '$/icons/cursor.svg'

import GithubIcon from '$/icons/github.svg'
import XIcon from '$/icons/x.svg'
import TelegramIcon from '$/icons/telegram.svg'

import ReactNativeIcon from '$/icons/about/react-native.svg'
import ReactIcon from '$/icons/about/react.svg'
import NextJSIcon from '$/icons/about/nextjs.svg'
import TailwindCSSIcon from '$/icons/about/tailwindcss.svg'
import HSEIcon from '$/icons/about/hse.svg'

import MountainImage from '$/cv/gallery/mountain.jpg'
import MarathonImage from '$/cv/gallery/marathon.jpg'
import FestImage from '$/cv/gallery/fest.jpg'
import SkyscrapersImage from '$/cv/gallery/skyscrapers.jpg'

import GraphiteImage from '$/projects/graphite.png'
import MurinoImage from '$/projects/murino.png'
import SnableImage from '$/projects/snable.png'
import CarmateImage from '$/projects/carmate.png'
import HotkeysImage from '$/projects/hotkeys.png'
import ArkaImage from '$/projects/arka.png'
import HiddenImage from '$/projects/hidden.png'
import OrientirImage from '$/projects/orientir.png'
import KillaImage from '$/projects/killa.png'
import Graphite2Image from '$/projects/graphite2.png'
import MuellerImage from '$/projects/mueller.png'
import KorostelevImage from '$/projects/korostelev.png'
import DrSpillerImage from '$/projects/drspiller.png'
import ZapImage from '$/projects/zap.png'
import UdelnayaImage from '$/projects/udelnaya.png'

export const CONTENT = {
  global: {
    person: {
      name: 'Maxim Bozhik',
      taglines: ['Turning caffeine into code.', 'Making pixels push themselves.', "I make websites work. You're welcome.", 'Just a dev doing dev things.', 'Coding, creating, conquering (bugs).', 'Making websites that magically work.'],
      pictures: [BozzhikImage, BozzhikImage2, BozzhikImage3],
      cursor: CursorIcon,
    },
    navigation: {
      github: {
        link: 'https://github.com/bozzhik',
        content: GithubIcon,
      },
      x: {
        link: 'https://x.com/bozzhik',
        content: XIcon,
      },
      telegram: {
        link: 'https://t.me/bozzhik',
        content: TelegramIcon,
      },
      cv: {
        link: '/cv',
        content: 'Resume',
        color: null,
        contrast: false,
      },
    },
  },
  homePage: {
    about: {
      text: 'I develop interactive web applications using React, Next JS, and Tailwind CSS, while creating powerful mobile apps with React Native.',
      text2: "Having completed my Computer Science degree at HSE University, I'm driven by a passion for design, coding, and shaping visually compelling digital experiences.",
      badges: [
        {text: 'React Native', icon: ReactNativeIcon},
        {text: 'React', icon: ReactIcon},
        {text: 'Next JS', icon: NextJSIcon},
        {text: 'Tailwind CSS', icon: TailwindCSSIcon},
        {text: 'HSE University', icon: HSEIcon},
      ],
    },
  },
  cvPage: {
    gallery: [
      {
        src: 'videos/vkfest-concert.mp4',
        alt: 'Me at a concert at VK Fest 2024',
        video: true,
      },
      {
        src: FestImage,
        alt: 'Me in the volunteer team at VK Fest 2024',
      },
      {
        src: MarathonImage,
        alt: 'Me at a running marathon in Sochi at the World Youth Festival 2024',
      },
      {
        src: MountainImage,
        alt: 'Me on some mountain in Turkey',
      },
      {
        src: SkyscrapersImage,
        alt: 'Me somewhere between the skyscrapers in Moscow City',
      },
      {
        src: 'videos/moskow-subway.mp4',
        alt: 'Me in the Moscow Metro',
        video: true,
      },
    ],
  },
}

export const PROJECTS = {
  graphite: {
    name: 'Graphite House',
    descriptor: "Venue's Event Page",
    image: GraphiteImage,
    link: 'https://graphite.house',
    color: '#FB6BB3',
    featured: true,
  },
  murino: {
    name: 'Murino',
    descriptor: 'Football Complex Website',
    image: MurinoImage,
    link: 'https://murino.ru',
    color: '#58944A',
    featured: true,
  },
  snable: {
    name: 'Snable Extension',
    descriptor: 'Chrome Extension Hub',
    image: SnableImage,
    link: 'https://snable.website',
    color: '#525252',
    featured: true,
  },
  carmate: {
    name: 'Carmate',
    descriptor: 'Carwash Booking Website',
    image: CarmateImage,
    link: 'https://carmate.moscow',
    color: '#F97316',
    featured: true,
  },
  hotkeys: {
    name: 'HOTKEYS',
    descriptor: 'Shortcuts Archive',
    image: HotkeysImage,
    link: 'https://hotkeys.adc.ac',
    color: '#CBFB45',
    featured: true,
  },
  arka: {
    name: 'Arka',
    descriptor: 'Consulting Firm Website',
    image: ArkaImage,
    link: 'https://arkadvisory.global',
    color: '#093C2E',
    featured: true,
  },
  hidden: {
    name: 'Hidden Collection',
    descriptor: 'Vinyl Label Website',
    image: HiddenImage,
    link: 'https://h1ddencollection.com',
    color: '#C20000',
    featured: true,
  },
  orientir: {
    name: 'Orientir',
    descriptor: 'Property Developer Webite',
    image: OrientirImage,
    link: 'https://orientir.ru',
    color: '#DA291C',
    featured: true,
  },
  killa: {
    name: 'Killa Club',
    descriptor: 'NFT Collection Website',
    image: KillaImage,
    link: 'https://killaclub.com',
    color: '#286056',
    featured: true,
  },
  graphite2: {
    name: 'Graphite Event Ak-47 Obladaet Dose Reptiloid',
    descriptor: 'Concert Event Page',
    image: Graphite2Image,
    link: 'https://graphite-house.vercel.app',
    color: '#FB6BB3',
    featured: true,
  },
  mueller: {
    name: 'Mueller Wagner',
    descriptor: 'Law Firm Website',
    image: MuellerImage,
    link: 'https://muellerwagner.ru',
    color: '#30394A',
    featured: true,
  },
  korostelev: {
    name: 'Korostelev',
    descriptor: 'Legal Firm Website',
    image: KorostelevImage,
    link: 'https://korostelev.legal',
    color: '#C82A22',
    featured: true,
  },
  drspiller: {
    name: 'Dr. Spiller',
    descriptor: 'Premium Cosmetics Store',
    image: DrSpillerImage,
    link: 'https://dr-spiller.kz',
    color: '#7D756F',
    featured: false,
  },
  zap: {
    name: 'Zap',
    descriptor: 'Express Delivery Website',
    image: ZapImage,
    link: 'https://zap.ae',
    color: '#B2F711',
    featured: false,
  },
  udelnaya: {
    name: 'Sanatoriy Udelnaya',
    descriptor: 'Health Resort Website',
    image: UdelnayaImage,
    link: 'https://sanatoriyudelnaya.ru',
    color: '#991C2F',
    featured: false,
  },
}
