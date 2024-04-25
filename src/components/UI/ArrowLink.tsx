import Link from 'next/link'

interface Props {
  link: {
    url: string
    text: string
  }
  index: number
}

function ArrowLink({link, index}: Props) {
  const ArrowIcon = (
    <svg className="duration-500 fill-neutral-300 s-5 group-hover:rotate-45 group-hover:fill-neutral-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
    </svg>
  )

  return (
    <Link className="flex items-center gap-1 group" href={link.url} key={index} target="_blank">
      {ArrowIcon}
      <span className="duration-500 group-hover:text-neutral-400">{link.text}</span>
    </Link>
  )
}

export {ArrowLink}
