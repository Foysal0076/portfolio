'use client'

import { DrawerContent } from '@/components/navigation/navigation-drawer/drawer-content'
import { useDrawerStore } from '@/store/use-drawer-store'

const NavigationDrawer = () => {
  const isOpen = useDrawerStore((state) => state.isOpen)

  return (
    <div
      id='navigation-drawer'
      className={`fixed bottom-0 right-0 top-0 z-[999] h-screen w-3/4 transform bg-card shadow-lg transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
      <DrawerContent />
    </div>
  )
}

export default NavigationDrawer
