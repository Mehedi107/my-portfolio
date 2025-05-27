import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/header';
import { ThemeProvider } from 'next-themes';
import Preloader from '@/components/preloader';
import { Footer } from '@/components/sections/footer';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import { Pointer } from '@/components/magicui/pointer';
import { Background } from '@/components/backgroud';

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* <Preloader /> */}

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background />
          <NavBar />
          <ScrollProgress />
          <main>{children}</main>
          <Footer />
          {/* <Pointer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" className="fill-purple-500" />
              <circle cx="12" cy="12" r="5" className="fill-white" />
            </svg>
          </Pointer> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
