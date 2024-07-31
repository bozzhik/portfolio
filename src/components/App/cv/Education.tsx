import Image from 'next/image'
import HseImage from '%/cv/hse.jpg'

import {ArrowUpRight} from 'lucide-react'

import Block from '##/cv/Block'
import Text from '#/UI/Text'

const education: any = {
  'hse-university': {
    title: 'HSE University',
    caption: 'B.A., Design and Programming',
    duration: 'Sep 2020 - Present',
    link: 'https://hsedesign.ru/designer/bozzhik',
    logo: HseImage,
  },
}

export default function Education() {
  return (
    <Block index="education" heading="education" className="space-y-4">
      {Object.keys(education).map((key) => {
        const {title, caption, duration, link, logo} = education[key]
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
    </Block>
  )
}
