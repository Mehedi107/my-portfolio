import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ShineBorder } from '../magicui/shine-border';
import { AuroraText } from '../magicui/aurora-text';
import Link from 'next/link';
import AnimatePing from '../custom/animate-ping';

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-10 min-h-[calc(100vh-70px)] py-10 sm:py-20">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Hi! I'm <AuroraText>Mehedi</AuroraText> 👋
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            Building sleek, responsive web applications with
            <span className="font-medium text-foreground"> React</span>,
            <span className="font-medium text-foreground"> Next.js</span>, and
            <span className="font-medium text-foreground"> Tailwind CSS</span>.
            I focus on clean UI, accessibility, and performance.
          </p>
          {/* Buttons */}
          <div className="flex flex-row items-center gap-4 justify-center lg:justify-start mt-10">
            <Button size="xl" asChild className="rounded-full">
              <Link href="#projects">See Projects</Link>
            </Button>
            <Button size="xl" variant={'outline'} className="rounded-full">
              <AnimatePing />
              Hire Me
            </Button>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center ">
          <div className="h-72 w-72 rounded-full border shadow-lg relative overflow-hidden">
            <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
            <Image
              src="/avatar.png"
              alt="Your Name"
              width={280}
              height={280}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
