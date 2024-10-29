import ProjectCard from '@/components/cards/project-card'
import Section from '@/components/containers/section'
import { projectsData } from '@/data/projects.data'
import Link from 'next/link'

const ProjectSection = () => {
  return (
    <Section id='projects' className='py-16 md:py-28'>
      <div className='mb-12 flex flex-col justify-center'>
        <h2 className='mb-2.5 text-center text-h2 text-muted-foreground'>
          Other Noteworthy Projects
        </h2>
        <Link
          href='/projects'
          className='archive-link relative mx-auto inline-block text-center font-mono text-sm text-primary'>
          View the archive
        </Link>
      </div>
      <div className='projects-grid'>
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectSection
