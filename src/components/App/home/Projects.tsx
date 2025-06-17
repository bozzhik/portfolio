import {CONTENT} from '@/content'

import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import Block from '~/UI/Block'
import {P} from '~/UI/Typography'

export default function Projects() {
  const {projects} = CONTENT

  return (
    <Block section="projects">
      <div className="space-y-4">
        {Object.entries(projects).map(([key, project]) => (
          <Link className={cn('p-4 pb-3 flex flex-col gap-3', 'bg-gray-dark/40 rounded-xl')} href={project.link} target="_blank" rel="noopener noreferrer" key={key}>
            <Image src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />

            <div className="space-y-0">
              <h2 className="text-2xl tracking-[0.01em] text-foreground">{project.title}</h2>
              <P>{project.description}</P>
            </div>
          </Link>
        ))}
      </div>
    </Block>
  )
}
