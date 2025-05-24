'use client';

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="mx-auto px-4 max-w-7xl space-y-10">
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a front-end developer with a strong passion for building modern,
            user-centric web applications. My journey started with HTML, CSS,
            and JavaScript, and has grown into creating responsive, accessible
            interfaces using React, Tailwind CSS, and Next.js. I’ve also
            explored full-stack development using the MERN stack and built
            several real-world projects like task managers, product hunt clones,
            and language learning apps. I focus on writing clean, scalable code
            and continuously learning new tools to improve my workflow.
          </p>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tech Stack & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              'React.js',
              'Next.js',
              'Tailwind CSS',
              'ShadCN UI',
              'Node.js',
              'Express.js',
              'MongoDB',
              'Firebase',
              'Git & GitHub',
              'Vite',
              'Valentina Studio',
              'Stripe Integration',
            ].map(tool => (
              <Card key={tool}>
                <CardContent className="p-4 text-center text-sm font-medium text-muted-foreground">
                  {tool}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resume Button */}
        <div>
          <Button variant="default">Download Resume</Button>
        </div>
      </div>
    </section>
  );
}
