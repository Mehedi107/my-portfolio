'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Download, Github } from 'lucide-react';
import { ConfettiButton } from '../magicui/confetti';
import { Badge } from '../ui/badge';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrapper flex flex-col md:flex-row items-center">
        {/* left content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2>
            <Badge className="rounded-full" variant="secondary">
              About
            </Badge>
          </h2>

          <h3 className="font-bold text-4xl md:5xl">
            Passionate about creating impactful web experiences
          </h3>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            I’m a Frontend Developer with a passion for building sleek,
            responsive web applications using
            <span className="font-medium text-foreground"> React</span>,
            <span className="font-medium text-foreground"> Next.js</span>, and
            <span className="font-medium text-foreground"> Tailwind CSS</span>.
            I focus on clean UI, accessibility, and performance. Beyond the
            code, I love solving problems and learning new things every day.
          </p>
          <div className="relative space-x-4">
            <Button className="rounded-full" asChild>
              <Link href="https://github.com/Mehedi107">
                <FaGithub /> View Github
              </Link>
            </Button>
            <ConfettiButton className="rounded-full" variant="outline" asChild>
              <Link href="https://drive.google.com/uc?export=download&id=14q4w1IBRXpYODygmm006Vwmw6_-UfmcE">
                <Download /> Download Resume
              </Link>
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
