import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Logo() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <Link id="logo" href="/" className="text-xl font-bold hidden md:block">
      <Image
        src={isDark ? 'logo-light.svg' : 'logo-dark.svg'}
        alt="logo"
        width={30}
        height={30}
      />
    </Link>
  );
}
