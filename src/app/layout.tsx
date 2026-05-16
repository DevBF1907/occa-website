import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OCCA | Future of Creativity',
  description: 'Open Creative Community Alliance - Um ecossistema vivo de inovação e cultura, operando na interseção entre tecnologia e comunidade em Olinda, Pernambuco.',
  openGraph: {
    title: 'OCCA | Future of Creativity',
    description: 'Open Creative Community Alliance - Inovação e cultura em Olinda.',
    url: 'https://occa.space',
    siteName: 'OCCA Space',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCCA | Future of Creativity',
    description: 'Open Creative Community Alliance - Inovação e cultura em Olinda.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <div className="scan-line" />
      </body>
    </html>
  );
}
