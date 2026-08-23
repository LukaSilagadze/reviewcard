/**
 * Product catalogue. Order here is the order on the page.
 *
 * `id`       also selects the `p-<id>` CSS hook and the description in
 *            `copy[lang].productDescriptions`.
 * `mark`     glyph shown on the fallback mock-up when there is no photo.
 * `caption`  small line under the mark on the fallback mock-up.
 * `pricing`  volume tiers in GEL, cheapest per unit at higher quantity.
 *            `qty` is a display label (no unit word — kept language-neutral
 *            so it doesn't need a translation entry). A product with no
 *            `pricing` falls back to the "price coming soon" copy.
 */
export const products = [
  {
    id: "card",
    name: "Google Review Card",
    image: "/assets/gw_card.webp",
    mark: "G",
    caption: "★★★★★",
    pricing: [
      { qty: "1", price: 40 },
      { qty: "2–9", price: 36 },
      { qty: "10+", price: 32 },
    ],
  },
  {
    id: "stand",
    name: "Google Review Stand",
    image: "/assets/gw_stand.webp",
    mark: "G",
    caption: "★★★★★",
    pricing: [
      { qty: "1", price: 48 },
      { qty: "2–9", price: 42 },
      { qty: "10+", price: 38 },
    ],
  },
  {
    id: "sticker",
    name: "Google Review Sticker",
    image: "/assets/sticker.webp",
    mark: "G",
    caption: "★★★★★",
    pricing: [
      { qty: "1", price: 36 },
      { qty: "2–9", price: 32 },
      { qty: "10+", price: 28 },
    ],
  },
  {
    id: "instagram",
    name: "Instagram Follow Us Card",
    image: "/assets/ig_card.webp",
    mark: "◎",
    caption: "Follow us",
    // Same physical product as `card`, just programmed for a different link.
    pricing: [
      { qty: "1", price: 40 },
      { qty: "2–9", price: 36 },
      { qty: "10+", price: 32 },
    ],
  },
  {
    id: "facebook",
    name: "Facebook Follow Us Card",
    image: "/assets/fb_card.webp",
    mark: "f",
    caption: "Follow us",
    pricing: [
      { qty: "1", price: 40 },
      { qty: "2–9", price: 36 },
      { qty: "10+", price: 32 },
    ],
  },
];
