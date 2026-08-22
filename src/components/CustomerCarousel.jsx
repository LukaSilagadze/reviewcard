import { customerGallery } from "../config/siteConfig";

export function CustomerCarousel({ t }) {
  return (
    <section className="customer-carousel" aria-label={t.customersLabel}>
      {/* Duplicated so the marquee can loop seamlessly. */}
      <div className="customer-track">
        {[...customerGallery, ...customerGallery].map((src, i) => (
          <div className="customer-photo" key={`${src}-${i}`}>
            <img
              src={src}
              alt={`${t.customerPhotoAlt} ${(i % customerGallery.length) + 1}`}
              width="245"
              height="300"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
