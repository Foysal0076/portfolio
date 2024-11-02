export const fadeInUp = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2 },
}

export const fadeInDown = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
}

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
}

export const projectsStaggerContainer = {
  animate: { transition: { staggerChildren: 0.2 } },
}

export const staggerItem = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
}

export const sectionAnimation = {
  initial: { y: 40 },
  whileInView: { y: 0 },
  transition: { duration: 0.5, delay: 0.2 },
  viewport: { once: true },
}
