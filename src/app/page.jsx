import AboutSection from '@/components/sections/about';
import HeroSection from '@/components/sections/hero';
import ProjectSection from '@/components/sections/projects';
import SkillSection from '@/components/sections/skill';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AboutSection /> */}
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
