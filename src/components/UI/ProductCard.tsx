import {cn} from '@/lib/utils'
import {urlForImage} from '@/lib/sanity'

import type {Product} from '@/types/product'

import Link from 'next/link'
import Image from 'next/image'
import Text from '#/UI/Text'
import Badge from '#/UI/Badge'

import DefaultImage from '%/default-card-img.png'

type Props = {
  type: 'work' | 'project'
  product: Product
}

const cardStyles = {
  base: 'group relative flex flex-col h-[37vh] max-h-[370px] min-h-[350px] xl:h-[43vh] xl:min-h-[320px] sm:h-[35vh] sm:min-h-0 sm:max-h-[270px] xs:h-[38vh]',
  border: 'overflow-hidden rounded-2xl sm:rounded-lg border-[1px] border-neutral-800 border-b-0',

  text_shadow: {
    work: 'group-hover:bg-gradient-to-b group-hover:from-custom-black/0 group-hover:to-custom-black/100',
    project: 'bg-gradient-to-b from-custom-black/0 to-custom-black/100',
  },
}
const {base, border, text_shadow} = cardStyles

export default function ProductCard({type, product}: Props) {
  return (
    <Link data-product={product.slug} data-variant={product.type} className={cn([base, border])} href={product.link} target="_blank">
      <div className={`absolute inset-0 z-10 s-full duration-500 overflow-hidden rounded-2xl sm:rounded-xl`}>
        <Image quality={100} priority className={`object-cover object-top duration-500  ${type == 'work' ? 'opacity-50 group-hover:opacity-80' : 'opacity-70 group-hover:opacity-90'} group-hover:scale-[101%]`} src={product.image ? urlForImage(product.image).url() : DefaultImage} width={1000} height={700} alt={product.name} />
      </div>

      <section className="absolute inset-0 z-0 w-full h-20"></section>

      <div className={`z-20 flex flex-col ${type == 'work' ? 'px-4 pb-5 mx-4 sm:px-0 sm:pb-4' : 'pb-5 pl-8 sm:p-4'} mt-auto text-neutral-300 ${type == 'work' ? text_shadow.work : text_shadow.project}`}>
        {product.in_development && <Badge text="COMING SOON" className="absolute mb-1 right-5 bottom-4 animate-pulse h-fit" />}

        <Text type="heading" className="xl:text-xl">
          {product.name}
        </Text>
        <Text className={`leading-normal ${type == 'work' ? 'max-w-[30ch] sm:max-w-[24ch]' : 'max-w-[33ch]'}`}>{product.description}</Text>
      </div>
    </Link>
  )
}
