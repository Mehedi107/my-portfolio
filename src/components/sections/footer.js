import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t-1 border-dashed">
      <p className="p-4 sm:py-8 text-center text-muted-foreground text-sm border-x-1 border-dashed max-w-6xl mx-auto">
        © {new Date().getFullYear()} Mehedi Hasan All rights reserved.
      </p>
    </footer>
  );
};
