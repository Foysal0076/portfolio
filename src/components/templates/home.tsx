import AboutMeSection from '@/components/home/about-me-section'
import ExperienceSection from '@/components/home/experience-section'
import HomeHero from '@/components/home/home-hero'
import FeaturedProjectsSection from '@/components/home/featured-projects-section'
import ProjectSection from '@/components/home/projects-section'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <AboutMeSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <ProjectSection />
    </div>
  )
}

export default Home
