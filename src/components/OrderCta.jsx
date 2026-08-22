export function OrderCta({ t, onOrder }) {
  return (
    <section id="order" className="order section">
      <div className="container">
        <div className="order-inner">
          <img src="/assets/icon.webp" alt="" width="58" height="58" loading="lazy" />
          <div>
            <h2>{t.cta}</h2>
            <p>{t.ctaText}</p>
          </div>
          <button className="btn white" onClick={onOrder}>
            {t.message}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
