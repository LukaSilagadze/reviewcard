import { useEffect, useState } from "react";
import { heroSlides } from "../config/siteConfig";

const SLIDE_INTERVAL_MS = 4000;

/** Icons for the four cards in the strip below the hero. */
const BENEFIT_ICONS = ["⚙", "⚡", "◉", "✓"];

function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % heroSlides.length),
      SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-carousel" aria-hidden="true">
      {heroSlides.map((slide, i) => (
        <picture key={slide.desktop}>
          <source media="(max-width: 600px)" srcSet={slide.mobile} />
          <img
            className={`hero-slide${i === active ? " is-active" : ""}`}
            src={slide.desktop}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : undefined}
          />
        </picture>
      ))}
    </div>
  );
}

export function Hero({ t, onOrder }) {
  return (
    <section className="hero">
      <HeroCarousel />
      <div className="hero-overlay" />

      <div className="container hero-center">
        <h1>{t.hero}</h1>
        <p>{t.intro}</p>
        <div className="actions">
          <button className="btn" onClick={onOrder}>
            {t.primary}
          </button>
        </div>
      </div>
    </section>
  );
}

export function HeroBenefits({ t }) {
  return (
    <div className="hero-benefits">
      <div className="container">
        {t.heroBenefits.map(([title, detail], i) => (
          <div key={title}>
            <span aria-hidden="true">{BENEFIT_ICONS[i]}</span>
            <p>
              <b>{title}</b>
              <small>{detail}</small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
