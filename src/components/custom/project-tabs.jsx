import {
  TabDes,
  TabHeader,
  TabImage,
  TabImageContainer,
  TabItem,
  TabList,
  TabsProvider,
} from '@/components/ui/image-tabs';
import Link from 'next/link';
import { projectsData } from '@/data/data';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';

function ProjectsTab() {
  return (
    <div className=" w-full  h-full">
      <TabsProvider
        defaultValue={1}
        className="md:grid md:grid-cols-12 items-start justify-center gap-5"
      >
        {/* Image */}
        <TabImageContainer className="md:col-span-7">
          {projectsData.contents.map(content => (
            <TabImage key={content.id} value={content.id}>
              <img
                src={content.img.src}
                alt={content.img.alt}
                className="w-full h-full rounded-md"
              />
            </TabImage>
          ))}
        </TabImageContainer>
        {/* Title */}
        <TabList className="md:col-span-5 ">
          {projectsData.contents.map(content => (
            <TabItem key={content.id} value={content.id}>
              <TabHeader value={content.id}>{content.title}</TabHeader>
              <TabDes value={content.id}>
                <p className="text-muted-foreground">{content.description}</p>
                <div className="flex gap-3">
                  {content.technology.map(tech => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-full text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* Buttons */}
                <div className="flex justify-between items-center gap-5 mt-3">
                  <Button asChild>
                    <Link href={content.liveLink} target="blank">
                      <ExternalLink /> Live Demo
                    </Link>
                  </Button>

                  <Button asChild variant="outline">
                    <Link href={content.githubLink} target="blank">
                      <FaGithub /> View Code
                    </Link>
                  </Button>
                </div>

                <img
                  src={content.img.src}
                  alt={content.img.alt}
                  className="md:hidden block rounded-md"
                />
              </TabDes>
            </TabItem>
          ))}
        </TabList>
      </TabsProvider>
    </div>
  );
}
export default ProjectsTab;
