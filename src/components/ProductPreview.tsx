'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';
import { images } from '@/lib/images';

const ProductCategoryCard = ({
  image,
  label,
  to,
  isWellness,
}: {
  image?: string;
  label: string;
  to: string;
  isWellness?: boolean;
}) => (
  <Link
    href={to}
    className={`group relative overflow-hidden rounded-lg aspect-[4/3] block ${isWellness ? 'wellness-gradient' : ''}`}
  >
    <img
      src={isWellness ? images.categoryWellnessBg : image}
      alt={label}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-brand-dark/60 group-hover:bg-brand-dark/40 transition-colors" />
    {isWellness && (
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <img
          src={images.diaWellness}
          alt="Dia-Wellness"
          className="max-w-[140px] h-auto drop-shadow-lg"
          loading="lazy"
        />
      </div>
    )}
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <h3 className="text-lg font-bold text-primary-foreground">{label}</h3>
      <div className="h-0.5 w-8 bg-brand-yellow mt-2 group-hover:w-16 transition-all duration-300" />
    </div>
  </Link>
);

const ProductPreview = () => {
  const t = useTranslation();

  const categories = [
    { image: images.categoryPizza, label: t('cat.pizza'), to: '/products#pizza' },
    { image: images.categoryBakery, label: t('cat.bakery'), to: '/products#bakery' },
    { image: images.categoryDesserts, label: t('cat.desserts'), to: '/products#desserts' },
    { label: t('cat.wellness'), to: '/products#wellness', isWellness: true },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <ProductCategoryCard key={cat.to} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
