import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="w-full py-20 px-6 text-center lg:text-left bg-background">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            I’m a passionate front-end developer specializing in building
            beautiful, accessible, and fast web applications using modern
            technologies like React, Tailwind, and Next.js.
          </p>
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
        <div className="flex-1 flex justify-center">
          <Image
            src="/profile.png" // 👉 Replace with your image path
            alt="Your Name"
            width={300}
            height={300}
            className="rounded-full border shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
