import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import AnimatePing from '../custom/animate-ping';
import { FiArrowDownCircle } from 'react-icons/fi';
import Link from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';
import SlideInFromBottom from '../custom/slide-in-from-bottom';

const BannerSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-60px)] flex items-center justify-center px-6 overflow-hidden">
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
        <SlideInFromBottom>
          <Badge>
            <AnimatePing /> MERN Stack Developer
          </Badge>
        </SlideInFromBottom>

        <SlideInFromBottom delay={0.4}>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Hi! I Am Mehedi A Full Stack Web Developer
          </h1>
        </SlideInFromBottom>

        <SlideInFromBottom delay={0.5}>
          <p className="mt-6 text-[17px] md:text-lg">
            Building sleek, responsive web applications with React, Next.js, and
            Tailwind CSS. I focus on clean UI, accessibility, and performance.
          </p>
        </SlideInFromBottom>

        <SlideInFromBottom delay={0.6}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button size="lg" asChild aria-label="see projects">
              <Link href="#projects">
                See Projects <FiArrowDownCircle />
              </Link>
            </Button>

            <Link href="mailto:mehedi.hsn.dev@gmail.com" target="_blank">
              <Button size="lg" variant={'outline'} aria-label="hire me">
                Hire Me <HiOutlineMail />
              </Button>
            </Link>
          </div>
        </SlideInFromBottom>
      </div>
    </section>
  );
};

export default BannerSection;
