import BannerSection from '@/components/sections/banner';
import AboutSection from '@/components/sections/about';
import ProjectSection from '@/components/sections/projects';
import SkillSection from '@/components/sections/skills';
import ContactSection from '@/components/sections/contact';
import { ScrollBasedVelocity } from '@/components/custom/scroll-velocity-text';

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
