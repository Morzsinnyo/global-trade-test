'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';

const HeroSection = () => {
  const t = useTranslation();

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <video
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {t('hero.headline')}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            {t('hero.subheadline')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 rounded-md bg-brand-yellow text-brand-dark font-bold hover:brightness-110 transition-all"
            >
              {t('hero.cta.products')}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md border-2 border-primary-foreground/40 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-all"
            >
              {t('hero.cta.contact')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
