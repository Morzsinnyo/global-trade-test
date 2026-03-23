'use client';

import { ShieldCheck, Tag, Flame, HeartPulse } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const badges = [
  { key: 'trust.haccp' as const, icon: ShieldCheck },
  { key: 'trust.privatelabel' as const, icon: Tag },
  { key: 'trust.bakeoff' as const, icon: Flame },
  { key: 'trust.wellness' as const, icon: HeartPulse },
];

const TrustBar = () => {
  const t = useTranslation();

  return (
    <section className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map(({ key, icon: Icon }) => (
            <div key={key} className="flex items-center gap-2 justify-center text-primary-foreground">
              <Icon size={20} className="text-brand-yellow shrink-0" />
              <span className="text-xs md:text-sm font-medium">{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
