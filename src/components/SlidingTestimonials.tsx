'use client';

import { User, Building2, ShoppingCart, UtensilsCrossed, Store, Briefcase, Users, UserCircle, Package, Factory } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const iconPool = [Building2, ShoppingCart, UtensilsCrossed, Store, Briefcase, Users, UserCircle, Package, Factory, User];

const testimonials = [
  { roleKey: 'testimonial.role.1' as const, textKey: 'testimonial.text.1' as const, typeKey: 'testimonial.type.1' as const },
  { roleKey: 'testimonial.role.2' as const, textKey: 'testimonial.text.2' as const, typeKey: 'testimonial.type.2' as const },
  { roleKey: 'testimonial.role.3' as const, textKey: 'testimonial.text.3' as const, typeKey: 'testimonial.type.3' as const },
  { roleKey: 'testimonial.role.4' as const, textKey: 'testimonial.text.4' as const, typeKey: 'testimonial.type.4' as const },
  { roleKey: 'testimonial.role.5' as const, textKey: 'testimonial.text.5' as const, typeKey: 'testimonial.type.5' as const },
  { roleKey: 'testimonial.role.6' as const, textKey: 'testimonial.text.6' as const, typeKey: 'testimonial.type.6' as const },
  { roleKey: 'testimonial.role.7' as const, textKey: 'testimonial.text.7' as const, typeKey: 'testimonial.type.7' as const },
  { roleKey: 'testimonial.role.8' as const, textKey: 'testimonial.text.8' as const, typeKey: 'testimonial.type.8' as const },
  { roleKey: 'testimonial.role.9' as const, textKey: 'testimonial.text.9' as const, typeKey: 'testimonial.type.9' as const },
  { roleKey: 'testimonial.role.10' as const, textKey: 'testimonial.text.10' as const, typeKey: 'testimonial.type.10' as const },
];

const SlidingTestimonials = () => {
  const t = useTranslation();
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-20 section-dark overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-3">
          {t('testimonials.headline')}
        </h2>
        <p className="text-primary-foreground/70 text-center max-w-2xl mx-auto">
          {t('testimonials.subtitle')}
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-5 animate-x-slider">
          {duplicated.map((item, idx) => {
            const Icon = iconPool[idx % iconPool.length];
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-[340px] bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-6 flex flex-col justify-between"
              >
                <p className="text-primary-foreground/90 text-sm leading-relaxed mb-6">
                  "{t(item.textKey)}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                    <Icon size={20} className="text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-primary-foreground text-sm font-medium">{t(item.roleKey)}</p>
                    <p className="text-primary-foreground/50 text-xs">{t(item.typeKey)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SlidingTestimonials;
