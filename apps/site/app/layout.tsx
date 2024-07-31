import Link from 'next/link';
import './global.css';

export const metadata = {
  title: 'Danny Grimmig | Blog',
  description: 'Digital Garden created using nx and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white flex border-b p-4 sticky top-0 z-10">
          <div className="flex gap-4 font-thin items-center">
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
