import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
});

export const metadata: Metadata = {
  title: 'Varsha Bansal',
  description: 'Independent journalist based in Los Angeles. Writing at the intersection of Technology, AI and Humans.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body className="min-h-screen bg-white antialiased font-serif">
        <Header />
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}

