import AboutMeSection from '@/components/home/about-me-section'
import ExperienceSection from '@/components/home/experience-section'
import HomeHero from '@/components/home/home-hero'
import ProjectsSection from '@/components/home/projects-section'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}

export default Home
