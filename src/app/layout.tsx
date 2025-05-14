import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono'; // Assuming this was fixed by installing the package
import './globals.css';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

const geistSans = GeistSans;
const geistMono = GeistMono; // Assuming this was fixed

export const metadata: Metadata = {
  title: 'Mentes Brilhantes - Soluções Inteligentes',
  description: 'Transformando negócios com TI, Inteligência Artificial e Desenvolvimento Web No-Code.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
