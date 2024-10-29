import { ExternalLinkIcon, FolderIcon } from '@/components/icons'
import { Project } from '@/types'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className='project-card shadow-default hover:shadow-card-hover flex h-full w-full flex-col justify-between rounded bg-card px-7 py-8 transition-[var(--transition)] duration-[400ms] hover:-translate-y-2'>
      <header>
        <div className='mb-8 flex items-center justify-between'>
          <FolderIcon className='h-10 w-10 text-primary' strokeWidth='16' />
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary'>
            <ExternalLinkIcon className='h-5 w-5' strokeWidth='16' />
          </a>
        </div>
        <h3 className='mb-2.5 text-lg text-muted-foreground md:text-[1.375rem]'>
          {project.title}
        </h3>
        <div
          className='line-clamp-4 max-sm:[&_p]:text-sm'
          dangerouslySetInnerHTML={{ __html: project.shortDescription }}></div>
      </header>
      <footer className='mt-6 flex flex-wrap gap-2 md:gap-x-4 md:gap-y-1'>
        {project.technologies.map((technology, index) => (
          <span key={index} className='text-sm'>
            {technology}
          </span>
        ))}
      </footer>
    </div>
  )
}

export default ProjectCard
