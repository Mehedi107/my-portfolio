import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <p className="p-4 sm:py-8 text-center text-muted-foreground text-sm max-w-6xl mx-auto">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};
