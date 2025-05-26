import AboutSection from '@/components/about-section';
import HeroSection from '@/components/hero-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import projects from '@/data/projects';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* Projects Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Card
              key={project.name}
              className="w-full max-w-md shadow-xl hover:scale-[1.01] transition-transform"
            >
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between flex-wrap gap-2">
                <Link href={project.liveLink} target="_blank">
                  <Button variant="link" size="sm" className="flex gap-1">
                    <ExternalLink size={16} />
                    Live
                  </Button>
                </Link>
                <Link href={project.githubLink} target="_blank">
                  <Button variant="link" size="sm" className="flex gap-1">
                    {/* <Github size={16} /> */}
                    Code
                  </Button>
                </Link>
                <Link href={`/projects/${project.slug}`}>
                  <Button size="sm" className="ml-auto">
                    View More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
