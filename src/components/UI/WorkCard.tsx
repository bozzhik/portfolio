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

const WorkCard: React.FC<Props> = ({work, index}) => {
  return (
    <Link data-variant={work.type} className="group relative flex flex-col h-[35vh] xl:h-[37vh] rounded-2xl sm:rounded-xl border-[1px] border-neutral-800 border-b-0" href={work.link} target="_blank" key={index}>
      <div className={`absolute inset-0 -z-20 s-full sm:h-[69%] duration-500 overflow-hidden rounded-2xl sm:rounded-xl`}>
        <Image quality={100} priority={work.is_special && true} className="object-cover object-top duration-500 group-hover:scale-[102%]" src={work.image ? urlForImage(work.image).url() : DefaultImage} fill={true} sizes="70vw" alt={work.name} />
      </div>

      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-custom-black/0 via-custom-black/40 to-custom-black -z-10"></div>

      <div className="flex flex-col pb-5 pl-8 mt-auto text-neutral-300 sm:p-4">
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
