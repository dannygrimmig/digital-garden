import './global.css';

export const metadata = {
  title: 'Welcome to site',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-mono">{children}</body>
    </html>
  );
}
