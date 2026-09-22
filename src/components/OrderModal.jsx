import { useEffect, useRef } from "react";
import { SocialIcon } from "./SocialLinks";
import { orderChannels } from "../config/siteConfig";

export function OrderModal({ t, intent, onClose }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const custom = intent === "custom";

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;
      const controls = dialogRef.current?.querySelectorAll("button, a[href]");
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="modal"
      ref={dialogRef}
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
        <h2 id="order-modal-title">{custom ? t.customPage.orderTitle : t.where}</h2>
        <p>{custom ? t.customPage.orderText : t.whereText}</p>

        {orderChannels.map((channel) => (
          <a
            key={channel.id}
            href={custom && channel.id === "whatsapp"
              ? `${channel.url}?text=${encodeURIComponent(t.customPage.orderMessage)}`
              : channel.url}
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
