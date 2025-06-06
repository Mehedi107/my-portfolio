'use client';
import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';
import { useEffect, useReducer, useState } from 'react';
import MobileMenu from '../mobile-menu';
import NavLink from '../nav-link';
import SocialLinks from '../social-links';
import Logo from '../logo';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollTop = useReducer(0);

  useEffect(() => {
    const handleScroll = () => {
      var { scrollY } = window;
      if (scrollY > lastScrollTop.current) {
        setIsVisible(false);
      } else if (scrollY < lastScrollTop.current) {
        setIsVisible(true);
      } // else was horizontal scroll
      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`navbar fixed top-0 left-0 z-50 w-full h-16 transition duration-300 -translate-y-[72px] backdrop-blur-sm border-b-1 ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-10 flex items-center justify-between h-16">
        {/* Start */}
        <div>
          <Link href="#hero" className="hidden md:block">
            <Logo />
          </Link>
          <MobileMenu />
        </div>

        {/* Center */}
        <div>
          <Link href="#hero" className="md:hidden">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink href="/#hero">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>

        {/* End */}
        <div className="space-x-4 flex justify-end items-center">
          <div className="hidden md:block">
            <SocialLinks />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
