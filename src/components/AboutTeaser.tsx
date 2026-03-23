'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';

const AboutTeaser = () => {
  const t = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {t('about.teaser')}
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
        >
          {t('about.learnmore')}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default AboutTeaser;
