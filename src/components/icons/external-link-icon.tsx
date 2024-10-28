import { cn } from '@/utils'
import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export const ExternalLinkIcon = ({ className, ...props }: Props) => (
  <svg
    className={cn('h-6 w-6', className)}
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 256 256'
    {...props}>
    <rect width='256' height='256' fill='none' />
    <polyline
      points='216 104 215.99 40.01 152 40'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='24'
    />
    <line
      x1='136'
      y1='120'
      x2='216'
      y2='40'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='24'
    />
    <path
      d='M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='24'
    />
  </svg>
)
