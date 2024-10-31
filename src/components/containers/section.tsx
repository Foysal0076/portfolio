import { cn } from '@/utils'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const Section = ({ children, className, ...props }: Props) => {
  return (
    <section className={cn('mx-auto max-w-[62.5rem]', className)} {...props}>
      {children}
    </section>
  )
}

export default Section
