import Image, {StaticImageData} from 'next/image'
import {ArrowUpRight} from 'lucide-react'
import Text from '#/UI/Text'

interface Props {
  title: string
  caption: string
  duration: string
  link: string
  blank?: boolean
  icon: StaticImageData
}

export default function ItemLink({title, caption, duration, link, blank, icon}: Props) {
  return (
    <a href={link} className="flex items-center justify-between group sm:items-start sm:flex-col" target={blank ? '_blank' : '_self'} rel="noopener noreferrer">
      <div className="flex items-center justify-between gap-4">
        <Image src={icon} alt={`${title} logo`} width={100} height={100} className="rounded-md s-14 sm:s-16" />

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
}
