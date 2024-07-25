import {cn} from '@/lib/utils'
import {urlForImage} from '@/lib/sanity'
import {Work} from '##/index/Works'

import Link from 'next/link'
import Image from 'next/image'
import {Text} from '#/UI/Text'
import {Badge} from '#/UI/Badge'

import DefaultImage from '%/default-card-img.png'

interface Props {
  work: Work
  index: number
}

const cardStyles = {
  base: 'group relative flex flex-col h-[35vh] xl:h-[37vh]',
  border: 'rounded-2xl sm:rounded-xl border-[1px] border-neutral-800 border-b-0',
  background: 'bg-gradient-to-b from-gradient-gray to-gradient-black',
}

const {base, border, background} = cardStyles

const WorkCard: React.FC<Props> = ({work, index}) => {
  const {r, g, b, a} = work.hover_color || {r: 0, g: 0, b: 0, a: 1}
  const hoverColor = `rgba(${r}_${g}_${b}/${a})`

  return (
    <Link data-variant={work.type} className={cn([base, border, background], `hover:from-[${hoverColor}] hover:via-gradient-gray duration-500`)} href={work.link} target="_blank" key={index}>
      <div className={`absolute inset-0 z-10 s-full sm:h-[69%] duration-500 overflow-hidden rounded-2xl sm:rounded-xl`}>
        <Image quality={100} priority={work.is_special && true} className="object-cover object-top duration-500 opacity-50 group-hover:opacity-80 group-hover:scale-[101%]" src={work.image ? urlForImage(work.image).url() : DefaultImage} fill={true} sizes="70vw" alt={work.name} />
      </div>

      <div className="z-20 flex flex-col px-4 pb-5 mx-4 mt-auto text-neutral-300 sm:p-4 group-hover:bg-gradient-to-b group-hover:from-custom-black/0 group-hover:to-custom-black/100">
        {work.in_development && <Badge text="COMING SOON" className="absolute mb-1 right-5 bottom-4 animate-pulse h-fit" />}

        <Text type="heading" className="xl:text-xl">
          {work.name}
        </Text>
        <Text className="leading-normal max-w-[30ch] xl:text-sm sm:text-xs">{work.description}</Text>
      </div>
    </Link>
  )
}

export {WorkCard}
