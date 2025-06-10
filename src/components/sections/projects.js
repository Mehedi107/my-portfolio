import ProjectsTab from '../custom/project-tabs';
import { Badge } from '../ui/badge';

export default function ProjectSection() {
  return (
    <section id="projects">
      <div className="wrapper">
        {/* title content */}
        <div className="space-y-4 mb-10">
          <Badge variant="secondary">Projects</Badge>

          <h2 className="text-4xl md:text-5xl font-bold">Featured Work</h2>

          <p className="text-muted-foreground">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>
        {/* content */}
        <ProjectsTab />
      </div>
    </section>
  );
}
