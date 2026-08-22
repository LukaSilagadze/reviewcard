/**
 * Site-wide configuration: the things you change when the business changes.
 *
 * TODO: `url` on every social is still "#". Until these point at the real
 * profiles, the header icons, the footer links and the whole order modal —
 * the site's only call to action — lead nowhere.
 */

/**
 * `id` doubles as the key into `socialIcons` in
 * src/components/icons/SocialIcons.jsx — add a network in both places.
 */
export const socials = [
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/reviewcard_georgia?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==", inOrderModal: true },
  { id: "facebook", label: "Facebook", url: "https://www.facebook.com/profile.php?id=61590586266489", inOrderModal: true },
  { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@review.card0?_r=1&_t=ZS-995nA69NEa0", inOrderModal: false },
  { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/995596160003", inOrderModal: true },
];

/** Networks offered as ordering channels inside the modal. */
export const orderChannels = socials.filter((s) => s.inOrderModal);

// TODO: placeholder contact details.
export const contact = {
  phone: "596 16 00 03",
  email: "reviewcard0@gmail.com",
};

/**
 * Partner logos and testimonial screenshots are still placeholders — the
 * sections render generic tiles until real assets land. Replace each entry
 * with `{ name, logo }` / `{ name, screenshot }` and update the components.
 */
export const partners = Array.from({ length: 7 }, (_, i) => ({ id: i + 1 }));
export const testimonials = Array.from({ length: 5 }, (_, i) => ({ id: i + 1 }));

export const customerGallery = [
  "dekaroom",
  "dekaroomdesk",
  "fishingshop",
  "grossmann",
  "grossmannbg",
  "gtline",
  "macncheese",
  "meama",
  "pizzamedici",
  "tamashobanadesk",
  "tamshobana",
  "undergroundarena",
].map((name) => `/assets/customer-gallery/${name}.webp`);

/**
 * Hero background carousel. `desktop`/`mobile` are two crops of the same
 * shot (see scripts/optimize-images.mjs) swapped by viewport width, matching
 * the rest of the site's responsive-image approach.
 */
export const heroSlides = ["hero1", "hero2", "hero3"].map(
  (name) => ({
    desktop: `/assets/${name}.png`,
    mobile: `/assets/${name}-800.png`,
  }),
);