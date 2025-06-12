'use client';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';
import { Download } from 'lucide-react';
import { ConfettiButton } from '../magicui/confetti';
import Link from 'next/link';
import Image from 'next/image';
import SlideInFromBottom from '../custom/slide-in-from-bottom';
import SectionHeader from '../custom/section-header';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrapper grid grid-cols-12 gap-5">
        {/* left content */}
        <div className="col-span-12 md:col-span-6 lg:col-span-8 space-y-5">
          <SectionHeader
            section={'About'}
            title={'Passionate about creating impactful web experiences'}
            description={
              'I’m a Frontend Developer with a passion for building sleek, responsive web applications using React, Next.js, and Tailwind CSS. I focus on clean UI, accessibility, and performance. Beyond the code, I love solving problems and learning new things every day'
            }
          />

          <SlideInFromBottom delay={0.6}>
            <div className="relative space-x-4 space-y-4 ">
              <Button asChild aria-label="view github repo">
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
          </SlideInFromBottom>
        </div>
        {/* right content */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 justify-self-center">
          <SlideInFromBottom>
            <Image
              width={300}
              height={300}
              src="/about.webp"
              alt="a laptop with coffee mug"
              priority={false}
              loading="lazy"
            />
          </SlideInFromBottom>
        </div>
      </div>
    </section>
  );
}
