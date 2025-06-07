import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function NavLink({ href, children, className }) {
  return (
    <Link
      href={href}
      className={cn(
        'text-muted-foreground hover:text-foreground transition-colors font-medium',
        className
      )}
    >
      {children}
    </Link>
  );
}
