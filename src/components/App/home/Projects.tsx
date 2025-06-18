import {CONTENT} from '@/content'

import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import Block from '~/UI/Block'
import {SPAN} from '~/UI/Typography'

function Gradient({color, className}: {color?: string; className?: string}) {
  const dye = (color: string, opacity: number) => {
    if (!opacity) return color
    return color + opacity
  }

  const from = color || dye('#2A2A2A', 20)

  return (
    <div
      data-block="gradient"
      className={cn('absolute z-[-25] inset-0 size-full', className)}
      style={{
        background: `linear-gradient(to bottom, ${dye(from, 90)} 0%, ${dye(from, 25)} 15%, ${dye('#202020', 80)} 25%, ${dye('#101010', 50)} 100%)`,
      }}
    />
  )
}

export default function Projects({delay}: {delay?: number}) {
  const {projects} = CONTENT

  return (
    <Block section="projects" className="gap-3.5" delay={delay}>
      <div className="space-y-4.5">
        {Object.entries(projects).map(([key, project]) => (
          <Link className={cn('relative overflow-hidden group', 'p-3 flex flex-col', 'border border-gray/10 rounded-[14px]', 'bg-gray-card/20')} href={project.link} target="_blank" rel="noopener noreferrer" key={key}>
            <Image quality={100} src={project.image} alt={`${project.title} — ${project.description}`} className={cn('w-full h-auto rounded-lg', 'opacity-70 group-hover:opacity-90 duration-400', 'pointer-events-none')} />

            <div className={cn('p-3 absolute z-20 bottom-0 left-0', 'opacity-0 group-hover:opacity-100 duration-400')}>
              <div className={cn('px-1.5 flex items-center gap-2', 'bg-gray/10 backdrop-blur-xs rounded-xl', 'scale-95 group-hover:scale-100 duration-400')}>
                <div className={cn('size-2.5 bg-gray rounded-full', 'scale-75 group-hover:scale-100 duration-400')}></div>

                <SPAN className="lowercase pr-0.5">{project.description}</SPAN>
              </div>
            </div>

            <Gradient className="opacity-0 group-hover:opacity-100 duration-500" color={project.color} />
          </Link>
        ))}
      </div>
    </Block>
  )
}
