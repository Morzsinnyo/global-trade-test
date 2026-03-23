'use client';

import { ShieldCheck } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const CertificationBadge = () => {
  const t = useTranslation();

  return (
    <div className="bg-card border border-border rounded-lg p-8 flex items-start gap-4">
      <div className="w-14 h-14 rounded-lg bg-brand-yellow/20 flex items-center justify-center shrink-0">
        <ShieldCheck size={28} className="text-brand-navy" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">{t('haccp.title')}</h3>
        <p className="text-muted-foreground">{t('haccp.body')}</p>
      </div>
    </div>
  );
};

export default CertificationBadge;
