import {urlForImage} from '@/lib/sanity'
import {Work} from '##/index/Works'

import Link from 'next/link'
import Image from 'next/image'
import {Text} from '#/UI/Text'
import {Badge} from '#/UI/Badge'

interface Props {
  work: Work
  index: number
}

const WorkCard: React.FC<Props> = ({work, index}) => {
  return (
    <Link className={`group relative flex flex-col overflow-hidden h-[35vh] xl:h-[37vh] sm:h-[40vh] duration-500 rounded-2xl sm:rounded-xl border-[1px] border-neutral-800 border-b-0 ${!work.link && 'pointer-events-none'}`} href={`${work.link || ' '}`} key={index}>
      <div className={`absolute inset-0 -z-20 s-full sm:h-[65%] duration-500 ${work.link && 'group-hover:scale-[102%]'}`}>
        <Image quality={100} priority={true} className="object-cover object-top" src={urlForImage(work.image).url()} fill={true} sizes="70vw" alt={work.name} />
      </div>

      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-custom-black/0 via-custom-black/30 to-custom-black sm:to-custom-gray/30 -z-10"></div>

      <div className="flex flex-col pb-5 pl-8 mt-auto text-neutral-300 sm:p-4">
        {work.in_development && <Badge text="COMING SOON" className="absolute mb-1 right-5 bottom-4 animate-pulse h-fit" />}

        <Text type="heading" className="xl:text-xl">
          {work.name}
        </Text>
        <Text className="leading-normal max-w-[35ch] xl:text-sm sm:text-xs">{work.description}</Text>
      </div>
    </Link>
  )
}

export {WorkCard}
