import FeaturedProjectCard from '@/components/cards/featured-project-card'
import Section from '@/components/containers/section'
import { featuredProjectsData } from '@/data/projects.data'

const ProjectsSection = () => {
  return (
    <Section id='featured-projects' className='py-16 md:py-28'>
      <h2 className='numbered-heading mb-10 text-nowrap text-numbered-heading text-muted-foreground'>
        Some Things I&lsquo;ve built
      </h2>
      <ul className='relative z-10 flex flex-col gap-10 md:gap-14 xl:gap-24'>
        {featuredProjectsData.map((project, i) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </Section>
  )
}

export default ProjectsSection
