'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Globe } from '../magicui/globe';

export default function AboutSection() {
  return (
    <section>
      <div className="wrapper flex flex-col md:flex-row items-center">
        {/* left content */}
        <div className="w-full md:w-1/2">
          <motion.h2
            className={buttonVariants({ variant: 'outline' })}
            initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg leading-relaxed  max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            I’m a Frontend Developer with a passion for building sleek,
            responsive web applications using
            <span className="font-medium text-foreground"> React</span>,
            <span className="font-medium text-foreground"> Next.js</span>, and
            <span className="font-medium text-foreground"> Tailwind CSS</span>.
            I focus on clean UI, accessibility, and performance. Beyond the
            code, I love solving problems and learning new things every day.
          </motion.p>

          <div>
            <Button variant="default">
              Download Resume <Download />
            </Button>
          </div>
        </div>
        {/* right content */}
        <div className="w-full md:w-1/2">
          <Globe className="relative" />
        </div>
      </div>
    </section>
  );
}
