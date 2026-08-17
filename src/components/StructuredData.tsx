import { contactPersons } from '@/lib/contacts';

const SITE_URL = 'https://www.global-trade.hu';

// Organization schema. Every fact here is sourced from existing site content
// (src/lib/contacts.ts, the Székhely line in /aszf and /adatvedelem, and the
// company description in src/lib/i18n.ts) — nothing is asserted that the site
// does not already state publicly.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Global Trade & Production Kft.',
  legalName: 'Global Trade & Production Kft.',
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  description:
    'Hungarian-owned food manufacturer specializing in frozen ready-made products — bakery, pizza, snacks and desserts — produced at industrial scale for wholesale, HoReCa and retail partners, with custom and private-label development.',
  email: contactPersons[0].email,
  telephone: contactPersons[0].phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pusztaszikszó',
    postalCode: '3390',
    addressLocality: 'Füzesabony',
    addressCountry: 'HU',
  },
  contactPoint: contactPersons.map((person) => ({
    '@type': 'ContactPoint',
    contactType: 'sales',
    name: person.name,
    telephone: person.phone,
    email: person.email,
    availableLanguage: ['hu', 'en'],
  })),
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Global Trade & Production Kft.',
  inLanguage: 'hu',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
