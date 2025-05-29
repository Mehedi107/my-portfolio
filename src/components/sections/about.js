'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Globe } from '../magicui/globe';
import { ConfettiButton } from '../magicui/confetti';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrapper flex flex-col md:flex-row items-center">
        {/* left content */}
        <div className="w-full md:w-1/2">
          <h2 className={buttonVariants({ variant: 'outline' })}>About</h2>

          <p className="text-muted-foreground text-lg leading-relaxed  max-w-3xl">
            I’m a Frontend Developer with a passion for building sleek,
            responsive web applications using
            <span className="font-medium text-foreground"> React</span>,
            <span className="font-medium text-foreground"> Next.js</span>, and
            <span className="font-medium text-foreground"> Tailwind CSS</span>.
            I focus on clean UI, accessibility, and performance. Beyond the
            code, I love solving problems and learning new things every day.
          </p>
          <div className="relative mt-8">
            <ConfettiButton>
              Download Resume <Download />
            </ConfettiButton>
          </div>
        </div>
        {/* right content */}
        <div className="w-full md:w-1/2">
          {/* <Globe className="relative" /> */}
        </div>
      </div>
    </section>
  );
}
