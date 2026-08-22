export function Delivery({ t }) {
  return (
    <section id="delivery" className="delivery section">
      <div className="container delivery-grid">
        <div>
          <h2>{t.delivery}</h2>
          <p>{t.deliveryText}</p>

          <div className="delivery-times">
            <div>
              <span aria-hidden="true">⌖</span>
              <p>
                {t.city}
                <strong>{t.cityTime}</strong>
              </p>
            </div>
            <div>
              <span aria-hidden="true">▰</span>
              <p>
                {t.other}
                <strong>{t.otherTime}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="route-art" aria-hidden="true">
          <div className="route">
            • · · · · · · · · · · · · · · · · · · · · · · · · · ●
          </div>
          <span className="pin">⌖</span>
          <span className="box">▣</span>
          <b>ReviewCard</b>
        </div>
      </div>
    </section>
  );
}
