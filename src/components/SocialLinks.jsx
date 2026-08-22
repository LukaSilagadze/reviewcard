import { socials } from "../config/siteConfig";
import { socialIcons } from "./icons/SocialIcons";

/**
 * Renders the mark for a network — the icon set lives in ./icons/SocialIcons.
 * Sizing goes through `style`, not width/height attributes: the Font Awesome
 * icons in that set size themselves in `em` and ignore raw attributes.
 */
export function SocialIcon({ social, size = 16 }) {
  const Icon = socialIcons[social.id];
  return <Icon style={{ width: size, height: size }} aria-hidden="true" />;
}

/** The circular icon row in the lower header bar. */
export function SocialLinks() {
  return (
    <div className="header-socials">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon social={social} />
        </a>
      ))}
    </div>
  );
}
