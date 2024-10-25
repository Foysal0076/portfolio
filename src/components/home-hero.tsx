import Section from '@/components/containers/section'
import Button from '@/components/ui/button'

const HomeHero = () => {
  return (
    <Section
      id='hero'
      className='mx-auto flex h-screen flex-col items-start justify-center'>
      <h1 className='mb-4 ml-1 font-mono font-normal text-primary sm:mb-7'>
        Hi, my name is
      </h1>
      <h2 className='mb-0.5 text-[clamp(2.125rem,_8vw,4.5rem)] leading-[1.1] text-muted-foreground'>
        Foysal Ahmed
      </h2>
      <h3 className='text-[clamp(2.125rem,_8vw,4.5rem)] leading-[1.1]'>
        I build things for the web.
      </h3>
      <p className='mt-6 max-w-[55ch] sm:mt-10'>
        I&apos;m a software engineer specializing in building exceptional
        digital experiences. Currently, I&apos;m focused on building accessible,
        human-centered products at{' '}
        <span className='text-primary'>Staff Asia</span> .
      </p>
      <Button className='mt-8 sm:mt-12'>Check out my resume!</Button>
    </Section>
  )
}

export default HomeHero
