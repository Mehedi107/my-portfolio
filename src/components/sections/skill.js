import { skills } from '@/data/data';
import { Card, CardContent } from '../ui/card';

export default function SkillSection() {
  return (
    <section>
      <div className="wrapper">
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
      </div>
    </section>
  );
}
