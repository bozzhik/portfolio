import Link from 'next/link'

export default function Hero() {
  const ArrowIcon = (
    <svg className="duration-500 fill-neutral-300 s-5 group-hover:rotate-45 group-hover:fill-neutral-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
    </svg>
  )

  const links = [
    {text: 'E-mail', url: 'mailto:bozzhik@yandex.com'},
    {text: 'GitHub', url: 'https://github.com/bozzhik'},
    {text: 'Telegram', url: 'https://t.me/bozzhik'},
    {text: 'Instagram', url: 'https://instagram.com/bozzzzhik'},
  ]

  return (
    <div className="flex gap-5 xl:gap-3.5 sm:flex-wrap sm:gap-5 text-neutral-300">
      {links.map((link, index) => (
        <Link target="_blank" className="flex items-center gap-1 group" href={link.url} key={index}>
          {ArrowIcon}
          <span className="duration-500 group-hover:text-neutral-400">{link.text}</span>
        </Link>
      ))}
    </div>
  )
}
