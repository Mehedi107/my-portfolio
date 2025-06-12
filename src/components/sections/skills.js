import { skillsData } from '@/data/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Image from 'next/image';
import SlideInFromBottom from '../custom/slide-in-from-bottom';
import SectionHeader from '../custom/section-header';

export default function SkillSection() {
  return (
    <section id="skills">
      <div className="wrapper">
        {/* title content */}
        <SectionHeader
          section={'Skills'}
          title={'My Expertise'}
          description={
            'A comprehensive overview of the technologies and tools I master, driving my passion for web development.'
          }
        />

        {/* Skill cards */}

        <SlideInFromBottom>
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
                      <li key={skill.id}>
                        <Button
                          variant={'secondary'}
                          aria-label="technology name"
                        >
                          <Image
                            src={`/icon/${skill.img.src}`}
                            alt={skill.img.alt}
                            width={15}
                            height={15}
                          />
                          <span>{skill.name}</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </SlideInFromBottom>
      </div>
    </section>
  );
}
