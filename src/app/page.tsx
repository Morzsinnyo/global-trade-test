import { pageMetadata } from '@/lib/seo';
import HomeContent from './HomeContent';

export const metadata = pageMetadata({
  title: 'Global Trade & Production Kft. — Gyártunk. Testreszabunk. Szállítunk.',
  description:
    'Fagyasztott pékáru, pizza, snackek és desszertek — ipari méretben, B2B partnereknek. Magyar tulajdonú gyártó, HACCP tanúsítvánnyal.',
  path: '/',
});

export default function Page() {
  return <HomeContent />;
}
