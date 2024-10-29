import Section from '@/components/containers/section'
import Button from '@/components/ui/button'
import { myInformation } from '@/data/personal.data'

const GetInTouchSection = () => {
  return (
    <Section className='max-w-[37.5rem] py-16 text-center md:py-24'>
      <h2 className='mb-5 font-mono text-base text-primary'>
        What&lsquo;s Next?
      </h2>
      <h3 className='mb-2.5 text-title font-bold text-muted-foreground'>
        Get In Touch
      </h3>
      <p className=''>
        My inbox is always open. Whether you have a question or just want to say
        hi, I&lsquo;ll try my best to get back to you!
      </p>
      <a
        href={`mailto:${myInformation.email}`}
        target='_blank'
        rel='noopener noreferrer'>
        <Button className='mt-10'>Say Hello</Button>
      </a>
    </Section>
  )
}

export default GetInTouchSection
