import {cn} from '@/lib/utils'
import {urlForImage} from '@/lib/sanity'

import {Work} from '##/index/Works'
import {Project} from '##/index/Projects'

import Link from 'next/link'
import Image from 'next/image'
import {Text} from '#/UI/Text'
import {Badge} from '#/UI/Badge'

import DefaultImage from '%/default-card-img.png'

interface Props {
  type: 'work' | 'project'
  product: Work | Project
  index: number
}

const cardStyles = {
  base: 'group relative flex flex-col h-[35vh] xl:h-[37vh]',
  border: 'overflow-hidden rounded-2xl sm:rounded-xl border-[1px] border-neutral-800 border-b-0',
  background: 'bg-gradient-to-b from-gradient-gray to-gradient-black',

  text_shadow: {
    work: 'group-hover:bg-gradient-to-b group-hover:from-custom-black/0 group-hover:to-custom-black/100',
    project: 'bg-gradient-to-b from-custom-black/0 to-custom-black/100',
  },
}

const {base, border, background, text_shadow} = cardStyles

const ProductCard: React.FC<Props> = ({type, product, index}) => {
  const {r, g, b, a} = product.hover_color || {r: 0, g: 0, b: 0, a: 1}
  const hoverColor = `rgba(${r}_${g}_${b}/${a})`

  return (
    <Link data-variant={product.type} className={cn([base, border, background], `hover:from-[${hoverColor}] hover:via-gradient-gray duration-500`)} href={product.link} target="_blank" key={index}>
      <div className={`absolute inset-0 z-10 s-full sm:h-[67%] duration-500 overflow-hidden rounded-2xl sm:rounded-xl`}>
        <Image quality={100} priority={product.is_best && true} className={`object-cover object-top duration-500  ${type == 'work' ? 'opacity-50 group-hover:opacity-80' : 'opacity-70 group-hover:opacity-90'} group-hover:scale-[101%]`} src={product.image ? urlForImage(product.image).url() : DefaultImage} fill={true} sizes="70vw" alt={product.name} />
      </div>

      <div className={`z-20 flex flex-col ${type == 'work' ? 'px-4 pb-5 mx-4 sm:px-0 sm:pb-4' : 'pb-5 pl-8 sm:p-4'} mt-auto text-neutral-300 ${type == 'work' ? text_shadow.work : text_shadow.project}`}>
        {product.in_development && <Badge text="COMING SOON" className="absolute mb-1 right-5 bottom-4 animate-pulse h-fit" />}

        <Text type="heading" className="xl:text-xl">
          {product.name}
        </Text>
        <Text className={`leading-normal ${type == 'work' ? 'max-w-[30ch]' : 'max-w-[33ch]'}  xl:text-sm sm:text-xs`}>{product.description}</Text>
      </div>
    </Link>
  )
}

export {ProductCard}
