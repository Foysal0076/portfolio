'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import { NavigationDrawerMenu } from '@/components/navigation/navigation-drawer'
import { cn } from '@/utils'
import MyLogo from '@/components/my-logo'
import NavLinks from '@/components/navigation/nav-links'
import NavigationDrawer from '@/components/navigation/navigation-drawer/navigation-drawer'
import { useDrawerStore } from '@/store/use-drawer-store'
import { useOutsideClick } from '@/hooks/use-outside-click'

export const Navbar = () => {
  const [visible, setVisible] = useState(true)
  let lastScrollTop = 0

  const drawerRef = useRef<HTMLDivElement>(null)
  const toggleMenu = useDrawerStore((state) => state.toggleMenu)

  useOutsideClick(drawerRef, () => {
    toggleMenu()
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        // Scroll Down
        setVisible(false)
      } else {
        // Scroll Up
        setVisible(true)
      }
      lastScrollTop = scrollTop
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      // Cleanup function to remove the event listener
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-[98] flex h-[3.75rem] w-full items-center backdrop-blur-3xl transition-[var(--transition)] duration-[350ms] md:h-20',
          { 'top-0': visible, '-top-[3.75rem] md:-top-20': !visible }
        )}
        aria-label='Main navigation'>
        <nav
          className='flex w-full items-center justify-between px-4 md:px-8'
          aria-label='Main navigation'>
          <div className='tracking-tighter'>
            <Link href='/' className='h5 font-extrabold text-primary'>
              <MyLogo />
            </Link>
          </div>
          <NavLinks className='hidden md:flex' />
        </nav>
      </header>
      <div className='md:hidden' ref={drawerRef}>
        <div
          className={`fixed right-4 ${
            visible ? 'top-6' : 'top-[-3.75rem] md:top-[-4.25rem]'
          } z-[1000] transition-[var(--transition)] duration-[350ms]`}>
          <NavigationDrawerMenu />
        </div>
        <NavigationDrawer />
      </div>
    </>
  )
}