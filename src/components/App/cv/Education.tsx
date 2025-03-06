import HseImage from '%/cv/hse.jpg'

import type {StaticImageData} from 'next/image'

import Block from '#/UI/Block'
import ItemLink from '#/UI/ItemLink'

type EducationItem = {
  title: string
  caption: string
  duration: string
  link: string
  icon: StaticImageData
}

const education: EducationItem[] = [
  {
    title: 'HSE University',
    caption: 'B.A., Design and Programming',
    duration: 'Sep 2020 - Present',
    link: 'https://hsedesign.ru/designer/bozzhik',
    icon: HseImage,
  },
]

export default function Education() {
  return (
    <Block token={'education-cv'} heading="education" className="space-y-4">
      {education.map((item, index) => (
        <ItemLink key={index} {...item} />
      ))}
    </Block>
  )
}
