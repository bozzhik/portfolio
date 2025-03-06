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

import Block from '#/UI/Block'
import Badge from '#/UI/Badge'

type Skill = {
  name: string
  icon: string
}

const skills: Skill[] = [
  {
    name: 'Typescript',
    icon: TsLogo,
  },
  {
    name: 'Python',
    icon: PythonLogo,
  },
  {
    name: 'Ruby',
    icon: RubyLogo,
  },
  {
    name: 'React',
    icon: ReactLogo,
  },
  {
    name: 'NextJS',
    icon: NextLogo,
  },
  {
    name: 'NestJS',
    icon: NestLogo,
  },
  {
    name: 'NodeJS',
    icon: NodeLogo,
  },
  {
    name: 'Ruby on Rails',
    icon: RailsLogo,
  },
  {
    name: 'SASS',
    icon: SassLogo,
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindLogo,
  },
]

const skillsData = {
  heading: 'skills',
  text: 'With over 2 years of <span class="text-white">front-end development</span> and <span class="text-white">design</span> experience, I specialize in crafting intuitive user interfaces and delivering high-quality web solutions.',
}

export default function Skills() {
  return (
    <Block token={'skills-cv'} className="space-y-4" heading={skillsData.heading} text={skillsData.text}>
      <div className="flex flex-wrap gap-2 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, index) => (
          <Badge className="text-neutral-200" size="medium" text={skill.name} icon={skill.icon} key={index} />
        ))}
      </div>
    </Block>
  )
}
