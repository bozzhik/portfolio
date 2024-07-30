import Image from 'next/image'
import FreelanceImage from '%/cv/freelance.jpg'
import StarNetImage from '%/cv/starnet.jpg'

import {ArrowUpRight} from 'lucide-react'

import Block from '##/cv/Block'
import Text from '#/UI/Text'

const jobsData: any = {
  'custom-freelance': {
    title: 'Freelance',
    caption: 'Developer and UX/UI designer',
    duration: 'Nov 2021 - Now',
    link: '/works',
    logo: FreelanceImage,
  },
  'star-net': {
    title: 'StarNet Solutions',
    caption: 'Junior Frontend developer',
    duration: 'May 2020 - Sep 2021',
    link: 'https://www.starnet.md',
    logo: StarNetImage,
  },
}

export default function Jobs() {
  return (
    <Block index="jobs" heading="work">
      <Text>
        Below is a list of companies where I have worked as a <span className="text-white">Software Developer</span>:
      </Text>

      <div className="space-y-6">
        {Object.keys(jobsData).map((key) => {
          const {title, caption, duration, link, logo} = jobsData[key]
          return (
            <a href={link} className="flex items-center justify-between group sm:items-start sm:flex-col" target="_blank" key={key}>
              <div className="flex items-center justify-between gap-4">
                <Image src={logo} alt={`${title} logo`} width={100} height={100} className="rounded-md s-14 sm:s-16" />

                <div>
                  <Text className="text-lg font-medium text-white sm:text-base">{title}</Text>
                  <Text className="leading-normal text-neutral-400">{caption}</Text>
                  <Text className="hidden text-neutral-400 group-hover:text-white sm:block">{duration}</Text>
                </div>
              </div>

              <div className="flex items-center sm:hidden">
                <Text className="px-1 duration-300 bg-custom-black translate-x-7 text-neutral-400 group-hover:text-white group-hover:-translate-x-2">{duration}</Text>
                <ArrowUpRight className="-mt-0.5 duration-500 opacity-0 group-hover:opacity-100 -z-10" />
              </div>
            </a>
          )
        })}
      </div>
    </Block>
  )
}
