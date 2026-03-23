'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { images } from '@/lib/images';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslation();
  const pathname = usePathname();

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/products', label: t('nav.products') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path) ?? false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-18 px-4">
        <Link href="/" className="flex items-center">
          <img src={images.logo.src ?? images.logo} alt="Global Trade & Production" className="h-20 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm font-medium transition-colors border-b-2 pb-0.5 ${
                isActive(link.to)
                  ? 'text-foreground border-primary font-semibold'
                  : 'text-muted-foreground border-transparent hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium ${
                isActive(link.to)
                  ? 'text-foreground font-semibold border-l-2 border-primary pl-3'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
