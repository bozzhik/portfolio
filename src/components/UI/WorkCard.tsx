import {urlForImage} from '@/lib/sanity'
import {Work} from '##/index/Works'

import Link from 'next/link'
import Image from 'next/image'
import {Text} from '#/UI/Text'
import {Badge} from '#/UI/Badge'

import DefaultImage from '%/default-card-img.png'
// import SpillerImage from '%/spiller.png'
// work.id === 2 ? SpillerImage :

interface Props {
  work: Work
  index: number
}

const WorkCard: React.FC<Props> = ({work, index}) => {
  return (
    <Link data-variant={work.variant} className="group relative flex flex-col h-[35vh] xl:h-[37vh] rounded-2xl sm:rounded-xl border-[1px] border-neutral-800 border-b-0" href={work.link} key={index}>
      <div className={`absolute inset-0 -z-20 s-full sm:h-[69%] duration-500 overflow-hidden rounded-2xl sm:rounded-xl`}>
        <Image quality={100} priority={true} className="object-cover object-top duration-500 group-hover:scale-[102%]" src={work.image ? urlForImage(work.image).url() : DefaultImage} fill={true} sizes="70vw" alt={work.name} />
      </div>

      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-custom-black/0 via-custom-black/40 to-custom-black -z-10"></div>

      <div className="flex flex-col pb-5 pl-8 mt-auto text-neutral-300 sm:p-4">
        {work.in_development && <Badge text="COMING SOON" className="absolute mb-1 right-5 bottom-4 animate-pulse h-fit" />}

        <Text type="heading" className="xl:text-xl">
          {work.name}
        </Text>
        <Text className="leading-normal max-w-[30ch] xl:text-sm sm:text-xs">{work.description}</Text>
      </div>

      {/* <div className="absolute flex flex-col justify-center w-16 h-full space-y-1 duration-500 -translate-x-5 opacity-0 -z-30 -right-20 group-hover:translate-x-0 group-hover:opacity-65">
        {work.stack.map((tech, index) => (
          <Badge key={index} text={tech.name} className="items-center" />
        ))}
      </div> */}
    </Link>
  )
}

export {WorkCard}
