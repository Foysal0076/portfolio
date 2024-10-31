'use client'

import { useState } from 'react'

import { DrawerContent } from './drawer-content'
import { HamburgerMenu } from './hamburger-menu'
import { useDrawerStore } from '@/store/use-drawer-store'

export const NavigationDrawerMenu = () => {
  const isOpen = useDrawerStore((state) => state.isOpen)
  const toggleMenu = useDrawerStore((state) => state.toggleMenu)

  return (
    <div className='relative my-auto'>
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  )
}
