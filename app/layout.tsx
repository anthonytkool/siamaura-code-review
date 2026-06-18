import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/globals.css';
import { SERVER_URL } from '@/lib/constants';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import { ClerkProvider } from '@clerk/nextjs';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: `%s | Siam Aura`,
    default: 'Siam Aura | Thai Sacred Arts, Heritage Stories & Private Tours',
  },
  description:
    'Thai sacred arts, heritage stories, private cultural tours, and trusted concierge experiences in Thailand.',
  keywords: [
    'Thai amulets',
    'Thai sacred arts',
    'Thailand private tours',
    'Bangkok private guide',
    'Ayutthaya tour',
    'River Kwai tour',
    'Thai heritage stories',
  ],
  metadataBase: new URL(SERVER_URL),
  verification: {
    google: 'aTA8nJfxNQLfZIZpbolfAA39keBCUY_zVTzFofoC1VM',
    other: {
      'msvalidate.01': ['58B0C03B673EB3812B0122DAD71C51F9'],
    },
  },
  openGraph: {
    title: 'Siam Aura | Thai Sacred Arts, Heritage Stories & Private Tours',
    description:
      'Private cultural tours, Thai sacred arts, heritage stories, and trusted concierge experiences in Thailand.',
    url: 'https://www.siamaura.org',
    siteName: 'Siam Aura',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/siam-aura-og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Siam Aura - Thai Sacred Arts, Heritage Stories & Private Tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siam Aura | Thai Sacred Arts, Heritage Stories & Private Tours',
    description:
      'Private cultural tours, Thai sacred arts, heritage stories, and trusted concierge experiences in Thailand.',
    images: ['/images/siam-aura-og-banner.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <Script
            src='https://www.googletagmanager.com/gtag/js?id=G-8M176QVJWC'
            strategy='afterInteractive'
          />
          <Script id='google-analytics' strategy='afterInteractive'>
            {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8M176QVJWC');
  `}
          </Script>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
