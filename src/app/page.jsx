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
import { projects, skills } from '@/data/data';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

      {/* Skills Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map(({ category, items }) => (
            <Card key={category} className="bg-card shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map(skill => (
                    <li key={skill} className="text-muted-foreground">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        <Card className="shadow-xl">
          <CardContent className="p-8">
            <form
              action="https://formsubmit.co/your@email.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden field for redirect */}
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.com/thanks"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <Textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Type your message..."
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
