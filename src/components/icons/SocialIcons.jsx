/**
 * Font Awesome brand icons (@fortawesome/free-brands-svg-icons) for every
 * network. Add one by adding a case here and a matching entry in
 * `src/config/siteConfig.js` — nothing else references these by name.
 *
 * Sizing goes through `style`, not width/height attributes: FontAwesomeIcon
 * sizes itself in `em` off the inherited font-size and ignores raw
 * width/height props — that's what SocialIcon (in ../SocialLinks) passes.
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function InstagramIcon(props) {
  return <FontAwesomeIcon icon={faInstagram} {...props} />;
}

export function FacebookIcon(props) {
  return <FontAwesomeIcon icon={faFacebookF} {...props} />;
}

export function TikTokIcon(props) {
  return <FontAwesomeIcon icon={faTiktok} {...props} />;
}

export function WhatsAppIcon(props) {
  return <FontAwesomeIcon icon={faWhatsapp} {...props} />;
}

export function PhoneIcon(props) {
  return <FontAwesomeIcon icon={faPhone} {...props} />;
}

export function EnvelopeIcon(props) {
  return <FontAwesomeIcon icon={faEnvelope} {...props} />;
}

export const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  whatsapp: WhatsAppIcon,
};
