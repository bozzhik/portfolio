import {CONTENT} from '@/content'
import {cn} from '@/lib/utils'

import Image from 'next/image'
import Block from '~/UI/Block'

export default function Gallery({delay}: {delay?: number}) {
  const {gallery} = CONTENT.cvPage

  const getCellClasses = (idx: number) => {
    const GRID_IMAGE = 'h-44 xl:h-40 sm:h-40 xs:h-32'

    if (idx === 0) return cn(GRID_IMAGE, 'sm:col-span-2 sm:hidden')
    if (idx === 1) return cn('row-span-2 sm:row-span-1')
    if (idx === 2) return GRID_IMAGE
    if (idx === 3 || idx === 4) return cn('row-span-2 sm:row-span-1')
    if (idx === 5) return cn(GRID_IMAGE, 'sm:hidden')
  }

  return (
    <Block section="gallery" heading={null} delay={delay}>
      <div className="grid grid-cols-3 grid-rows-3 sm:grid-rows-2 gap-2.5 sm:grid-cols-2">
        {gallery.map(({src, alt, video}, idx) => (
          <div className={cn('relative rounded-[14px] sm:rounded-[10px] overflow-hidden animate-skeleton', getCellClasses(idx))} key={idx}>
            {video ? (
              <video className="object-cover h-full" width="100%" height="100%" muted loop autoPlay playsInline preload="auto">
                <source src={src as string} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image quality={100} alt={alt} src={src} fill sizes="35vw" priority className="object-cover sm:object-center" />
            )}
          </div>
        ))}
      </div>
    </Block>
  )
}
