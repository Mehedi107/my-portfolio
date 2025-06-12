'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  ThemeToggler,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import { Separator } from '../ui/separator';
import Link from 'next/link';

export function NavigationBar() {
  const navItems = [
    {
      name: 'Home',
      link: '#',
    },
    {
      name: 'About',
      link: '#about',
    },

    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'Skills',
      link: '#skills',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <ThemeToggler className={'border p-2.5 rounded-full'} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <Separator />
          <ThemeToggler />
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
