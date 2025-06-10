'use client';
import { skillsData } from '@/data/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Badge } from '../ui/badge';

export default function SkillSection() {
  return (
    <section id="skills">
      <div className="wrapper">
        {/* title content */}
        <div className="space-y-4 mb-10">
          <Badge className="rounded-full" variant="secondary">
            Skills
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold">My Expertise</h2>

          <p className="text-muted-foreground">
            A comprehensive overview of the technologies and tools I master,
            driving my passion for web development.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {skillsData.map(({ skills, category, id }) => (
            <Card key={id} className="relative sm:max-w-md">
              <CardHeader>
                <CardTitle>
                  {' '}
                  <span>{category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="flex gap-3 flex-wrap">
                  {skills.map(skill => (
                    <Button key={skill.id} variant={'secondary'}>
                      <Image
                        src={`/icon/${skill.img.src}`}
                        alt={skill.img.alt}
                        width={15}
                        height={15}
                      />
                      <span>{skill.name}</span>
                    </Button>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
