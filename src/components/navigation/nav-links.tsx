import Button from '@/components/ui/button'
import { cn } from '@/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/config/animation.config'
import { myInformation } from '@/data/personal.data'

type Props = HTMLMotionProps<'ul'> & {
  handleCloseDrawer?: () => void
}

const NavLinks = ({ className, handleCloseDrawer, ...props }: Props) => {
  const navItems = [
    { href: '#about', number: '01', text: 'About' },
    { href: '#experience', number: '02', text: 'Experience' },
    { href: '#featured-projects', number: '03', text: 'Work' },
    { href: '#contact', number: '04', text: 'Contact' },
  ]

  return (
    <motion.ul
      className={cn('flex items-center gap-4', className)}
      {...props}
      variants={staggerContainer}
      initial='initial'
      animate='animate'>
      {navItems.map(({ href, number, text }) => (
        <motion.li key={href} variants={staggerItem}>
          <a
            href={href}
            onClick={handleCloseDrawer}
            className='p-2.5 font-mono text-sm transition-colors duration-300 hover:text-primary max-md:flex max-md:flex-col max-md:items-center max-md:gap-1'>
            <span className='font-mono text-primary'>{number}.</span> {text}
          </a>
        </motion.li>
      ))}
      <motion.li variants={staggerItem}>
        <a href={myInformation.resumeUrl} download>
          <Button className='px-6 py-2.5'>Resume</Button>
        </a>
      </motion.li>
    </motion.ul>
  )
}

export default NavLinks
