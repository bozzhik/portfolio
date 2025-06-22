import Button from '~/UI/Button'
import {SPAN} from '~/UI/Typography'

export default function NavigationButton({href, text}: {href: string; text: string}) {
  return (
    <Button as="link" href={href} variant="secondary" className="w-full rounded-[14px] sm:rounded-[10px] sm:py-2.5">
      <SPAN className="px-1.5 text-foreground group-hover:scale-[1.04] duration-300">{text}</SPAN>
    </Button>
  )
}
