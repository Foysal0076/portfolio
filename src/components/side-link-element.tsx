import SocialLinks from '@/components/social-links'

const SideLinksElement = () => {
  return (
    <div className='fixed bottom-0 left-5 z-10 w-10 max-md:hidden'>
      <SocialLinks className='flex flex-col gap-2 after:mx-auto after:block after:h-[6rem] after:w-px after:bg-border after:content-[""]' />
    </div>
  )
}

export default SideLinksElement
