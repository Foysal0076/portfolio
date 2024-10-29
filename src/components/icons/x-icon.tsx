import { cn } from '@/utils'
import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export const XIcon = ({ className, ...props }: Props) => (
  <svg
    className={cn('h-6 w-6', className)}
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 256 256'
    {...props}>
    <rect width='256' height='256' fill='none' />
    <polygon
      points='48 40 96 40 208 216 160 216 48 40'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='16'
    />
    <line
      x1='113.88'
      y1='143.53'
      x2='48'
      y2='216'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='16'
    />
    <line
      x1='208'
      y1='40'
      x2='142.12'
      y2='112.47'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='16'
    />
  </svg>
)
