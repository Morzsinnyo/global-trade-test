'use client';

import DiaWellnessSection from '@/components/DiaWellnessSection';
import CertificationBadge from '@/components/CertificationBadge';
import { useTranslation, useLanguage } from '@/lib/i18n';
import Link from 'next/link';
import {
  Settings,
  RefreshCw,
  Tag,
  Users,
  Truck,
  ShoppingCart,
  Building2,
  Factory,
} from 'lucide-react';

import aboutFounders from '@/assets/about-founders.webp';
import aboutEvent from '@/assets/akos.webp';
import aboutDistribution from '@/assets/about-distribution.webp';
import aboutProduction from '@/assets/about-production.webp';
import aboutWarehouse from '@/assets/about-warehouse.webp';

const offerings = [
  { key: 'about.offer.flexible' as const, icon: Settings },
  { key: 'about.offer.changeover' as const, icon: RefreshCw },
  { key: 'about.offer.privatelabel' as const, icon: Tag },
  { key: 'about.offer.development' as const, icon: Users },
];

const capabilities = ['prod.bakeoff', 'prod.readytoserve', 'prod.custom', 'prod.packaging'] as const;

const segments = [
  { key: 'about.segment.horeca' as const, icon: Building2 },
  { key: 'about.segment.wholesale' as const, icon: Truck },
  { key: 'about.segment.retail' as const, icon: ShoppingCart },
  { key: 'about.segment.industrial' as const, icon: Factory },
];

export default function About() {
  const t = useTranslation();
  const { lang } = useLanguage();

  return (
    <>
      {/* Story — image LEFT, text RIGHT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src={aboutFounders.src}
                alt="Global Trade & Production"
                className="w-full aspect-[4/3] object-cover object-[50%_78%]"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">{t('about.headline')}</h1>
              <p className="text-lg text-brand-yellow font-medium mb-6">{t('about.subtitle')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('about.story')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amit képviselünk — text LEFT, image RIGHT */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.values.headline')}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">{t('about.values.intro')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about.values.description')}</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={aboutEvent.src}
                alt={t('about.values.headline')}
                className="w-full aspect-[4/3] object-cover object-[50%_40%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings — full-width breaker */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map(({ key, icon: Icon }) => (
              <div key={key} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <p className="font-medium text-foreground">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution — image LEFT, text RIGHT */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src={aboutDistribution.src}
                alt={t('about.dist.headline')}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.dist.headline')}</h2>
              <p className="text-muted-foreground leading-relaxed">{t('about.dist.intro')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner-tailored — text LEFT, image RIGHT */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.partner.headline')}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">{t('about.partner.text')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about.partner.description')}</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={aboutWarehouse.src}
                alt={t('about.partner.headline')}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Segments — full-width */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">{t('about.segments.headline')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {segments.map(({ key, icon: Icon }) => (
              <div key={key} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={24} className="text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dia-Wellness */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('about.dia.headline')}</h2>
          <p className="text-muted-foreground leading-relaxed">{t('about.dia.text')}</p>
          <p className="mt-4 text-brand-yellow font-medium italic">
            {lang === 'hu'
              ? '"Tudatos táplálkozás, kompromisszumok nélkül."'
              : '"Conscious nutrition, without compromise."'}
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">{t('about.vision.headline')}</h2>
          <p className="text-primary-foreground/80 leading-relaxed">{t('about.vision.text')}</p>
        </div>
      </section>

      {/* Capabilities — image LEFT, text RIGHT */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src={aboutProduction.src}
                alt={lang === 'hu' ? 'Gyártási képességeink' : 'Production Capabilities'}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {lang === 'hu' ? 'Gyártási képességeink' : 'Production Capabilities'}
              </h2>
              <div className="space-y-3">
                {capabilities.map((key) => (
                  <div key={key} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow shrink-0" />
                    <span>{t(key)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <CertificationBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="section-dark rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-primary-foreground mb-3">{t('about.cta.headline')}</h2>
            <p className="text-primary-foreground/70 mb-6">{t('about.cta.body')}</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-brand-yellow text-brand-dark font-bold hover:brightness-110 transition-all"
            >
              {t('about.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
