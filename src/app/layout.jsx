import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/header';
import { ThemeProvider } from 'next-themes';
import Preloader from '@/components/preloader';
import { Footer } from '@/components/sections/footer';

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
