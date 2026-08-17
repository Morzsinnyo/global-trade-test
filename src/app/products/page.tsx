import { pageMetadata } from '@/lib/seo';
import ProductsContent from './ProductsContent';

export const metadata = pageMetadata({
  title: 'Termékeink — fagyasztott pizza, pékáru és desszert | Global Trade & Production Kft.',
  description:
    'Fagyasztott pizza és snack, pékáru, desszertek és Dia-Wellness termékek nagykereskedelmi, HoReCa és kiskereskedelmi partnereknek — saját márkás gyártással.',
  path: '/products',
});

export default function Page() {
  return <ProductsContent />;
}
