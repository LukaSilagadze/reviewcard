import { useEffect, useRef } from "react";
import { SocialIcon } from "./SocialLinks";
import { orderChannels } from "../config/siteConfig";

export function OrderModal({ t, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div>
        <button ref={closeRef} className="close" onClick={onClose} aria-label={t.a11y.close}>
          ×
        </button>

        <img src="/assets/icon.webp" alt="" width="65" height="65" />
        <h2 id="order-modal-title">{t.where}</h2>
        <p>{t.whereText}</p>

        {orderChannels.map((channel) => (
          <a
            key={channel.id}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon social={channel} size={22} />
            {channel.label}
            <b aria-hidden="true">↗</b>
          </a>
        ))}
      </div>
    </div>
  );
}
