import { locations } from "../data/locations";

/**
 * NOTE: the outline below is decorative, not a real map of Georgia, and the
 * pin coordinates are laid out for looks rather than geography.
 */
const OUTLINE =
  "M65 240L98 190l72-15 49-63 63 5 50-39 76 35 84-30 68 49 89 3 53 52 75 25 55 69-48 49-109-15-70 28-80-16-57 35-91-21-66 25-68-35-85 4-45-42-68-18z";

export function CoverageMap({ lang, t }) {
  return (
    <section className="section map-section">
      <div className="container">
        <div className="section-head centered">
          <h2>{t.map}</h2>
        </div>

        <div className="map-wrap">
          <svg viewBox="0 0 900 420" role="img" aria-label={t.mapLabel}>
            <path d={OUTLINE} fill="#e8f2ff" stroke="#8ab9ff" strokeWidth="3" />

            {locations.map(([en, ka, x, y]) => (
              <g
                className="map-pin"
                key={en}
                transform={`translate(${x * 9 - 12} ${y * 4})`}
              >
                <circle r="14" />
                <circle r="5" />
                <text y="-20" textAnchor="middle">
                  {lang === "ka" ? ka : en}
                </text>
              </g>
            ))}
          </svg>

          <div className="map-note">
            <span aria-hidden="true">●</span>
            {locations.length} {t.mapUnit}
          </div>
        </div>
      </div>
    </section>
  );
}
