'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function AboutSection() {
  return (
    <section>
      <div className="wrapper">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-lg leading-relaxed  max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          I’m a Frontend Developer with a passion for building sleek, responsive
          web applications using
          <span className="font-medium text-foreground"> React</span>,
          <span className="font-medium text-foreground"> Next.js</span>, and
          <span className="font-medium text-foreground"> Tailwind CSS</span>. I
          focus on clean UI, accessibility, and performance. Beyond the code, I
          love solving problems and learning new things every day.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Tech Stack</h3>
              <p className="text-muted-foreground mt-2">
                React, Next.js, Tailwind, Node.js
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Experience</h3>
              <p className="text-muted-foreground mt-2">
                Built several full-stack projects with modern tools
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Soft Skills</h3>
              <p className="text-muted-foreground mt-2">
                Team player, quick learner, great communicator
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button variant="default">
            Download Resume <Download />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
