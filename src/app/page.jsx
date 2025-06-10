import AboutSection from '@/components/sections/about';
import HeroSection from '@/components/sections/hero';
import ProjectSection from '@/components/sections/projects';
import SkillSection from '@/components/sections/skills';
import ContactSection from '@/components/sections/contact';
import { ScrollBasedVelocity } from '@/components/custom/scroll-velocity-text';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollBasedVelocity />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </>
  );
}
