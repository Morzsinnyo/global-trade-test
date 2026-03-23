'use client';

import { useEffect, useRef, useState } from 'react';
import { Coffee, Truck, Handshake, Warehouse } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  labelKey: 'stats.coffee' | 'stats.trucks' | 'stats.partners' | 'stats.stock';
  isText?: boolean;
}

const stats: StatItem[] = [
  { icon: Coffee, value: 25, suffix: '+', labelKey: 'stats.coffee' },
  { icon: Truck, value: 10, suffix: '', labelKey: 'stats.trucks' },
  { icon: Handshake, value: 20, suffix: '+', labelKey: 'stats.partners' },
  { icon: Warehouse, value: 24, suffix: '/7', labelKey: 'stats.stock', isText: true },
];

function useCountUp(target: number, isVisible: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return count;
}

const StatCard = ({ icon: Icon, value, suffix, labelKey, isVisible }: StatItem & { isVisible: boolean }) => {
  const t = useTranslation();
  const count = useCountUp(value, isVisible);

  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-16 h-16 rounded-full bg-brand-yellow/20 flex items-center justify-center">
        <Icon size={30} className="text-brand-yellow" />
      </div>
      <span className="text-4xl md:text-5xl font-bold text-foreground">
        {count}{suffix}
      </span>
      <span className="text-muted-foreground text-sm">{t(labelKey)}</span>
    </div>
  );
};

const StatsCounter = () => {
  const t = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          {t('stats.headline')}
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          {t('stats.subtitle')}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.labelKey} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
