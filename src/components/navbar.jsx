import Link from 'next/link';
import MobileMenu from './mobile-menu';
import NavLink from './nav-link';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  return (
    <header className="w-full h-16 px-4 border-b flex items-center justify-between  sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-primary hidden md:block">
        Logo
      </Link>
      {/* Mobile Nav (Sheet) */}
      <MobileMenu />

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <NavLink href="/">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">Contact</NavLink>
      </nav>

      <ThemeToggle />
    </header>
  );
}
