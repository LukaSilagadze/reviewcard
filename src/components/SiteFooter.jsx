import { Logo } from "./Logo";
import { socials } from "../config/siteConfig";
import { footerNavSections } from "../data/navigation";

export function SiteFooter({ t }) {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo label={t.a11y.home} />
          <p>{t.footer}</p>
        </div>

        <div>
          <b>{t.footerNav}</b>
          {footerNavSections.map((id) => (
            <a key={id} href={`#${id}`}>
              {t.nav[id]}
            </a>
          ))}
        </div>

        <div>
          <b>{t.footerSocial}</b>
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="container copyright">
        © {new Date().getFullYear()} ReviewCard <span>{t.copyright}</span>
      </div>
    </footer>
  );
}
