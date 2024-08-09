import './global.css';
import { Poppins } from 'next/font/google';
import { NavBar } from './ui/NavBar';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Danny Grimmig | Blog',
  description: 'Digital Garden created using nx and Next.js',
  metadataBase: new URL('https://blog.dannygrimmig.com'),
  openGraph: {
    images: '/opengraph-image.png',
  },
};

const poppins = Poppins({
  weight: ['200', '400', '600'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-800`}>
        <NavBar />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
