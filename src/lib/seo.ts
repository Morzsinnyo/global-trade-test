import type { Metadata } from 'next';

const SITE_NAME = 'Global Trade & Production Kft.';

/**
 * Builds a page's metadata with an explicit self-canonical.
 *
 * Canonicals must be declared per page, never in the root layout — layout
 * metadata is inherited by every route, so a canonical set there points the
 * whole site at one URL and marks the rest as duplicates.
 *
 * `openGraph` is spelled out in full rather than partially overridden: Next.js
 * merges metadata shallowly, so a partial openGraph object would drop the
 * siteName/locale/type inherited from the layout.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** Route path, e.g. '/products'. Resolved against metadataBase. */
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'hu_HU',
      type: 'website',
      // Declared explicitly rather than left to the opengraph-image.tsx file
      // convention: once a route sets its own `openGraph` object, the image
      // generated for the parent segment is no longer injected into it.
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
