import { pageMetadata } from '@/lib/seo';
import AboutContent from './AboutContent';

export const metadata = pageMetadata({
  title: 'Rólunk — magyar tulajdonú fagyasztott élelmiszergyártó | Global Trade & Production Kft.',
  description:
    'Füzesabonyi üzemünkben korszerű technológiával, HACCP tanúsítvány mellett gyártunk fagyasztott késztermékeket nagykereskedelmi, HoReCa és kiskereskedelmi partnereknek.',
  path: '/about',
});

export default function Page() {
  return <AboutContent />;
}
