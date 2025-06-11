import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowUpRight, CirclePlay } from 'lucide-react';
import AnimatePing from '../custom/animate-ping';
import { FiArrowDownCircle } from 'react-icons/fi';
import Link from 'next/link';
import { FaBolt } from 'react-icons/fa6';

const BannerSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 h-full skew-y-12'
        )}
      />
      <div className="relative z-10 text-center max-w-2xl">
        <Badge>
          <AnimatePing /> MERN Stack Developer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Hi! I Am Mehedi A Full Stack Web Developer
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Building sleek, responsive web applications with React, Next.js, and
          Tailwind CSS. I focus on clean UI, accessibility, and performance.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#projects">
              See Projects <FiArrowDownCircle />
            </Link>
          </Button>

          <Link href="mailto:mehedi.hsn.dev@gmail.com" target="_blank">
            <Button size="lg" variant={'outline'}>
              Hire Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
