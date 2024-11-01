'use client'
import NavLinks from '@/components/navigation/nav-links'
import { useDrawerStore } from '@/store/use-drawer-store'

export const DrawerContent = () => {
  const closeDrawer = useDrawerStore((state) => state.closeMenu)
  return (
    <nav
      className='flex h-full flex-col justify-between'
      aria-label='Mobile navigation'>
      <div className='flex grow flex-col justify-between gap-4 bg-card'>
        <div className='grow'>
          <NavLinks handleCloseDrawer={closeDrawer} className='h-full flex-col justify-center' />
        </div>
        <div className='bg-surface-50 dark:bg-surface-100/20 flex flex-col justify-end gap-4 px-6 py-4'></div>
      </div>
    </nav>
  )
}
