import { Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/sections/footer';
import { NavigationBar } from '@/components/custom/navbar';
import Preloader from '@/components/custom/preloader';

const geistSans = Geist({
  variable: '--font-geist-sans',
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
        <Preloader />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
