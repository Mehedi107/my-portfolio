import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectCard = ({
  name,
  image,
  techStack,
  description,
  liveLink,
  githubLink,
  slug,
}) => {
  return (
    <Card className="w-full max-w-md shadow-xl hover:scale-[1.01] transition-transform">
      <CardHeader>
        <Image
          src={image}
          alt={name}
          width={800}
          height={400}
          className="rounded-lg"
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <Badge key={idx} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-wrap gap-2">
        <Link href={liveLink} target="_blank">
          <Button variant="link" size="sm" className="flex gap-1">
            <ExternalLink size={16} />
            Live
          </Button>
        </Link>
        <Link href={githubLink} target="_blank">
          <Button variant="link" size="sm" className="flex gap-1">
            <Github size={16} />
            Code
          </Button>
        </Link>
        <Link href={`/projects/${slug}`}>
          <Button size="sm" className="ml-auto">
            View More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
