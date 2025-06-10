import Link from 'next/link';
import SocialLinks from '../custom/social-links';

export const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-5 border-t p-5">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Mehedi Hasan. All rights reserved.
        </p>

        <SocialLinks />
      </div>
    </footer>
  );
};
