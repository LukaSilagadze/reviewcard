/** One glyph per entry in `t.benefits`, in the same order. */
const BENEFIT_ICONS = ["✓", "⚡", "◉", "⊘", "⌘", "↗"];

export function Benefits({ t }) {
  return (
    <section className="section benefits">
      <div className="container">
        <div className="section-head centered">
          <h2>{t.benefitsTitle}</h2>
        </div>

        <div className="benefit-grid">
          {t.benefits.map((benefit, i) => (
            <div key={benefit}>
              <span className="icon" aria-hidden="true">
                {BENEFIT_ICONS[i]}
              </span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
