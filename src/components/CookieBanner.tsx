'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n';

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: string;
};

const STORAGE_KEY = 'gtc_consent';

interface CookieBannerProps {
  onConsent: (consent: ConsentState) => void;
}

export default function CookieBanner({ onConsent }: CookieBannerProps) {
  const t = useTranslation();
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsOn, setAnalyticsOn] = useState(false);
  const [marketingOn, setMarketingOn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed: ConsentState = JSON.parse(stored);
        onConsent(parsed);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
        setVisible(true);
      }
    } else {
      setVisible(true);
    }

    const handler = () => {
      setVisible(true);
      setShowCustomize(true);
    };
    window.addEventListener('open-cookie-settings', handler);
    return () => window.removeEventListener('open-cookie-settings', handler);
  }, []);

  function save(analytics: boolean, marketing: boolean) {
    const consent: ConsentState = {
      necessary: true,
      analytics,
      marketing,
      ts: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    onConsent(consent);
    setVisible(false);
    setShowCustomize(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl">
      <div className="container mx-auto px-4 py-5">
        {!showCustomize ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground text-sm">{t('cookie.title')}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{t('cookie.desc')}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => setShowCustomize(true)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
              >
                {t('cookie.customize')}
              </button>
              <button
                onClick={() => save(false, false)}
                className="text-xs px-4 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-colors font-medium"
              >
                {t('cookie.rejectAll')}
              </button>
              <button
                onClick={() => save(true, true)}
                className="text-xs px-4 py-2 rounded-md bg-brand-yellow text-brand-dark font-bold hover:brightness-110 transition-all"
              >
                {t('cookie.acceptAll')}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-semibold text-foreground text-sm mb-4">{t('cookie.title')}</p>
            <div className="space-y-3 mb-5">
              {/* Necessary — always on */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{t('cookie.necessary')}</span>
                <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-medium">ON</span>
              </div>
              {/* Analytics */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">{t('cookie.analytics')}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={analyticsOn}
                    onChange={(e) => setAnalyticsOn(e.target.checked)}
                  />
                  <div className="w-10 h-5 bg-muted rounded-full peer peer-checked:bg-primary transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
                </label>
              </div>
              {/* Marketing */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">{t('cookie.marketing')}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={marketingOn}
                    onChange={(e) => setMarketingOn(e.target.checked)}
                  />
                  <div className="w-10 h-5 bg-muted rounded-full peer peer-checked:bg-primary transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => save(analyticsOn, marketingOn)}
                className="text-xs px-4 py-2 rounded-md bg-brand-yellow text-brand-dark font-bold hover:brightness-110 transition-all"
              >
                {t('cookie.save')}
              </button>
              <button
                onClick={() => setShowCustomize(false)}
                className="text-xs px-4 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-colors"
              >
                ←
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
