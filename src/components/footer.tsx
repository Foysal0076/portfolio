import { myInformation } from '@/data/personal.data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='relative bg-background py-4'>
      <a
        href={myInformation.github}
        target='_blank'
        rel='noopener noreferrer'
        className='mb-2 block text-center font-mono text-xs text-muted-foreground transition-[var(--transition)] duration-[350ms] hover:text-primary'>
        Developed by {myInformation.name}
      </a>
      <a
        className='block text-center font-mono text-xs text-muted-foreground transition-[var(--transition)] duration-[350ms] hover:text-primary'
        href='https://github.com/bchiang7'
        target='_blank'
        rel='noopener noreferrer'>
        Design Inspiration from Brittany Chiang
      </a>
    </footer>
  )
}

export default Footer
