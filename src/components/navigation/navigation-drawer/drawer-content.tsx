import NavLinks from '@/components/navigation/nav-links'
import Button from '@/components/ui/button'
import Link from 'next/link'

export const DrawerContent = () => {
  const year = new Date().getFullYear()
  return (
    <nav
      className='flex h-full flex-col justify-between'
      aria-label='Mobile navigation'>
      <div className='flex grow flex-col justify-between gap-4 bg-card'>
        <div className='grow'>
          <NavLinks className='h-full flex-col justify-center' />
        </div>
        <div className='bg-surface-50 dark:bg-surface-100/20 flex flex-col justify-end gap-4 px-6 py-4'></div>
      </div>
    </nav>
  )
}
