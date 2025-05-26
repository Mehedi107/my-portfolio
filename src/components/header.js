import Link from 'next/link';
import MobileMenu from './mobile-menu';
import NavLink from './nav-link';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-1 border-dashed">
      <div className="max-w-6xl mx-auto px-4 md:px-10 flex items-center justify-between h-16 border-x-1 border-dashed">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hidden md:block">
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
        {/* Theme Toggler Button */}
        <ThemeToggle />
      </div>
    </header>
  );
}
