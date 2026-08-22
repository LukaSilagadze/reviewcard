export function Delivery({ t }) {
  return (
    <section id="delivery" className="delivery section">
      <div className="container delivery-grid">
        <div>
          <h2>{t.delivery}</h2>

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

        {/* Google My Maps — every business currently using ReviewCard. The
            iframe is oversized and shifted up to crop Google's own header
            bar off the top (it's a fixed-height toolbar, not proportional
            to the iframe's size, so this is a fixed px crop — see the CSS).
            Our own title sits on top of the frame in its place. */}
        <div className="delivery-map-frame">
          <span className="delivery-map-title">{t.deliveryMapLabel}</span>
          <iframe
            className="delivery-map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1gAmxAcQ2qAJ1RrwQ7qCgEy7TbNlmme8&ehbc=2E312F&noprof=1"
            title={t.deliveryMapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
