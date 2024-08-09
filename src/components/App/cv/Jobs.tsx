import Block from '#/UI/Block'
import ItemLink from '#/UI/ItemLink'

import FreelanceImage from '%/cv/freelance.jpg'
import MarakuImage from '%/cv/maraku.jpg'
import StarNetImage from '%/cv/starnet.jpg'

const jobsData: any = {
  heading: 'work',
  text: 'Below is a list of companies where I have worked as a <span class="text-white">Software Developer</span>',
  items: {
    'custom-freelance': {
      title: 'Freelance',
      caption: 'Developer and UX/UI designer',
      duration: 'Nov 2021 - Present',
      link: '/works',
      icon: FreelanceImage,
    },
    'maraku-ru': {
      title: 'Maraku',
      caption: 'Frontend Developer and Designer',
      duration: 'Apr 2022 - May 2023',
      link: 'https://www.starnet.md',
      icon: MarakuImage,
    },
    'star-net': {
      title: 'StarNet Solutions',
      caption: 'Junior Frontend developer',
      duration: 'May 2020 - Sep 2021',
      link: 'https://www.starnet.md',
      icon: StarNetImage,
    },
  },
}
const {heading, text, items} = jobsData

export default function Jobs() {
  return (
    <Block token={'jobs-cv'} heading={heading} text={text} className="space-y-4">
      <div className="space-y-6">
        {Object.keys(items).map((key) => {
          const job = items[key]
          return <ItemLink key={key} {...job} />
        })}
      </div>
    </Block>
  )
}
