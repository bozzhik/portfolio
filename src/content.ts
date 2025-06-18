import BozzhikImage from '$/bozzhik.jpg'
import GithubIcon from '$/icons/github.svg'
import XIcon from '$/icons/x.svg'
import TelegramIcon from '$/icons/telegram.svg'

import GraphiteImage from '$/projects/graphite.png'
import MurinoImage from '$/projects/murino.png'

export const CONTENT = {
  global: {
    person: {
      name: 'Maxim Bozhik',
      taglines: ['Turning caffeine into code.', 'Making pixels push themselves.', "I make websites work. You're welcome.", 'Just a dev doing dev things.', 'Coding, creating, conquering (bugs).', 'Making websites that magically work.'],
      picture: BozzhikImage,
    },
    socials: {
      github: {
        link: 'https://github.com/bozzhik',
        content: GithubIcon,
        color: '#24292E',
        contrast: false,
      },
      x: {
        link: 'https://x.com/bozzhik',
        content: XIcon,
        color: '#070707',
        contrast: true,
      },
      telegram: {
        link: 'https://t.me/bozzhik',
        content: TelegramIcon,
        color: '#1E78A4',
        contrast: true,
      },
      cv: {
        link: '/cv-pdf',
        content: 'Resume',
        color: null,
        contrast: false,
      },
    },
  },
  projects: {
    graphite: {
      title: 'Graphite House',
      description: 'Landing page with event poster and details for the concert venue',
      image: GraphiteImage,
      link: 'https://graphite.house',
      color: '#FB6BB3',
    },
    murino: {
      title: 'Murino',
      description: 'Website for a football complex in the Leningrad region',
      image: MurinoImage,
      link: 'https://murino.ru',
      color: '#58944A',
    },
  },
  homePage: {
    about: {
      text: 'I develop interactive web applications using React, Next JS, and Tailwind CSS, while creating powerful mobile apps with React Native.',
      badges: ['React Native', 'React', 'Next JS', 'Tailwind CSS'],
    },
  },
}
