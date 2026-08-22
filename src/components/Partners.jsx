import { partners } from "../config/siteConfig";

/** Placeholder tiles until real partner logos land — see siteConfig. */
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
            <span aria-hidden="true">◇</span>
            <i>{t.partnerLogoPlaceholder}</i>
          </div>
        ))}
      </div>
    </section>
  );
}
