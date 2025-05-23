'use client'
import Section from '@/components/containers/section'
import { useState, useRef, useEffect, useMemo } from 'react'
import { experienceData } from '@/data/experience.data'
import { cn } from '@/utils'
import { motion } from 'framer-motion'
import { sectionAnimation } from '@/config/animation.config'

const ExperienceSection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const tabsRef = useRef<HTMLDivElement>(null)

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index)
  }

  const dataLength = useMemo(() => experienceData.length, [experienceData])

  const [tabStyle, setTabStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const handleResize = () => {
      setTabStyle({
        [window.innerWidth >= 768 ? 'height' : 'width']: `${100 / dataLength}%`,
        transform:
          window.innerWidth >= 768
            ? `translateY(${activeTabIndex * 100}%)`
            : `translateX(${activeTabIndex * 100}%)`,
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleResize()
        }
      })
    })

    if (tabsRef.current) {
      observer.observe(tabsRef.current)
    }

    handleResize() // Initial call to set the style

    return () => {
      if (tabsRef.current) {
        observer.unobserve(tabsRef.current)
      }
    }
  }, [activeTabIndex])

  return (
    <Section id='experience' className='max-w-[43.75rem] py-16 md:py-28'>
      <motion.div
        variants={sectionAnimation}
        initial='initial'
        whileInView='whileInView'
        transition={sectionAnimation.transition}
        viewport={sectionAnimation.viewport}>
        <h2 className='numbered-heading'>
          <span className='xl:2xl mr-2.5 font-mono text-base text-primary md:text-xl'>
            02.
          </span>{' '}
          Where I&rsquo;ve Worked
        </h2>

        <div className='md:flex'>
          <div className='relative max-md:max-w-fit md:mr-5 md:max-h-fit md:w-40'>
            <div
              ref={tabsRef}
              className='scrollbar-hide flex overflow-x-auto border-b border-border md:flex-col md:overflow-x-visible md:border-b-0 md:border-l'>
              {experienceData.map((item, index) => (
                <button
                  key={index}
                  className={cn(
                    'h-11 whitespace-nowrap px-5 font-mono text-sm transition-colors duration-300 md:text-left md:hover:bg-card',
                    {
                      'text-primary': activeTabIndex === index,
                      'text-muted-foreground': activeTabIndex !== index,
                    }
                  )}
                  onClick={() => handleTabClick(index)}>
                  {item.company}
                </button>
              ))}
            </div>
            <div
              className='absolute -left-[1px] bottom-0 h-0.5 rounded bg-primary transition-all duration-300 md:top-0 md:h-auto md:w-0.5'
              style={tabStyle}
            />
          </div>

          <div className='mt-6 md:mt-0 md:flex-1'>
            <h3 className='0.5 text-[1.375rem] font-medium'>
              {experienceData[activeTabIndex].position}
              <span className='text-primary'>
                &nbsp;@&nbsp;
                {experienceData[activeTabIndex].company}
              </span>
            </h3>
            <p className='font-mono'>
              {experienceData[activeTabIndex].duration}
            </p>
            <ul className='mt-6 space-y-2'>
              {experienceData[activeTabIndex].keyPoints.map((point, index) => (
                <li
                  key={index}
                  className='relative pl-8 before:absolute before:left-0 before:mr-2 before:text-lg before:text-primary before:content-["▹"]'>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default ExperienceSection
