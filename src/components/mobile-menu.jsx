import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import NavLink from './nav-link';

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="p-6 h-3/4">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mt-4">
          <nav className="flex flex-col gap-4 text-base text-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Projects</NavLink>
            <NavLink href="#">Contact</NavLink>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
