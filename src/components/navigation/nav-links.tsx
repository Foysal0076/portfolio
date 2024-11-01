import Button from '@/components/ui/button'
import { cn } from '@/utils'
import { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLUListElement> & {
  handleCloseDrawer?: () => void
}

const NavLinks = ({ className, handleCloseDrawer, ...props }: Props) => {
  return (
    <ul className={cn('flex items-center gap-4', className)} {...props}>
      <li>
        <a
          href='#about'
          onClick={handleCloseDrawer}
          className='p-2.5 font-mono text-sm transition-colors duration-300 hover:text-primary max-md:flex max-md:flex-col max-md:items-center max-md:gap-1'>
          {' '}
          <span className='font-mono text-primary'>01.</span> About
        </a>
      </li>
      <li>
        <a
          href='#experience'
          onClick={handleCloseDrawer}
          className='p-2.5 font-mono text-sm transition-colors duration-300 hover:text-primary max-md:flex max-md:flex-col max-md:items-center max-md:gap-1'>
          {' '}
          <span className='font-mono text-primary'>02.</span> Experience
        </a>
      </li>
      <li>
        <a
          href='#featured-projects'
          onClick={handleCloseDrawer}
          className='p-2.5 font-mono text-sm transition-colors duration-300 hover:text-primary max-md:flex max-md:flex-col max-md:items-center max-md:gap-1'>
          {' '}
          <span className='font-mono text-primary'>03.</span> Work
        </a>
      </li>
      <li>
        <a
          href='#contact'
          onClick={handleCloseDrawer}
          className='p-2.5 font-mono text-sm transition-colors duration-300 hover:text-primary max-md:flex max-md:flex-col max-md:items-center max-md:gap-1'>
          {' '}
          <span className='font-mono text-primary'>04.</span> Contact
        </a>
      </li>
      <li>
        <a href='/documents/Resume_Foysal_Ahmed.pdf' download>
          <Button className='px-6 py-2.5'>Resume</Button>
        </a>
      </li>
    </ul>
  )
}

export default NavLinks
