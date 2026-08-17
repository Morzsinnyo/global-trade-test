import { pageMetadata } from '@/lib/seo';
import ContactContent from './ContactContent';

export const metadata = pageMetadata({
  title: 'Kapcsolat — B2B érdeklődés | Global Trade & Production Kft.',
  description:
    'Vegye fel velünk a kapcsolatot fagyasztott termékek gyártásával és saját márkás fejlesztéssel kapcsolatban. 3390 Füzesabony, Pusztaszikszó.',
  path: '/contact',
});

export default function Page() {
  return <ContactContent />;
}
