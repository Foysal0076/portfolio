'use client'

import { DrawerContent } from '@/components/navigation/navigation-drawer/drawer-content'
import { useDrawerStore } from '@/store/use-drawer-store'
import { cn } from '@/utils'

const NavigationDrawer = () => {
  const isOpen = useDrawerStore((state) => state.isOpen)
  const closeMenu = useDrawerStore((state) => state.closeMenu)

  return (
    <>
      <div
        onClick={closeMenu}
        className={cn(
          'fixed inset-0 -z-50 h-full w-full transition-all duration-500',
          {
            'z-50 backdrop-blur-md': isOpen,
          }
        )}
      />
      <div
        id='navigation-drawer'
        className={`fixed bottom-0 right-0 top-0 z-[999] h-screen w-3/4 transform bg-card shadow-lg transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <DrawerContent />
      </div>
    </>
  )
}

export default NavigationDrawer
