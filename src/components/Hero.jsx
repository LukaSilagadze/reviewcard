import { useEffect, useState } from "react";
import { heroSlides, customerGallery, socials } from "../config/siteConfig";
import { WhatsAppIcon } from "./icons/SocialIcons";

const whatsappUrl = socials.find((s) => s.id === "whatsapp")?.url ?? "#";

const SLIDE_INTERVAL_MS = 4000;
/**
 * Below this width the hero carousel switches from the wide product shots
 * (heroSlides) to the portrait customer-gallery photos — they crop far more
 * naturally into the tall, narrow box a small phone screen gives the hero.
 */
const SMALL_SCREEN_QUERY = "(max-width: 600px)";

function useMatches(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

function HeroCarousel() {
  const isSmallScreen = useMatches(SMALL_SCREEN_QUERY);
  const slides = isSmallScreen ? customerGallery : heroSlides;
  const [active, setActive] = useState(0);

  // The two slide sets are different lengths — reset so `active` can't point
  // past the end of whichever set just became current.
  useEffect(() => {
    setActive(0);
  }, [isSmallScreen]);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="hero-carousel" aria-hidden="true">
      {slides.map((src, i) => (
        <img
          key={src}
          className={`hero-slide${i === active ? " is-active" : ""}`}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : undefined}
        />
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
          <a
            className="btn btn-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
