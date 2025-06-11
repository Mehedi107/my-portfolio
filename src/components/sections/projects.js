import ProjectsTab from '../custom/project-tabs';
import SectionHeader from '../custom/section-header';
import SlideInFromBottom from '../custom/slide-in-from-bottom';

export default function ProjectSection() {
  return (
    <section id="projects">
      <div className="wrapper">
        <SectionHeader
          section="Projects"
          title="Featured Work"
          description="Showcasing some of my best projects and technical achievements"
        />
        <SlideInFromBottom delay={0.6}>
          <ProjectsTab />
        </SlideInFromBottom>
      </div>
    </section>
  );
}
