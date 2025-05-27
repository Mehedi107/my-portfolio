import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { SocialLinkDock } from '../social';
import { ShineBorder } from '../magicui/shine-border';
import { AuroraText } from '../magicui/aurora-text';

export default function HeroSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 ">
          {/* Left: Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Hi, I'm <AuroraText>Mehedi</AuroraText> 👋
            </h1>
            <p className="text-muted-foreground text-lg">
              I’m a passionate front-end developer specializing in building
              beautiful, accessible, and fast web applications using modern
              technologies like React, Tailwind, and Next.js.
            </p>
            <SocialLinkDock />
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-start">
              <Button size="lg">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
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
      </div>
    </section>
    // <section className="w-full  px-6 text-center lg:text-left bg-background">
    //   <div className="max-w-6xl mx-auto h-full border-x-1 border-dashed">

    //   </div>
    // </section>
  );
}
