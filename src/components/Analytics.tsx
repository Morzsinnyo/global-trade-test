'use client';

import { useEffect } from 'react';

type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: string;
};

interface AnalyticsProps {
  consent: ConsentState | null;
}

export default function Analytics({ consent }: AnalyticsProps) {
  useEffect(() => {
    if (!consent?.analytics) return;

    const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
    if (!ga4Id || ga4Id === 'G-XXXXXXXXXX') return;

    // Skip if already injected
    if (document.getElementById('gtag-js')) return;

    const script = document.createElement('script');
    script.id = 'gtag-js';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.id = 'gtag-init';
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${ga4Id}');
    `;
    document.head.appendChild(inlineScript);
  }, [consent?.analytics]);

  // marketing (LinkedIn) — wired up when Partner ID is added
  // useEffect(() => { if (!consent?.marketing) return; ... }, [consent?.marketing]);

  return null;
}
