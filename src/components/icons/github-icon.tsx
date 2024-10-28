import { cn } from '@/utils'
import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export const GithubIcon = ({ className, ...props }: Props) => (
  <svg
    className={cn('h-6 w-6', className)}
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 256 256'
    {...props}>
    <path
      d='M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='24'
    />
    <path
      d='M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='24'
    />
    <path
      d='M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='24'
    />
  </svg>
)
