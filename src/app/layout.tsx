import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  title: 'OCCA — Olinda Creative Community Action | Olinda, PE',
  description: 'Um ecossistema que transforma o ser — Inovação, cultura, tecnologia e sustentabilidade em Olinda, Pernambuco.',
  openGraph: {
    title: 'OCCA — Olinda Creative Community Action | Olinda, PE',
    description: 'Um ecossistema que transforma o ser — Inovação, cultura, tecnologia e sustentabilidade em Olinda, Pernambuco.',
    url: 'https://occa.space',
    siteName: 'OCCA Space',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OCCA — Olinda Creative Community Action | Olinda, PE',
    description: 'Um ecossistema que transforma o ser — Inovação, cultura, tecnologia e sustentabilidade em Olinda, Pernambuco.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';}if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
