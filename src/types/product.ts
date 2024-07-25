export interface Work {
  name: string
  link: string
  id: number
  description: string
  type: string
  image?: Array<{asset: {url: string}}>
  hover_color?: any
  is_best?: boolean
  in_development?: boolean
}

export interface Project {
  name: string
  link: string
  id: number
  description: string
  type: string
  image: Array<{asset: {url: string}}>
  hover_color?: any
  is_best: boolean
  in_development: boolean
}
