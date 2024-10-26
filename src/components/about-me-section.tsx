import Section from '@/components/containers/section'
import Image from 'next/image'

const AboutMeSection = () => {
  return (
    <Section id='about' className='max-w-[60rem] py-28'>
      <h2 className='numbered-heading mb-10 text-nowrap text-numbered-heading text-muted-foreground'>
        About Me
      </h2>
      <div className='flex flex-col gap-12 md:flex-row'>
        <div className='basis-3/5'>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            incidunt nostrum odio, quod quaerat vel sequi consequuntur iure, id,
            est vero voluptatem dolores nobis illum beatae hic. Praesentium rem
            ratione velit quia consequatur unde tempora perspiciatis earum est
            in recusandae, magni sed eos impedit quibusdam blanditiis! Alias
            debitis nulla asperiores!
          </p>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            assumenda ab atque officia illo reiciendis sit. Distinctio itaque
            voluptatum praesentium aliquid accusamus earum, asperiores
            voluptatibus laborum quo. Fugiat vero animi accusamus deserunt unde,
            perspiciatis molestiae inventore expedita cum, fuga enim placeat
            minus veniam!
          </p>
          <p className='mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            earum expedita temporibus officiis ut dolore aspernatur quia
            laboriosam repudiandae consectetur esse quasi aliquam totam!
          </p>
          <p className='mb-4'>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className='mt-5 grid grid-cols-[repeat(2,_minmax(8.75rem,_12.5rem))] gap-4'>
            <li className='@apply .5 relative pl-5 font-mono text-[0.8125rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:leading-[12px] before:text-primary before:content-["▹"]'>
              Javascript
            </li>
            <li className='@apply .5 relative pl-5 font-mono text-[0.8125rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:leading-[12px] before:text-primary before:content-["▹"]'>
              Typescript
            </li>
            <li className='@apply .5 relative pl-5 font-mono text-[0.8125rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:leading-[12px] before:text-primary before:content-["▹"]'>
              Next.js
            </li>
            <li className='@apply .5 relative pl-5 font-mono text-[0.8125rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:leading-[12px] before:text-primary before:content-["▹"]'>
              Node.js
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
