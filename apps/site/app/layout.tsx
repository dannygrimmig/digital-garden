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
      <body>{children}</body>
    </html>
  );
}
