import { projects } from '@/data/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Lens } from '../magicui/lens';

export default function ProjectSection() {
  return (
    <section id="projects">
      <div className="wrapper">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Card key={project.id} className="relative max-w-md shadow-none">
              <CardHeader>
                <Lens
                  zoomFactor={2}
                  lensSize={150}
                  isStatic={false}
                  ariaLabel="Zoom Area"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image placeholder"
                    width={500}
                    height={500}
                  />
                </Lens>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl">Your next camp</CardTitle>
                <CardDescription>
                  See our latest and best camp destinations all across the five
                  continents of the globe.
                </CardDescription>
              </CardContent>
              <CardFooter className="space-x-4">
                <Button>Let&apos;s go</Button>
                <Button variant="secondary">Another time</Button>
              </CardFooter>
            </Card>
            // <Card
            //   key={project.name}
            //   className="w-full max-w-md shadow-xl hover:scale-[1.01] transition-transform"
            // >
            //   <CardHeader>
            //     <Image
            //       src={project.image}
            //       alt={project.name}
            //       width={800}
            //       height={400}
            //       className="rounded-lg"
            //     />
            //   </CardHeader>
            //   <CardContent>
            //     <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            //     <p className="text-muted-foreground mb-2">
            //       {project.description}
            //     </p>
            //     <div className="flex flex-wrap gap-2">
            //       {project.techStack.map((tech, idx) => (
            //         <Badge key={idx} variant="secondary">
            //           {tech}
            //         </Badge>
            //       ))}
            //     </div>
            //   </CardContent>
            //   <CardFooter className="flex justify-between flex-wrap gap-2">
            //     <Link href={project.liveLink} target="_blank">
            //       <Button variant="link" size="sm" className="flex gap-1">
            //         <ExternalLink size={16} />
            //         Live Demo
            //       </Button>
            //     </Link>
            //     <Link href={project.githubLink} target="_blank">
            //       <Button variant="link" size="sm" className="flex gap-1">
            //         {/* <Github size={16} /> */}
            //         <Github size={16} />
            //         Code
            //       </Button>
            //     </Link>
            //     <Link href={`/projects/${project.slug}`}>
            //       <Button size="sm" className="ml-auto">
            //         View More
            //       </Button>
            //     </Link>
            //   </CardFooter>
            // </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
