import { GithubIcon } from '@/components/icons'
import { LinkedinIcon } from '@/components/icons/linkedin-icon'
import { XIcon } from '@/components/icons/x-icon'
import { myInformation } from '@/data/personal.data'
import { cn } from '@/utils'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const SocialLinks = ({ className }: Props) => {
  return (
    <div className={cn('flex items-center justify-center gap-8', className)}>
      <a
        href={myInformation.github}
        target='_blank'
        rel='noopener noreferrer'
        className='p-2.5'>
        <GithubIcon className='h-5 w-5' strokeWidth='18' />
      </a>
      <a
        href={myInformation.linkedin}
        target='_blank'
        rel='noopener noreferrer'
        className='p-2.5'>
        <LinkedinIcon className='h-5 w-5' />
      </a>
      <a
        href={myInformation.twitter}
        target='_blank'
        rel='noopener noreferrer'
        className='p-2.5'>
        <XIcon className='h-5 w-5' />
      </a>
    </div>
  )
}

export default SocialLinks
