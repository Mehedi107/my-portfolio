import AboutSection from '@/components/sections/about';
import ProjectSection from '@/components/sections/projects';
import SkillSection from '@/components/sections/skills';
import ContactSection from '@/components/sections/contact';
import { ScrollBasedVelocity } from '@/components/custom/scroll-velocity-text';
import BannerSection from '@/components/sections/Banner';

export default function Home() {
  return (
    <>
      <BannerSection />
      <ScrollBasedVelocity />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </>
  );
}
