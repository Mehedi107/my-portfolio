import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/sections/footer';
import { NavigationBar } from '@/components/custom/navbar';
// import { cn } from '@/lib/utils';
// import Preloader from '@/components/custom/preloader';
// import { ScrollProgress } from '@/components/magicui/scroll-progress';
// import { Background } from '@/components/custom/backgroud';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Mehedi Hasan',
  description: 'A portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased relative`}>
        {/* <Preloader /> */}

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <ScrollProgress /> */}
          <NavigationBar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
