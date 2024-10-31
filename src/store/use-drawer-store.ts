import { create } from 'zustand'

type DrawerStoreState = {
  isOpen: boolean
  toggleMenu: () => void
}

export const useDrawerStore = create<DrawerStoreState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}))
