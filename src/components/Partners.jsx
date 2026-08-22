import { partners } from "../config/siteConfig";

/**
 * Round tiles sized for a social profile picture — drop a `logo` path onto a
 * partner in siteConfig.js (`{ id, logo: "/assets/partners/name.webp" }`)
 * and it replaces the placeholder automatically, no changes needed here.
 */
export function Partners({ t }) {
  return (
    <section id="partners" className="section partners">
      <div className="section-head centered">
        <h2>{t.partners}</h2>
      </div>

      {/* Duplicated so the marquee can loop seamlessly. */}
      <div className="logo-track">
        {[...partners, ...partners].map((partner, i) => (
          <div className="partner-logo" key={`${partner.id}-${i}`}>
            {partner.logo ? (
              <img src={partner.logo} alt={partner.name ?? ""} loading="lazy" decoding="async" />
            ) : (
              <>
                <span aria-hidden="true">◇</span>
                <i>{t.partnerLogoPlaceholder}</i>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
