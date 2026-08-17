import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

// NOTE: `alternates.canonical` must NOT be set here. Metadata declared in the root
// layout is inherited by every page, so a canonical set at this level pointed all
// pages at the homepage and told Google they were duplicates of it. Each page
// declares its own canonical instead.
export const metadata: Metadata = {
  metadataBase: new URL('https://www.global-trade.hu'),
  title: 'Global Trade & Production Kft. — Gyártunk. Testreszabunk. Szállítunk.',
  description: 'Fagyasztott pékáru, pizza, snackek és desszertek — ipari méretben, B2B partnereknek.',
  openGraph: {
    title: 'Global Trade & Production Kft.',
    description: 'Frozen bakery, pizza, snacks and desserts — crafted for B2B partners at industrial scale.',
    url: 'https://www.global-trade.hu',
    siteName: 'Global Trade & Production Kft.',
    locale: 'hu_HU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Trade & Production Kft.',
    description: 'Frozen bakery, pizza, snacks and desserts — crafted for B2B partners at industrial scale.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>
        <StructuredData />
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
