'use client'
import ProjectCard from '@/components/cards/project-card'
import Section from '@/components/containers/section'
import { projectsData } from '@/data/projects.data'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  staggerContainer,
  fadeInUp,
  fadeInDown,
  projectsStaggerContainer,
} from '@/config/animation.config'

const ProjectSection = () => {
  return (
    <Section id='projects' className='py-16 md:py-28'>
      <div className='mb-12 flex flex-col justify-center'>
        <motion.h2
          variants={fadeInDown}
          initial='initial'
          whileInView='animate'
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className='mb-2.5 text-center text-h2 text-muted-foreground'>
          Other Noteworthy Projects
        </motion.h2>
        {/* <motion.div
          variants={fadeInUp}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}>
          <Link
            href='/projects'
            className='archive-link relative mx-auto inline-block text-center font-mono text-sm text-primary'>
            View the archive
          </Link>
        </motion.div> */}
      </div>
      <motion.div
        className='projects-grid'
        variants={projectsStaggerContainer}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}>
        {projectsData.map((project) => (
          <motion.div
            key={project.title}
            variants={fadeInDown}
            viewport={{ once: true }}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export default ProjectSection
