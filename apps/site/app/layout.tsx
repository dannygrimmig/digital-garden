import './global.css';
import { Poppins } from 'next/font/google';
import { NavBar } from './ui/NavBar';

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
      <body className={`${poppins.className} text-slate-800`}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
