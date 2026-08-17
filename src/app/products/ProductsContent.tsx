'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { useTranslation, useLanguage } from '@/lib/i18n';
import { products } from '@/lib/products';
import { ProductCategory } from '@/types/product';
import { Check } from 'lucide-react';
import { images } from '@/lib/images';

type Filter = 'all' | ProductCategory;

const filters: { key: Filter; labelKey: string }[] = [
  { key: 'all', labelKey: 'cat.all' },
  { key: 'pizza', labelKey: 'cat.pizza' },
  { key: 'bakery', labelKey: 'cat.bakery' },
  { key: 'desserts', labelKey: 'cat.desserts' },
  { key: 'wellness', labelKey: 'cat.wellness' },
];

const categoryDescKeys: Partial<Record<ProductCategory, string>> = {
  pizza: 'cat.pizza.desc',
  bakery: 'cat.bakery.desc',
  desserts: 'cat.desserts.desc',
};

const wellnessBenefits = [
  'dia.protein',
  'dia.amino',
  'dia.carbs',
  'dia.fiber',
  'dia.vitamins',
  'dia.minerals',
  'dia.calories',
] as const;

export default function ProductsContent() {
  const t = useTranslation();
  const { lang } = useLanguage();
  const [active, setActive] = useState<Filter>('all');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as Filter;
    if (['pizza', 'bakery', 'desserts', 'wellness'].includes(hash)) {
      setActive(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const filtered =
    active === 'all'
      ? products
      : active === 'wellness'
      ? products.filter((p) => p.category === 'wellness' || p.isDiaWellness)
      : products.filter((p) => p.category === active);

  const groupedByCategory =
    active === 'all'
      ? (['pizza', 'bakery', 'desserts', 'wellness'] as ProductCategory[])
      : active === 'wellness'
      ? ([...new Set(filtered.map((p) => p.category))] as ProductCategory[])
      : [active as ProductCategory];

  return (
    <>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            {lang === 'hu' ? 'Termékeink' : 'Our Products'}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Bake-Off · Ready-to-Serve · {lang === 'hu' ? 'Saját márka' : 'Private Label'}
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === f.key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {t(f.labelKey as any)}
              </button>
            ))}
          </div>

          {/* Products by category */}
          {groupedByCategory.map((cat) => {
            const catProducts = filtered.filter((p) => p.category === cat);
            if (catProducts.length === 0) return null;

            return (
              <div key={cat} id={cat} className="mb-16 scroll-mt-24">
                {cat === 'wellness' ? (
                  <div className="wellness-gradient rounded-lg p-8 mb-8">
                    <img src={images.diaWellness.src ?? images.diaWellness} alt="Dia-Wellness" className="w-16 h-auto mb-4" />
                    <h2 className="text-2xl font-bold text-wellness-foreground mb-3">
                      {t('products.wellness.headline')}
                    </h2>
                    <p className="text-wellness-foreground/80 mb-4">{t('products.wellness.body')}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {wellnessBenefits.map((key) => (
                        <div key={key} className="flex items-center gap-2 text-wellness-foreground text-sm">
                          <Check size={16} className="shrink-0" />
                          <span>{t(key)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{t(`cat.${cat}` as any)}</h2>
                    {categoryDescKeys[cat] && (
                      <p className="text-muted-foreground mb-6">{t(categoryDescKeys[cat] as any)}</p>
                    )}
                  </>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Bottom CTA */}
          <div className="section-dark rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-primary-foreground mb-3">{t('products.cta.headline')}</h2>
            <p className="text-primary-foreground/70 mb-6">{t('products.cta.body')}</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-brand-yellow text-brand-dark font-bold hover:brightness-110 transition-all"
            >
              {t('products.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
