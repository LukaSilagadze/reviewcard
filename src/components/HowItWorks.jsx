/** The illustration on each step card: what the phone in the scene shows. */
const SCENES = [
  { glyph: "◉", label: "NFC" },
  { glyph: "↗", label: "Open" },
  { glyph: "★★★★★", label: "Review" },
];

export function HowItWorks({ t }) {
  return (
    <section id="how" className="section how-section">
      <div className="container">
        <div className="how-heading">
          <h2>{t.howTitle}</h2>
        </div>

        <div className="steps">
          {t.steps.map(([title, detail], i) => (
            <article className={`step-card step-card-${i + 1}`} key={title}>
              <div className="step-scene" aria-hidden="true">
                <div className="scene-card">
                  <img src="/assets/icon.webp" alt="" width="43" height="43" loading="lazy" />
                  <span>Review us on</span>
                  <b>Google</b>
                  <small>★★★★★</small>
                </div>
                <div className="scene-phone">
                  <div className="phone-top" />
                  <span>{SCENES[i].glyph}</span>
                  <b>{SCENES[i].label}</b>
                  <i />
                </div>
                <div className="signal">)))</div>
              </div>

              <div className="step-shade" />

              <div className="step-content">
                <span className="step-number">
                  {t.stepLabel} {i + 1}
                </span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
