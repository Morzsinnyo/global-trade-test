'use client';

import { Factory, RefreshCw, Package, TrendingDown } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const pillars = [
  { titleKey: 'pillar.stable.title' as const, descKey: 'pillar.stable.desc' as const, icon: Factory },
  { titleKey: 'pillar.flexible.title' as const, descKey: 'pillar.flexible.desc' as const, icon: RefreshCw },
  { titleKey: 'pillar.complex.title' as const, descKey: 'pillar.complex.desc' as const, icon: Package },
  { titleKey: 'pillar.efficient.title' as const, descKey: 'pillar.efficient.desc' as const, icon: TrendingDown },
];

const PillarCards = () => {
  const t = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          {t('pillar.headline')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ titleKey, descKey, icon: Icon }) => (
            <div
              key={titleKey}
              className="bg-card rounded-lg p-8 border border-border hover:border-brand-yellow/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-brand-yellow/20 transition-colors">
                <Icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t(titleKey)}</h3>
              <p className="text-muted-foreground">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarCards;
