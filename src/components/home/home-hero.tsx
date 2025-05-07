'use client'
import Section from '@/components/containers/section'
import Button from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeInDown, staggerContainer } from '@/config/animation.config'
import { myInformation } from '@/data/personal.data'

const HomeHero = () => {
  return (
    <Section
      id='hero'
      className='flex h-screen flex-col items-start justify-center'>
      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
        className='flex flex-col items-start'>
        <motion.h1
          variants={fadeInDown}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          className='mb-4 ml-1 font-mono font-normal text-primary sm:mb-7'>
          Hi, my name is
        </motion.h1>
        <motion.h2
          variants={fadeInDown}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
          className='mb-0.5 text-[clamp(2.125rem,_8vw,4.5rem)] leading-[1.1] text-muted-foreground'>
          Foysal Ahmed
        </motion.h2>
        <motion.h3
          variants={fadeInDown}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
          className='text-[clamp(2.125rem,_8vw,4.5rem)] leading-[1.1]'>
          I build things for the web.
        </motion.h3>
        <motion.p
          variants={fadeInDown}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
          className='mt-6 max-w-[55ch] sm:mt-10'>
          I&apos;m a software engineer specializing in building exceptional
          digital experiences. Currently, I&apos;m focused on building
          accessible, human-centered products at{' '}
          <span className='text-primary'>Staff Asia</span> .
        </motion.p>
        <motion.a
          variants={fadeInDown}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          href={myInformation.resumeUrl}
          download
          className='mt-8 sm:mt-12'>
          <Button>Check out my resume!</Button>
        </motion.a>
      </motion.div>
    </Section>
  )
}

export default HomeHero
