import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Preloader from '@/components/preloader';
import { Footer } from '@/components/sections/footer';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import { Background } from '@/components/backgroud';
import Header from '@/components/sections/header';

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
          {/* <Background /> */}
          <div className="pt-16 m-0">
            <Header />
          </div>
          <ScrollProgress />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
