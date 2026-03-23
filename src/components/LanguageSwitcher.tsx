'use client';

import { useLanguage } from '@/lib/i18n';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === 'hu' ? 'en' : 'hu')}
      className="px-3 py-1.5 text-sm font-bold border border-border rounded-md hover:bg-muted transition-colors"
      aria-label="Switch language"
    >
      {lang === 'hu' ? 'EN' : 'HU'}
    </button>
  );
};

export default LanguageSwitcher;
