import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { FaGithub } from 'react-icons/fa';
import { Lens } from './../magicui/lens';

export const ProjectCard = ({ content }) => {
  const { id, img, title, technology, description, liveLink, githubLink } =
    content;
  return (
    <Card key={id} className=" max-w-2xs shadow-none">
      <CardHeader>
        <Lens
          zoomFactor={2}
          lensSize={150}
          isStatic={false}
          ariaLabel="Zoom Area"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={300}
            height={200}
            className="w-[300px] h-[200px] object-cover"
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {technology.map(tech => (
            <Badge key={tech} variant="outline" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="space-x-4 flex justify-between items-center">
        <Button asChild>
          <Link href={liveLink} target="blank">
            <ExternalLink /> Live Demo
          </Link>
        </Button>

        <Button asChild variant="outline">
          <Link href={githubLink} target="blank">
            <FaGithub /> View Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
