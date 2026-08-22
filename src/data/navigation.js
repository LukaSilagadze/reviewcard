/**
 * Section ids, in the order they appear in the page and the nav bar.
 * Each id is both the anchor target and the key into `copy[lang].nav`,
 * so adding a section means adding it here plus one label per language.
 */
export const navSections = ["products", "prices", "how"];

/** Delivery, Partners and FAQ still exist as page sections — just unlinked
    from navigation — so the footer list is the same as the header's. */
export const footerNavSections = navSections;
