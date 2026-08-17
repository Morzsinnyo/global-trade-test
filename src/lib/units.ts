import type { Language } from './i18n';

/**
 * The `weight` and `packaging` fields in products.ts are free-text strings
 * written in Hungarian ('95g/db', '60 db/karton'). Unlike every other product
 * field they have no hu/en pair, so the English view was showing Hungarian
 * unit words that a foreign buyer cannot read:
 *
 *   db     (darab)  -> piece / pieces
 *   karton          -> box
 *   csomag          -> package
 *
 * The numbers themselves are language-neutral, so only the unit words are
 * swapped. Anything without a Hungarian unit ('110g / 400g / 1500g') passes
 * through untouched.
 */
export function localizeMeasurement(value: string, lang: Language): string {
  if (lang === 'hu') return value;

  return (
    value
      // Counted form: '60 db/karton' -> '60 pieces/karton'
      .replace(/(\d+)\s*db\b/g, (_match, count: string) =>
        count === '1' ? `${count} piece` : `${count} pieces`
      )
      // Per-unit form, no leading count: '95g/db' -> '95g / piece'
      .replace(/\s*\/\s*db\b/g, ' / piece')
      .replace(/\s*\/\s*karton\b/g, ' / box')
      .replace(/\s*\/\s*csomag\b/g, ' / package')
  );
}
