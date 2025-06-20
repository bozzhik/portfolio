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

import GraphiteImage from '$/projects/graphite.png'
import MurinoImage from '$/projects/murino.png'

export const CONTENT = {
  global: {
    person: {
      name: 'Maxim Bozhik',
      taglines: ['Turning caffeine into code.', 'Making pixels push themselves.', "I make websites work. You're welcome.", 'Just a dev doing dev things.', 'Coding, creating, conquering (bugs).', 'Making websites that magically work.'],
      pictures: [BozzhikImage, BozzhikImage2, BozzhikImage3],
      cursor: CursorIcon,
    },
    socials: {
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
        link: '/cv-pdf',
        content: 'Resume',
        color: null,
        contrast: false,
      },
    },
  },
  homePage: {
    about: {
      text: 'I develop interactive web applications using React, Next JS, and Tailwind CSS, while creating powerful mobile apps with React Native.',
      badges: [
        {text: 'React Native', icon: ReactNativeIcon},
        {text: 'React', icon: ReactIcon},
        {text: 'Next JS', icon: NextJSIcon},
        {text: 'Tailwind CSS', icon: TailwindCSSIcon},
      ],
    },
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
}
