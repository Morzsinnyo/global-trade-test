import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * These assertions run against the real prerendered output in .next/server/app,
 * so they check the HTML Googlebot actually receives — not our intent in the
 * source. Run `npm run build` first (or use `npm run test:seo`).
 */

const BUILD_DIR = join(process.cwd(), '.next', 'server', 'app');
const SITE_URL = 'https://www.global-trade.hu';

// path on the site -> prerendered file
const PAGES = {
  '/': 'index.html',
  '/products': 'products.html',
  '/about': 'about.html',
  '/contact': 'contact.html',
  '/aszf': 'aszf.html',
  '/adatvedelem': 'adatvedelem.html',
} as const;

type PagePath = keyof typeof PAGES;
const html: Record<string, string> = {};

beforeAll(() => {
  if (!existsSync(BUILD_DIR)) {
    throw new Error(`No build output at ${BUILD_DIR}. Run \`npm run build\` before the SEO tests.`);
  }
  for (const [path, file] of Object.entries(PAGES)) {
    const full = join(BUILD_DIR, file);
    if (!existsSync(full)) throw new Error(`Missing prerendered page for ${path} (${file})`);
    html[path] = readFileSync(full, 'utf8');
  }
});

function canonicalOf(page: string): string | null {
  const match = html[page].match(/<link rel="canonical" href="([^"]*)"/);
  return match ? match[1] : null;
}

function jsonLdBlocks(page: string): unknown[] {
  const matches = [...html[page].matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  return matches.map((m) => JSON.parse(m[1]));
}

function metaContent(page: string, selector: RegExp): string | null {
  const match = html[page].match(selector);
  return match ? match[1] : null;
}

const allPages = Object.keys(PAGES) as PagePath[];

describe('canonical URLs', () => {
  // Regression guard for the root-layout canonical bug: `alternates.canonical`
  // set in layout.tsx was inherited by every page, pointing them all at the
  // homepage and marking them as duplicates.
  it('no page other than the homepage canonicalizes to the homepage', () => {
    const offenders = allPages
      .filter((page) => page !== '/')
      .filter((page) => {
        const canonical = canonicalOf(page);
        return canonical === SITE_URL || canonical === `${SITE_URL}/`;
      });

    expect(offenders).toEqual([]);
  });

  it('every declared canonical points at its own URL', () => {
    for (const page of allPages) {
      const canonical = canonicalOf(page);
      if (canonical === null) continue; // self-canonicalises; acceptable
      const expected = page === '/' ? SITE_URL : `${SITE_URL}${page}`;
      expect(canonical.replace(/\/$/, ''), `canonical on ${page}`).toBe(expected.replace(/\/$/, ''));
    }
  });

  it('pages with their own metadata export declare an explicit canonical', () => {
    for (const page of ['/aszf', '/adatvedelem'] as PagePath[]) {
      expect(canonicalOf(page), `canonical on ${page}`).toBe(`${SITE_URL}${page}`);
    }
  });
});

describe('structured data', () => {
  it('every page carries parseable JSON-LD', () => {
    for (const page of allPages) {
      expect(() => jsonLdBlocks(page), `JSON-LD on ${page}`).not.toThrow();
      expect(jsonLdBlocks(page).length, `JSON-LD block count on ${page}`).toBeGreaterThan(0);
    }
  });

  it('exposes an Organization with the real contact and address facts', () => {
    const org = jsonLdBlocks('/').find(
      (b): b is Record<string, any> => (b as any)['@type'] === 'Organization'
    );

    expect(org).toBeDefined();
    expect(org!.name).toBe('Global Trade & Production Kft.');
    expect(org!.url).toBe(SITE_URL);
    expect(org!.email).toBe('lorincz@global-trade.hu');
    expect(org!.address.postalCode).toBe('3390');
    expect(org!.address.addressLocality).toBe('Füzesabony');
    expect(org!.address.addressCountry).toBe('HU');
    expect(org!.contactPoint.length).toBeGreaterThanOrEqual(2);
  });

  it('links the WebSite node to the Organization node', () => {
    const site = jsonLdBlocks('/').find((b): b is Record<string, any> => (b as any)['@type'] === 'WebSite');
    expect(site).toBeDefined();
    expect(site!.publisher['@id']).toBe(`${SITE_URL}/#organization`);
  });
});

describe('social preview tags', () => {
  it('every page emits an og:image', () => {
    for (const page of allPages) {
      const og = metaContent(page, /<meta property="og:image" content="([^"]*)"/);
      expect(og, `og:image on ${page}`).toBeTruthy();
      expect(og, `og:image on ${page} should be absolute`).toMatch(/^https?:\/\//);
    }
  });

  it('uses a large twitter card rather than the bare summary card', () => {
    for (const page of allPages) {
      expect(
        metaContent(page, /<meta name="twitter:card" content="([^"]*)"/),
        `twitter:card on ${page}`
      ).toBe('summary_large_image');
    }
  });
});

describe('baseline document markup', () => {
  it('declares Hungarian as the document language', () => {
    for (const page of allPages) {
      expect(html[page], `lang on ${page}`).toContain('lang="hu"');
    }
  });

  it('every page has a non-empty title', () => {
    for (const page of allPages) {
      const title = metaContent(page, /<title>([^<]*)<\/title>/);
      expect(title, `title on ${page}`).toBeTruthy();
    }
  });
});
