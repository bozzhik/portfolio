import BozzhikImage from '$/bozzhik.jpg'
import GithubIcon from '$/icons/github.svg'
import EmailIcon from '$/icons/email.svg'

import GraphiteImage from '$/projects/graphite.png'
import MurinoImage from '$/projects/murino.png'

export const CONTENT = {
  global: {
    person: {
      name: 'Maxim Bozhik',
      taglines: ['Turning caffeine into code.', 'Making pixels push themselves.', 'Just a dev doing dev things.', 'Coding, creating, conquering (bugs).', `Making websites work, so you don't have to.`],
      picture: BozzhikImage,
    },
    socials: {
      github: {
        link: 'https://github.com/bozzhik',
        icon: GithubIcon,
      },
      email: {
        link: 'mailto:bozzhik@yandex.com',
        icon: EmailIcon,
      },
    },
  },
  projects: {
    graphite: {
      title: 'Graphite House',
      description: 'Landing page with event poster and details for the concert venue',
      image: GraphiteImage,
      link: 'https://graphite.house',
    },
    murino: {
      title: 'Murino',
      description: 'Website for a football complex in the Leningrad region',
      image: MurinoImage,
      link: 'https://murino.ru',
    },
  },
  homePage: {
    about: {
      text: 'I develop interactive web applications using React, Next JS, and Tailwind CSS, while creating powerful mobile apps with React Native.',
      badges: ['React Native', 'React', 'Next JS', 'Tailwind CSS'],
    },
  },
}
