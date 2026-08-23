import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { PhoneIcon, EnvelopeIcon } from "./icons/SocialIcons";
import { contact } from "../config/siteConfig";
import { navSections } from "../data/navigation";
import { languages, languageNames } from "../i18n/translations";

function LanguageMenu({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const active = languageNames[lang];

  return (
    <div className="language-menu">
      <button
        className="header-lang"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t.a11y.chooseLanguage}
      >
        <img src={active.flag} alt="" width="25" height="17" />
        <span>{active.short}</span>
      </button>

      {open && (
        <div className="language-options" role="listbox">
          {languages.map((code) => (
            <button
              key={code}
              role="option"
              aria-selected={lang === code}
              onClick={() => {
                setLang(code);
                setOpen(false);
              }}
            >
              <img src={languageNames[code].flag} alt="" width="25" height="17" />
              <span>{languageNames[code].label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader({ lang, setLang, t, activeNav, setActiveNav, onOrder }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  const selectSection = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
  };

  // Drives the phone-only fixed order bar: hidden while the hero (with its
  // own in-content CTA) is still on screen, shown once it's scrolled past.
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Keeps the nav's active-link underline in sync while the user scrolls
  // freely, not just when they click a link. Watches a thin band just below
  // the sticky header — whichever section's top edge is currently crossing
  // it is "current" — instead of clicking being the only way to update it.
  useEffect(() => {
    const sections = ["top", ...navSections]
      .map((id) => ({ id, el: id === "top" ? document.querySelector(".hero") : document.getElementById(id) }))
      .filter((s) => s.el);
    if (!sections.length) return;

    // A callback only reports targets whose intersection state just changed,
    // not every target currently intersecting — so on a fast or jump scroll
    // (multiple sections entering/leaving between two callbacks) the "active"
    // pick has to come from a running set, not just this call's entries.
    const intersecting = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.set(entry.target, entry.boundingClientRect.top);
          else intersecting.delete(entry.target);
        }
        if (!intersecting.size) return;
        const topmostEl = [...intersecting.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];
        const match = sections.find((s) => s.el === topmostEl);
        if (match) setActiveNav(match.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, [setActiveNav]);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container">
          <Logo label={t.a11y.home} />

          <div className="header-info">
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <PhoneIcon aria-hidden="true" />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <EnvelopeIcon aria-hidden="true" />
              {contact.email}
            </a>
          </div>

          <LanguageMenu lang={lang} setLang={setLang} t={t} />

          <button
            className="hamb"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={t.a11y.toggleMenu}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <nav id="primary-nav" className={menuOpen ? "open" : ""}>
            <a
              href="#top"
              className={activeNav === "top" ? "active" : ""}
              onClick={() => selectSection("top")}
            >
              {t.nav.home}
            </a>

            {navSections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeNav === id ? "active" : ""}
                onClick={() => selectSection(id)}
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <SocialLinks />
            {/* Hidden below 700px — the fixed mobile-order-bar takes over there. */}
            <button className="header-order" onClick={onOrder}>
              {t.primary}
            </button>
          </div>
        </div>
      </div>

      {/* Phone-only: dims the rest of the page while the drawer is open and
          closes it on tap, so users aren't forced to hit the × button. */}
      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}

      {/* Phone-only: a fixed bottom bar, shown once the hero (and its own
          order button) has scrolled out of view. */}
      <div className={`mobile-order-bar${pastHero ? " is-visible" : ""}`}>
        <button onClick={onOrder}>{t.primary}</button>
      </div>
    </header>
  );
}
