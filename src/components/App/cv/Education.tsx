import Block from '#/UI/Block'
import ItemLink from '#/UI/ItemLink'

import HseImage from '%/cv/hse.jpg'

const education: any = {
  'hse-university': {
    title: 'HSE University',
    caption: 'B.A., Design and Programming',
    duration: 'Sep 2020 - Present',
    link: 'https://hsedesign.ru/designer/bozzhik',
    icon: HseImage,
  },
}

export default function Education() {
  return (
    <Block token={'education-cv'} heading="education" className="space-y-4">
      {Object.keys(education).map((key) => {
        const job = education[key]
        return <ItemLink key={key} {...job} />
      })}
    </Block>
  )
}
