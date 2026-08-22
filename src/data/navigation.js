/**
 * Section ids, in the order they appear in the page and the nav bar.
 * Each id is both the anchor target and the key into `copy[lang].nav`,
 * so adding a section means adding it here plus one label per language.
 */
export const navSections = ["products", "prices", "how", "delivery", "partners", "faq"];

/** The footer lists everything except the last entry (FAQ). */
export const footerNavSections = navSections.slice(0, -1);
