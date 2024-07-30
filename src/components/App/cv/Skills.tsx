import Block from '##/cv/Block'
import Text from '#/UI/Text'
import Badge from '@/components/UI/Badge'

const tech: any = {
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
}

export default function Skills() {
  return (
    <Block index="skills" heading="Skills">
      <div className="space-y-4">
        <Text>
          With over 3 years of <span className="text-white">front-end development</span> and <span className="text-white">design</span> experience, I specialize in crafting intuitive user interfaces and delivering high-quality web solutions.
        </Text>

        <div className="flex flex-wrap gap-2 sm:grid-cols-3 md:grid-cols-4">
          {Object.keys(tech).map((key) => {
            const item = tech[key]
            return <Badge className="text-neutral-200" size="medium" text={item.name} icon={item.icon} key={item} />
          })}
        </div>
      </div>
    </Block>
  )
}
