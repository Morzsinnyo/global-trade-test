'use client';

import ContactForm from '@/components/ContactForm';
import { useTranslation, useLanguage } from '@/lib/i18n';
import { contactPersons } from '@/lib/contacts';
import { Phone, Mail, MapPin, User } from 'lucide-react';

export default function ContactContent() {
  const t = useTranslation();

  return (
    <>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10">{t('contact.title')}</h1>

          {/* Contact persons — horizontal row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {contactPersons.filter((p) => p.name !== 'Lőrincz Bálint').map((person) => (
              <div key={person.name} className="bg-card rounded-lg border border-border p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <User size={24} className="text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground text-lg">{person.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone size={14} className="text-primary shrink-0" />
                    <a
                      href={`tel:${person.phone.replace(/\s/g, '')}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {person.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail size={14} className="text-primary shrink-0" />
                    <a href={`mailto:${person.email}`} className="hover:text-foreground transition-colors">
                      {person.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form + Map — 2-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-border aspect-video bg-muted">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d20.41!3d47.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQ0JzI0LjAiTiAyMMKwMjQnMzYuMCJF!5e0!3m2!1shu!2shu!4v1"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{t('contact.address')}</p>
                  <p className="text-muted-foreground">{t('footer.address')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
