import heroFactoryImg from '@/assets/hero-factory.jpg';
import diaWellnessImg from '@/assets/dia-wellness.webp';
import catPizzaImg from '@/assets/cat-pizza.webp';
import catBakeryImg from '@/assets/cat-bakery.jpg';
import catDessertsImg from '@/assets/cat-desserts.webp';
import catWellnessImg from '@/assets/cat-wellness.jpg';
import catWellnessBgImg from '@/assets/cat-wellness-bg.webp';
import logoImg from '@/assets/logo.webp';

// Extract .src for use in regular <img> tags (Next.js static imports return StaticImageData)
export const images = {
  hero: (heroFactoryImg as any).src ?? heroFactoryImg,
  diaWellness: (diaWellnessImg as any).src ?? diaWellnessImg,
  categoryPizza: (catPizzaImg as any).src ?? catPizzaImg,
  categoryBakery: (catBakeryImg as any).src ?? catBakeryImg,
  categoryDesserts: (catDessertsImg as any).src ?? catDessertsImg,
  categoryWellness: (catWellnessImg as any).src ?? catWellnessImg,
  categoryWellnessBg: (catWellnessBgImg as any).src ?? catWellnessBgImg,
  logo: (logoImg as any).src ?? logoImg,
  contactBalint: '',
  contactAkos: '',
};
