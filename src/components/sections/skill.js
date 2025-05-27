'use client';
import { skills } from '@/data/data';
import { Card, CardContent } from '../ui/card';
import { BorderBeam } from '../magicui/border-beam';
import { MagicCard } from '@/components/magicui/magic-card';
import { useTheme } from 'next-themes';

export default function SkillSection() {
  const { theme } = useTheme();
  return (
    <section>
      <div className="wrapper">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid gap-8 md:grid-cols-3 items-start">
          {skills.map(({ id, category, items, animationDelay }) => (
            <Card
              key={id}
              className="p-0 max-w-sm w-full shadow-none border-none"
            >
              <MagicCard
                gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
                className="p-0"
              >
                <CardContent>
                  <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {items.map(skill => (
                      <li key={skill} className="text-muted-foreground">
                        - {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {/* <BorderBeam duration={8} size={100} delay={animationDelay} /> */}
              </MagicCard>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
