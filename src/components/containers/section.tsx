import { cn } from '@/utils'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const Section = ({ children, className }: Props) => {
  return (
    <section className={cn('mx-auto max-w-[62.5rem]', className)}>
      {children}
    </section>
  )
}

export default Section
