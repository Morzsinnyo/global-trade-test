

# Plan: Add H1 + Subtitle Above Filters on Products Page

## Change
**File: `src/pages/Products.tsx`**, lines 73-74 — Replace the intro paragraph with an H1 heading and a subtitle line, keeping the existing intro paragraph below if desired.

```tsx
<h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
  {lang === 'hu' ? 'Termékeink' : 'Our Products'}
</h1>
<p className="text-lg text-muted-foreground mb-8">
  Bake-Off · Ready-to-Serve · {lang === 'hu' ? 'Saját márka' : 'Private Label'}
</p>
```

The existing `products.intro` paragraph will be removed (it's redundant with the new subtitle). Filter tabs follow directly after.

One file, ~5 lines changed.

