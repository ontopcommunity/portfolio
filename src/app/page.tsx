import { HeroSection } from '@/components/sections/hero-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
