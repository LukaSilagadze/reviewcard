const STEP_PHOTOS = ["/assets/step1.webp", "/assets/step2.webp", "/assets/step3.webp"];

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
              <img
                className="step-photo"
                src={STEP_PHOTOS[i]}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />

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
