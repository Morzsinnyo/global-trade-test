'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';
import { images } from '@/lib/images';

const Footer = () => {
  const t = useTranslation();

  return (
    <footer className="section-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img src={images.logo.src ?? images.logo} alt="Global Trade & Production" className="h-24 w-auto mb-3 brightness-0 invert" />
            <p className="text-sm opacity-70">{t('footer.tagline')}</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              {t('nav.home')}
            </Link>
            <Link href="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              {t('nav.about')}
            </Link>
            <Link href="/products" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              {t('nav.products')}
            </Link>
            <Link href="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Contact */}
          <div className="text-sm opacity-70">
            <p>{t('footer.address')}</p>
            <p className="mt-2">Lőrincz Ákos — +36 30 953 8702</p>
            <p>lorincz@global-trade.hu</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm opacity-50">
          <span>{t('footer.rights')}</span>
          <span className="hidden sm:inline">·</span>
          <button
            onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
            className="hover:opacity-100 transition-opacity"
          >
            {t('cookie.manage')}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
