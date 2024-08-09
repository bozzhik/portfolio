import Block from '#/UI/Block'
import Badge from '#/UI/Badge'

import TsLogo from '%/cv/tech/typescript.svg'
import PythonLogo from '%/cv/tech/python.svg'
import RubyLogo from '%/cv/tech/ruby.svg'
import ReactLogo from '%/cv/tech/react.svg'
import NextLogo from '%/cv/tech/nextjs.svg'
import NestLogo from '%/cv/tech/nest.svg'
import NodeLogo from '%/cv/tech/node.svg'
import RailsLogo from '%/cv/tech/rails.svg'
import SassLogo from '%/cv/tech/sass.svg'
import TailwindLogo from '%/cv/tech/tailwind.svg'

const skillsData: any = {
  heading: 'skills',
  text: 'With over 2 years of <span class="text-white">front-end development</span> and <span class="text-white">design</span> experience, I specialize in crafting intuitive user interfaces and delivering high-quality web solutions.',
  techs: {
    ts: {
      name: 'Typescript',
      icon: TsLogo,
    },
    py: {
      name: 'Python',
      icon: PythonLogo,
    },
    ruby: {
      name: 'Ruby',
      icon: RubyLogo,
    },
    react: {
      name: 'React',
      icon: ReactLogo,
    },
    nextjs: {
      name: 'NextJS',
      icon: NextLogo,
    },
    nestjs: {
      name: 'NestJS',
      icon: NestLogo,
    },
    nodejs: {
      name: 'NodeJS',
      icon: NodeLogo,
    },
    rails: {
      name: 'Ruby on Rails',
      icon: RailsLogo,
    },
    sass: {
      name: 'SASS',
      icon: SassLogo,
    },
    tailwind: {
      name: 'Tailwind CSS',
      icon: TailwindLogo,
    },
  },
}
const {heading, text, techs} = skillsData

export default function Skills() {
  return (
    <Block token={'skills-cv'} heading={heading} text={text} className="space-y-4">
      <div className="flex flex-wrap gap-2 sm:grid-cols-3 md:grid-cols-4">
        {Object.keys(techs).map((key) => {
          const item = techs[key]
          return <Badge className="text-neutral-200" size="medium" text={item.name} icon={item.icon} key={item} />
        })}
      </div>
    </Block>
  )
}
