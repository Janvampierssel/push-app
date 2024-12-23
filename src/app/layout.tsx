import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import NavBar from '@/components/NavBar';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Push App',
  description: 'Challenge and push your friends through push-ups',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'w-screen min-h-screen h-full bg-background font-sans antialiased flex flex-col',
          fontSans.variable
        )}
      >
        <NavBar />
        <div className="flex-grow">{children}</div>
        {/* Background Radial Gradient */}
        <div className="absolute h-screen w-screen overflow-hidden pointer-events-none">
          <div className="background-gradient-radial h-full absolute left-0 right-0 mx-auto top-1/3 -z-10 pointer-events-none"></div>
        </div>
      </body>
    </html>
  );
}
