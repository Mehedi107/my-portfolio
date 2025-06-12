import { ScrollBasedVelocity } from '@/components/custom/scroll-velocity-text';
import dynamic from 'next/dynamic';

const BannerSection = dynamic(() => import('@/components/sections/banner'));
const AboutSection = dynamic(() => import('@/components/sections/about'));
const ProjectSection = dynamic(() => import('@/components/sections/projects'));
const SkillSection = dynamic(() => import('@/components/sections/skills'));
const ContactSection = dynamic(() => import('@/components/sections/contact'));

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
