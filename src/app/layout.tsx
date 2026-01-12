import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

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
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        <Header />
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}

