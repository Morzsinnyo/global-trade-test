import { describe, it, expect } from 'vitest';
import { localizeMeasurement } from '@/lib/units';
import { products } from '@/lib/products';

describe('localizeMeasurement', () => {
  it('leaves Hungarian untouched', () => {
    expect(localizeMeasurement('95g/db', 'hu')).toBe('95g/db');
    expect(localizeMeasurement('60 db/karton', 'hu')).toBe('60 db/karton');
    expect(localizeMeasurement('1kg/csomag', 'hu')).toBe('1kg/csomag');
  });

  it('translates every weight string currently in the catalogue', () => {
    const cases: [string, string][] = [
      ['410–450g/db', '410–450g / piece'],
      ['110g/db', '110g / piece'],
      ['95g/db', '95g / piece'],
      ['90–105g/db', '90–105g / piece'],
      ['500g/db', '500g / piece'],
      ['1kg/csomag', '1kg / package'],
      ['110g / 400g / 1500g', '110g / 400g / 1500g'], // no Hungarian unit
    ];

    for (const [input, expected] of cases) {
      expect(localizeMeasurement(input, 'en'), input).toBe(expected);
    }
  });

  it('translates every packaging string currently in the catalogue', () => {
    const cases: [string, string][] = [
      ['60 db/karton', '60 pieces / box'],
      ['8 db/karton', '8 pieces / box'],
      ['7 db/karton', '7 pieces / box'],
      ['6x1kg/karton', '6x1kg / box'],
      ['50 / 16 / 3 db/karton', '50 / 16 / 3 pieces / box'],
      ['40 db/karton', '40 pieces / box'],
      ['32 db/karton', '32 pieces / box'],
      ['20 db/karton', '20 pieces / box'],
    ];

    for (const [input, expected] of cases) {
      expect(localizeMeasurement(input, 'en'), input).toBe(expected);
    }
  });

  it('uses the singular for a count of one', () => {
    expect(localizeMeasurement('1 db/karton', 'en')).toBe('1 piece / box');
  });

  it('does not touch numbers, ranges or multipliers', () => {
    expect(localizeMeasurement('6x1kg/karton', 'en')).toContain('6x1kg');
    expect(localizeMeasurement('90–105g/db', 'en')).toContain('90–105g');
  });
});

describe('product catalogue', () => {
  // Guard for products added later: any new Hungarian unit word in a weight or
  // packaging string must be handled by localizeMeasurement, or it will leak
  // into the English view the way 'db' and 'karton' originally did.
  it('leaves no Hungarian unit word in any English measurement', () => {
    const leaks: string[] = [];

    for (const product of products) {
      for (const field of ['weight', 'packaging'] as const) {
        const value = product[field];
        if (!value) continue;
        const english = localizeMeasurement(value, 'en');
        if (/\b(db|karton|csomag|darab|doboz|zacskó)\b/.test(english)) {
          leaks.push(`${product.id}.${field}: "${value}" -> "${english}"`);
        }
      }
    }

    expect(leaks).toEqual([]);
  });
});
