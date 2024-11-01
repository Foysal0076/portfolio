import FeaturedProjectCard from '@/components/cards/featured-project-card'
import Section from '@/components/containers/section'
import { featuredProjectsData } from '@/data/projects.data'

const FeaturedProjectsSection = () => {
  return (
    <Section id='featured-projects' className='py-16 md:py-28'>
      <h2 className='numbered-heading mb-10 text-nowrap text-numbered-heading text-muted-foreground'>
        <span className='xl:2xl mr-2.5 font-mono text-base text-primary md:text-xl'>
          03.
        </span>{' '}
        Some Things I&lsquo;ve built
      </h2>
      <ul className='relative z-10 flex flex-col gap-10 md:gap-14 xl:gap-24'>
        {featuredProjectsData.map((project) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </Section>
  )
}

export default FeaturedProjectsSection
