export type SanityImage = {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export type Product = {
  name: string
  link: string
  id: number
  description: string
  type: string
  slug: string
  image?: SanityImage
  hover_color?: unknown
  is_best?: boolean
  in_development?: boolean
  is_draft?: boolean
}
