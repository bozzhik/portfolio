import PartisansLogo from '%/cv/partisans.jpg'
import MarakuLogo from '%/cv/maraku.jpg'
import StarNetLogo from '%/cv/starnet.jpg'

import {type StaticImageData} from 'next/image'

import Block from '#/UI/Block'
import ItemLink from '#/UI/ItemLink'

type JobItem = {
  title: string
  caption: string
  duration: string
  link: string
  icon: StaticImageData
}

const jobs: JobItem[] = [
  {
    title: 'Partisans',
    caption: 'Frontend Developer',
    duration: 'Aug 2024 - Present',
    link: 'https://www.partisans.agency/',
    icon: PartisansLogo,
  },
  {
    title: 'Maraku',
    caption: 'Frontend Developer and Designer',
    duration: 'Apr 2022 - May 2023',
    link: 'https://www.maraku.ru',
    icon: MarakuLogo,
  },
  {
    title: 'StarNet Solutions',
    caption: 'Junior Frontend developer',
    duration: 'May 2021 - Aug 2021',
    link: 'https://www.starnet.md',
    icon: StarNetLogo,
  },
]

const jobsData = {
  heading: 'work',
  text: 'Below is a list of companies where I have worked as a <span class="text-white">Software Developer</span>',
}

export default function Jobs() {
  return (
    <Block token={'jobs-cv'} className="space-y-4" heading={jobsData.heading} text={jobsData.text}>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <ItemLink key={index} {...job} />
        ))}
      </div>
    </Block>
  )
}
