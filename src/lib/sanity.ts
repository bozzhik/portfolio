import type {SanityImage} from '@/types/product'

import {createClient} from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'my0gy5hm',
  dataset: 'production',
  apiVersion: '2024-01-08',
  useCdn: false,
})

const imageBuilder = ImageUrlBuilder(client)

export function urlForImage(source: SanityImage) {
  return imageBuilder.image(source)
}
