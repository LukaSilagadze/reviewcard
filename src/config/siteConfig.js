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

export const partners = [
  ["carpology-logo", "Carpology Shop"],
  ["f1shopgeorgia", "F1 Shop Georgia"],
  ["pizzamedici", "Pizza Medici"],
  ["logo-png", "Needshop"],
  ["luxink", "Lux Ink Tattoo Lounge"],
  ["astralfitness", "Astral Fitness"],
  ["atonelze", "Atonelze Bar"],
  ["burgerking", "Burger King"],
  ["meamacollect", "Meama Collect"],
  ["grossmann", "Grossmann"],
  ["gtline", "GT Line"],
  ["kartinglilo", "Karting Lilo"],
  ["pkdental", "Pavle Khujadze Dental"],
  ["techauto", "TechAuto"],
  ["zooarea", "Zoo Area"],
].map(([id, name]) => ({ id, name, logo: `/assets/partner_logos/${id}.webp` }));

export const customerGallery = [
  "burgerking.webp",
  "dekaroom.webp",
  "dekaroomdesk.webp",
  "grossmann.webp",
  "grossmannbg.webp",
  "gtline.webp",
  "macncheese.webp",
  "meama.webp",
  "pizzamedici.webp",
  "tamashobanadesk.webp",
  "tamshobana.webp",
  "undergroundarena.webp",
  "fishingshop.webp"
].map((name) => `/assets/customer-gallery/${name}`);

/** Hero background carousel — desktop/tablet only, see Hero.jsx. */
export const heroSlides = ["hero1", "hero2", "hero3"].map((name) => `/assets/${name}.webp`);