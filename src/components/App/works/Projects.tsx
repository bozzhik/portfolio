import {PROJECTS} from '@/content'

import {cn} from '@/lib/utils'

import Block from '~/UI/Block'
import NavigationButton from '~/UI/NavigationButton'
import Card from '~~/works/Card'

export default function Projects({view, delay}: {view: 'home' | 'works'; delay?: number}) {
  return (
    <Block section="works" heading={view === 'home' ? 'best works' : 'works'} className={cn('gap-3.5 sm:gap-4', view === 'works' && 'sm:gap-3.5')} delay={delay}>
      <div className="space-y-4.5 sm:space-y-3.5">
        {Object.entries(PROJECTS)
          .filter(([, project]) => (view === 'home' ? project.featured : true))
          .map(([key, project]) => (
            <Card key={key} {...project} />
          ))}

        {view === 'home' && <NavigationButton href="/works" text="More works" />}
      </div>
    </Block>
  )
}
