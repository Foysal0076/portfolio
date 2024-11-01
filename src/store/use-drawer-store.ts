import { create } from 'zustand'

type DrawerStoreState = {
  isOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

export const useDrawerStore = create<DrawerStoreState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}))
