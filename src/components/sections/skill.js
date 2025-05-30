'use client';
import { skills, skillsData } from '@/data/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { BorderBeam } from '../magicui/border-beam';
import { MagicCard } from '@/components/magicui/magic-card';
import { useTheme } from 'next-themes';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ShinyButton } from '../magicui/shiny-button';
import { RainbowButton } from '../magicui/rainbow-button';
import { ShineBorder } from '../magicui/shine-border';

export default function SkillSection() {
  const { theme } = useTheme();

  console.log(skillsData);

  return (
    <section id="skills">
      <div className="wrapper">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technology Stack
        </h2>

        <div className="space-y-5">
          {skillsData.map(({ skills, category, id }) => (
            <Card key={id} className="relative ">
              <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex gap-3 flex-wrap">
                  {skills.map(skill => (
                    <ShinyButton key={skill.id}>{skill.name}</ShinyButton>
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
