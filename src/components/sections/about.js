'use client';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';
import { Download } from 'lucide-react';
import { ConfettiButton } from '../magicui/confetti';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrapper grid grid-cols-12 gap-5">
        {/* left content */}
        <div className="col-span-12 md:col-span-6 lg:col-span-8 space-y-5">
          <h2>
            <Badge variant="secondary">About</Badge>
          </h2>

          <h3 className="font-bold text-4xl md:text-5xl">
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
          <div className="relative space-x-4 space-y-4 ">
            <Button asChild>
              <Link href="https://github.com/Mehedi107">
                <FaGithub /> View Github
              </Link>
            </Button>
            <ConfettiButton variant="outline" asChild>
              <Link href="https://drive.google.com/uc?export=download&id=14q4w1IBRXpYODygmm006Vwmw6_-UfmcE">
                <Download /> Download CV
              </Link>
            </ConfettiButton>
          </div>
        </div>
        {/* right content */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 justify-self-center">
          <Image
            width={300}
            height={300}
            src="/about.webp"
            alt="a laptop with coffee mug"
            priority={false}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
