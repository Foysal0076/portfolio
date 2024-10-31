const MyLogo = () => {
  return (
    <div className='group relative h-[36px] w-[32px] md:h-[46px] md:w-[42px]'>
      <div className='hex-polygon absolute inset-0 -z-10 cursor-pointer bg-primary'></div>
      <div
        className='relative z-10 h-[36px] w-[32px] cursor-pointer text-primary transition-[var(--transition)] group-hover:-translate-x-[3px] group-hover:-translate-y-[2.5px] md:h-[46px] md:w-[42px]'
        role='img'
        aria-label='My Logo'>
        <div className='hex-polygon absolute inset-0 flex items-center justify-center bg-primary' />
        <div className='hex-polygon absolute inset-[3px] flex items-center justify-center bg-background'>
          <span className='font-mono text-lg font-bold text-primary'>F</span>
        </div>
      </div>
    </div>
  )
}

export default MyLogo
