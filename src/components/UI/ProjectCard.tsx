import {urlForImage} from '@/lib/sanity'
import {Project} from '##/index/Projects'

import Link from 'next/link'
import Image from 'next/image'
import {Text} from '#/UI/Text'
import {Badge} from '#/UI/Badge'

interface Props {
  project: Project
  index: number
}

const ProjectCard: React.FC<Props> = ({project, index}) => {
  return (
    <Link className={`group relative flex flex-col overflow-hidden h-[35vh] xl:h-[37vh] sm:h-[40vh] duration-500 rounded-2xl sm:rounded-xl border-[1px] border-neutral-800 border-b-0 ${!project.link && 'pointer-events-none'}`} href={`${project.link || ' '}`} target="_blank" key={index}>
      <div className={`absolute inset-0 -z-20 s-full sm:h-[65%] duration-500 ${project.link && 'group-hover:scale-[102%]'}`}>
        <Image quality={100} priority={project.is_special && true} className="object-cover object-top" src={urlForImage(project.image).url()} fill={true} sizes="70vw" alt={project.name} />
      </div>

      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-custom-black/0 via-custom-black/40 to-custom-black sm:to-custom-gray/30 -z-10"></div>

      <div className="flex flex-col pb-5 pl-8 mt-auto text-neutral-300 sm:p-4">
        {project.in_development && <Badge text="COMING SOON" className="absolute mb-1 right-5 bottom-4 animate-pulse h-fit" />}

        <Text type="heading" className="xl:text-xl">
          {project.name}
        </Text>
        <Text className="leading-normal max-w-[35ch] xl:text-sm sm:text-xs">{project.description}</Text>
      </div>
    </Link>
  )
}

export {ProjectCard}
