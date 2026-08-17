import { ImageResponse } from 'next/og';

// Next.js file convention: this generates /opengraph-image and injects both
// og:image and twitter:image into every page's head at build time.
export const alt = 'Global Trade & Production Kft. — fagyasztott pékáru, pizza, snack és desszert B2B partnereknek';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Brand tokens, mirrored from --primary / --primary-foreground in globals.css.
const NAVY = '#263882';
const CREAM = '#fffae6';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: NAVY,
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: CREAM, opacity: 0.75, letterSpacing: 4 }}>
          GLOBAL-TRADE.HU
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 82,
            fontWeight: 700,
            color: CREAM,
            marginTop: 28,
            lineHeight: 1.1,
          }}
        >
          Global Trade &amp; Production Kft.
        </div>
        <div style={{ display: 'flex', fontSize: 42, color: CREAM, opacity: 0.9, marginTop: 32 }}>
          Gyártunk. Testreszabunk. Szállítunk.
        </div>
        <div style={{ display: 'flex', width: 160, height: 8, backgroundColor: CREAM, marginTop: 44, opacity: 0.5 }} />
      </div>
    ),
    size
  );
}
