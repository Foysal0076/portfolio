import { cn } from '@/utils'
import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  className?: string
}

export const FolderIcon = ({ className, ...props }: Props) => (
  <svg
    className={cn('h-6 w-6', className)}
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    viewBox='0 0 256 256'
    {...props}>
    <rect width='256' height='256' fill='none' />
    <path
      d='M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='16'
    />
  </svg>
)
