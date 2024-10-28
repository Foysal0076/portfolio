import { ExternalLinkIcon, GithubIcon } from '@/components/icons'
import { Project } from '@/types'
import Image from 'next/image'

type Props = {
  project: Project
}

const FeaturedProjectCard = ({ project }: Props) => {
  return (
    <li className='featured-project-card'>
      <div className='project-content z-10'>
        <div>
          <p className='mb-1 font-mono text-sm text-primary'>
            {project.subtitle}
          </p>

          <h3 className='project-title mb-3 text-project-title hover:text-primary md:mb-5'>
            <a href={project.liveUrl}>{project.title}</a>
          </h3>

          <div
            className='project-description rounded py-3 text-card-foreground md:bg-card md:p-6 [&_p]:text-base'
            dangerouslySetInnerHTML={{ __html: project.shortDescription }}
          />

          {project.technologies.length && (
            <ul className='project-tech-list mb-2.5 mt-6 flex flex-wrap'>
              {project.technologies.map((tech, i) => (
                <li key={i} className='font-mono text-[.8125rem]'>
                  {tech}
                </li>
              ))}
            </ul>
          )}

          <div className='project-links'>
            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                aria-label='GitHub Link'
                className='inline-block p-2.5 transition-colors duration-300 hover:text-primary'>
                <GithubIcon className='h-5 w-5' />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                aria-label='External Link'
                className='inline-block p-2.5 transition-colors duration-300 hover:text-primary'>
                <ExternalLinkIcon className='h-5 w-5' />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className='project-image'>
        <a href={project.liveUrl}>
          <Image
            src={project.image ?? ''}
            alt={project.title}
            className='img'
            height={700}
            width={1000}
          />
        </a>
      </div>
    </li>
  )
}

export default FeaturedProjectCard
