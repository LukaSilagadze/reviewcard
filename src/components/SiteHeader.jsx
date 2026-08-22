import { useState } from "react";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
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
        <b aria-hidden="true">⌄</b>
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

  const selectSection = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container">
          <Logo label={t.a11y.home} />

          <div className="header-info">
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <span aria-hidden="true">☎</span>
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <span aria-hidden="true">✉</span>
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

            <button className="mobile-order" onClick={onOrder}>
              {t.order} ↗
            </button>
          </nav>

          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
