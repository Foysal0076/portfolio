import Section from '@/components/containers/section'
import Image from 'next/image'

const AboutMeSection = () => {
  return (
    <Section id='about' className='max-w-[60rem] py-16 md:py-28'>
      <h2 className='numbered-heading mb-10 text-nowrap text-numbered-heading text-muted-foreground'>
        <span className='xl:2xl mr-2.5 font-mono text-base text-primary md:text-xl'>
          01.
        </span>{' '}
        About Me
      </h2>
      <div className='flex flex-col gap-12 md:flex-row'>
        <div className='basis-3/5'>
          <p className='mb-4'>
            Hello! I&apos;m Foysal, a results-driven software developer with a
            passion for creating things that live on the internet. My journey in
            web development has led me to specialize in React.js and Next.js,
            where I focus on building accessible, inclusive products and digital
            experiences.
          </p>
          <p className='mb-4'>
            Currently, I&apos;m working at Staff Asia Limited as a React
            Frontend Developer, where I&apos;ve had the opportunity to develop
            and maintain various e-commerce and e-learning websites. My
            experience includes implementing robust authentication systems,
            integrating payment gateways, and ensuring efficient state
            management for optimal user experiences.
          </p>
          <p className='mb-4'>
            I&apos;m particularly passionate about writing clean, maintainable
            code and following industry-standard practices. Working in
            cross-functional teams has taught me the value of collaboration and
            agile methodologies in delivering successful projects.
          </p>
          <p className='mb-4'>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className='mt-5 grid grid-cols-[repeat(2,_minmax(8.75rem,_12.5rem))] gap-4'>
            <li className='relative pl-5 font-mono text-[0.8125rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:leading-[12px] before:text-primary before:content-["▹"]'>
              TypeScript
            </li>
            <li className='relative pl-5 font-mono text-[0.8125rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:leading-[12px] before:text-primary before:content-["▹"]'>
              React.js
            </li>
            <li className='relative pl-5 font-mono text-[0.8125rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:leading-[12px] before:text-primary before:content-["▹"]'>
              Next.js
            </li>
            <li className='relative pl-5 font-mono text-[0.8125rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:leading-[12px] before:text-primary before:content-["▹"]'>
              Node.js
            </li>
            <li className='relative pl-5 font-mono text-[0.8125rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:leading-[12px] before:text-primary before:content-["▹"]'>
              Redux/RTK
            </li>
            <li className='relative pl-5 font-mono text-[0.8125rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:leading-[12px] before:text-primary before:content-["▹"]'>
              Tailwind CSS
            </li>
          </ul>
        </div>
        <div className='flex basis-2/5 items-start justify-center'>
          <div className='dp-wrapper group relative h-full max-h-[25rem] w-full max-md:h-[25rem] max-md:w-[20rem]'>
            <Image
              src='/images/me.jpg'
              alt="Foysal Ahmed's displace picture"
              priority
              fill
              className='rounded object-cover group-hover:-translate-x-1 group-hover:-translate-y-1'
            />
            <div className='absolute inset-0 bg-primary opacity-80 mix-blend-multiply transition-opacity group-hover:opacity-0'></div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutMeSection
