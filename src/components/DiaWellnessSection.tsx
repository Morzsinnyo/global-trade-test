'use client';

import { useTranslation } from '@/lib/i18n';
import { Check } from 'lucide-react';
import { images } from '@/lib/images';

const benefits = [
  'dia.protein',
  'dia.amino',
  'dia.carbs',
  'dia.fiber',
  'dia.vitamins',
  'dia.minerals',
  'dia.calories',
] as const;

const DiaWellnessSection = () => {
  const t = useTranslation();

  return (
    <section className="py-20 wellness-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img src={images.diaWellness} alt="Dia-Wellness" className="w-20 h-auto mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-wellness-foreground mb-4">
            {t('dia.headline')}
          </h2>
          <p className="text-lg text-wellness-foreground/80 mb-8">
            {t('dia.body')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
            {benefits.map((key) => (
              <div key={key} className="flex items-center gap-2 text-wellness-foreground">
                <Check size={18} className="shrink-0" />
                <span className="text-sm">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiaWellnessSection;
