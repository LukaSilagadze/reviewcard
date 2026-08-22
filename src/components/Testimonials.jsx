import { useEffect, useState } from "react";
import { testimonials } from "../config/siteConfig";

const AUTOPLAY_MS = 5000;

/**
 * Placeholder screenshots until real ones land — see siteConfig.
 *
 * KNOWN ISSUE (unchanged in this refactor): the track is translated by a
 * percentage of its own width, but a percentage translate resolves against the
 * element itself, and the track is ~1.67x the viewport. One step therefore
 * moves roughly 1.67 cards rather than one, and the hardcoded 33.333 assumes a
 * 3-up layout that CSS drops to 2-up and 1-up on smaller screens. Fixing it
 * means stepping by card width in px, not by a percentage of the track.
 */
export function Testimonials({ t }) {
  const [slide, setSlide] = useState(0);
  const count = testimonials.length;

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % count),
      AUTOPLAY_MS,
    );
    return () => clearInterval(timer);
  }, [count]);

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>{t.testimonials}</h2>
          </div>
          <div className="arrows">
            <button
              onClick={() => setSlide((s) => (s - 1 + count) % count)}
              aria-label={t.a11y.previous}
            >
              ←
            </button>
            <button
              onClick={() => setSlide((s) => (s + 1) % count)}
              aria-label={t.a11y.next}
            >
              →
            </button>
          </div>
        </div>

        <div className="test-window">
          <div
            className="test-track"
            style={{ transform: `translateX(-${slide * 33.333}%)` }}
          >
            {testimonials.map((testimonial, i) => (
              <article key={testimonial.id}>
                <div className="shot">
                  <div className="shot-head">
                    <span />
                    <b>{t.testimonialPlaceholder}</b>
                  </div>
                  <div className="lines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="shot-foot">♡　◯　⌁</div>
                </div>
                <small>
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
