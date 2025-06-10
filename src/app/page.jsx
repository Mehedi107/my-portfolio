import AboutSection from '@/components/sections/about';
import HeroSection from '@/components/sections/hero';
import ProjectSection from '@/components/sections/projects';
import SkillSection from '@/components/sections/skills';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </>
  );
}
