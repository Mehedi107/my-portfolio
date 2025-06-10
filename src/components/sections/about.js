'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Download } from 'lucide-react';
import { ConfettiButton } from '../magicui/confetti';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrapper flex flex-col md:flex-row items-center gap-5">
        {/* left content */}
        <div className="w-full md:w-1/2 space-y-5">
          <h2>
            <Badge className="rounded-full" variant="secondary">
              About
            </Badge>
          </h2>

          <h3 className="font-bold text-3xl md:5xl">
            Passionate about creating impactful web experiences
          </h3>

          <p className="text-muted-foreground leading-relaxed max-w-3xl">
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
                <Download /> Download CV
              </Link>
            </ConfettiButton>
          </div>
        </div>
        {/* right content */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            width={300}
            height={300}
            src="/about2.svg"
            alt="a laptop with coffee mug"
          />
          {/* <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Image width={350} height={350} src="/about2.svg" alt="About Me" />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
