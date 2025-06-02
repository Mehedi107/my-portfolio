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
import { Github, Globe } from 'lucide-react';
import { Lens } from '../magicui/lens';

export default function ProjectSection() {
  return (
    <section id="projects">
      <div className="wrapper">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {projects.map(project => (
            <Card key={project.id} className="relative sm:max-w-md shadow-none">
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
                <CardTitle className="text-2xl mb-2">
                  Your Project Name
                </CardTitle>
                <CardDescription>
                  See our latest and best camp destinations all across the five
                  continents of the globe.
                </CardDescription>
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.techStack.map(tech => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="space-x-4 flex justify-between items-center">
                <Button asChild>
                  <Link
                    href="https://tailwindcss.com/docs/animation"
                    target="blank"
                  >
                    <Globe /> Website
                  </Link>
                </Button>

                <Button asChild>
                  <Link href="https://github.com/Mehedi107" target="blank">
                    <Github /> Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
