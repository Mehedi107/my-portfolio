'use client';
import { skillsData } from '@/data/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ShineBorder } from '../magicui/shine-border';
import Image from 'next/image';
import { AnimatedShinyText } from '../magicui/animated-shiny-text';
import { SparklesText } from '../magicui/sparkles-text';

export default function SkillSection() {
  return (
    <section id="skills">
      <div className="wrapper">
        <h2 className="text-4xl font-bold text-center mb-12">
          {/* <AnimatedShinyText>Tech Stack</AnimatedShinyText> */}
          <SparklesText>Tech Stack</SparklesText>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {skillsData.map(({ skills, category, id }) => (
            <Card key={id} className="relative sm:max-w-md">
              {/* <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} /> */}
              <CardHeader>
                <CardTitle>
                  {' '}
                  <AnimatedShinyText className="">
                    <span>{category}</span>
                  </AnimatedShinyText>
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
