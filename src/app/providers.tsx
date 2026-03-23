'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageContext, Language } from '@/lib/i18n';
import CookieBanner, { ConsentState } from '@/components/CookieBanner';
import Analytics from '@/components/Analytics';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('hu');
  const [consent, setConsent] = useState<ConsentState | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <TooltipProvider>
          <Sonner />
          {children}
          <CookieBanner onConsent={setConsent} />
          <Analytics consent={consent} />
        </TooltipProvider>
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
}
