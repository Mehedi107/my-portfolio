import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="p-4 sm:py-8">
      <p className="text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Mehedi Hasan All rights reserved.
      </p>
    </footer>
  );
};
