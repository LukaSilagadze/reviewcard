# ReviewCard

Static bilingual (ქართული / English) marketing site built with React and Vite.

```bash
npm install
npm run dev
```

## Where things live

| Path | What it holds |
| --- | --- |
| `src/i18n/translations.js` | **Every** user-facing string, in both languages. Nothing rendered should be written inline in a component. |
| `src/data/products.js` | The product catalogue — order, names, photos, badges. |
| `src/data/locations.js` | Cities shown on the coverage map. |
| `src/data/navigation.js` | Section ids, shared by the nav bar and the footer. |
| `src/config/siteConfig.js` | Social URLs, contact details, partner/testimonial placeholders. |
| `src/components/` | One file per page section. |
| `src/styles/global.css` | All styling, organised by component. |
| `public/assets/` | Web-ready images, served as-is. |

Adding a language means adding a key to `copy` and to `languageNames` in
`translations.js`; every component reads from there.

## Images

`public/assets` holds only web-ready renditions. The full-resolution masters
live in `assets-src/`, which is git-ignored — keep them locally or re-export
them from the original shoot.

```bash
npm run optimize:images
```

Regenerates every rendition from `assets-src/` at the sizes the site actually
paints them. Add new images to `assets-src/` and register them in the `jobs`
list in `scripts/optimize-images.mjs` rather than dropping full-size files
straight into `public/assets`.

## Known gaps

- Every social URL in `siteConfig.js` is still `#`, and the contact phone is a
  placeholder. The order modal is the site's only call to action, so these
  block launch.
- Partner logos and testimonial screenshots render generic placeholder tiles.
- The testimonial carousel steps by a percentage of the whole track rather than
  by one card, so it overshoots — see the note in `Testimonials.jsx`.
- Section icons are Unicode glyphs, which render inconsistently across
  platforms. They are isolated in `siteConfig.js` and the per-section
  components so they can be swapped for SVGs in one pass.
