import Link from 'next/link';
import './global.css';
import { NameReveal } from './ui/DGHover';
import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'Danny Grimmig | Blog',
  description: 'Digital Garden created using nx and Next.js',
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
      <body className={`${poppins.className}`}>
        <nav className="bg-white flex border-b px-4 py-2 sticky top-0 z-10">
          <div className="flex gap-4 items-center">
            <NameReveal />
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/articles">
              <p>Articles</p>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
