import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import NavLink from './nav-link';
import SocialLinks from './social-links';

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-6">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mt-4">
          <nav className="flex flex-col gap-4 text-base text-center">
            <NavLink href="/#hero">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#">Contact</NavLink>
          </nav>
        </div>
        <SheetFooter className={'flex items-center'}>
          <SocialLinks />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
