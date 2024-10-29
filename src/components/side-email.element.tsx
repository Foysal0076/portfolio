import { myInformation } from '@/data/personal.data'

const SideEmailElement = () => {
  return (
    <div className='0 fixed bottom-0 right-5 z-10 w-10 after:mx-auto after:block after:h-[6rem] after:w-px after:bg-border after:content-[""] max-md:hidden'>
      <a
        href={`mailto:${myInformation.email}`}
        style={{ writingMode: 'vertical-rl' }}
        className='block rounded-full bg-background p-2.5 font-mono text-xs leading-6 transition-[var(--transition)] duration-300 hover:-translate-y-1 hover:text-primary'>
        {myInformation.email}
      </a>
    </div>
  )
}

export default SideEmailElement
