import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCheck, faCommentDots, faMugHot, faRotateLeft, faStar, faWifi } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "./SocialLinks";
import { customerDemoCopy, demoBusiness, demoLanguages } from "../i18n/customPage";

const platforms = [
  { id: "facebook", label: "Facebook" },
  { id: "instagram", label: "Instagram" },
  { id: "tiktok", label: "TikTok" },
];
const featureIcons = [faStar, faCommentDots, faArrowRight, faWifi];

function CustomerDemo({ initialLanguage, headingRef }) {
  const [language, setLanguage] = useState(initialLanguage);
  const [screen, setScreen] = useState("home");
  const [comment, setComment] = useState("");
  const [platform, setPlatform] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [copying, setCopying] = useState(false);
  const focusOnChange = useRef(false);
  const copyAttempt = useRef(0);
  const d = customerDemoCopy[language];

  useEffect(() => {
    if (focusOnChange.current) {
      headingRef.current?.focus({ preventScroll: true });
      focusOnChange.current = false;
    }
  }, [screen, headingRef]);

  useEffect(() => () => { copyAttempt.current += 1; }, []);

  function show(next) {
    copyAttempt.current += 1;
    setCopyStatus("");
    setCopying(false);
    focusOnChange.current = true;
    setScreen(next);
  }

  function reset() {
    setComment("");
    setPlatform("");
    show("home");
    if (screen === "home") headingRef.current?.focus({ preventScroll: true });
  }

  async function copyPassword() {
    const attempt = ++copyAttempt.current;
    setCopying(true);
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(demoBusiness.password);
      if (attempt === copyAttempt.current) setCopyStatus("copied");
    } catch {
      if (attempt === copyAttempt.current) setCopyStatus("copyFailed");
    } finally {
      if (attempt === copyAttempt.current) setCopying(false);
    }
  }

  const titles = { home: d.welcome, google: d.googleTitle, feedback: d.feedbackTitle, thanks: d.thanks, social: d.socialTitle, wifi: d.wifi };

  return (
    <div className="customer-demo" lang={language} onKeyDown={(event) => {
      if (event.key === "Escape" && screen !== "home") { event.preventDefault(); show("home"); }
    }}>
      <div className="demo-toolbar">
        {screen !== "home" ? (
          <button className="demo-back" onClick={() => show("home")}><FontAwesomeIcon icon={faArrowLeft} /> {d.back}</button>
        ) : <span className="demo-accent-dot" aria-hidden="true" />}
        <label className="demo-language">
          <span className="sr-only">{d.language}</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value)}>
            {Object.entries(demoLanguages).map(([code, label]) => <option key={code} value={code}>{label}</option>)}
          </select>
        </label>
      </div>

      <div className="demo-business">
        <div className="demo-logo" aria-hidden="true"><FontAwesomeIcon icon={faMugHot} /></div>
        <p>{demoBusiness.name}</p>
      </div>

      <div className={`demo-content demo-content-${screen}`}>
        <h3 ref={headingRef} tabIndex={-1}>{titles[screen]}</h3>

        {screen === "home" && <>
          <div className="demo-choices">
            <button onClick={() => show("google")}><FontAwesomeIcon icon={faStar} /><span>{d.google}</span></button>
            <button onClick={() => show("feedback")}><FontAwesomeIcon icon={faCommentDots} /><span>{d.feedback}</span></button>
          </div>
          <p className="demo-follow">{d.follow}</p>
          <div className="demo-socials">
            {platforms.map((social) => <button className={`demo-social-${social.id}`} key={social.id} onClick={() => { setPlatform(social.label); show("social"); }}>
              <SocialIcon social={social} size={22} /><span>{social.label}</span><span aria-hidden="true">↗</span>
            </button>)}
          </div>
          <button className="demo-wifi" onClick={() => show("wifi")}><FontAwesomeIcon icon={faWifi} />{d.wifi}</button>
        </>}

        {screen === "feedback" && <form onSubmit={(event) => { event.preventDefault(); setComment(""); show("thanks"); }}>
          <p className="demo-help">{d.anonymous}</p>
          <label className="demo-comment-label" htmlFor="demo-comment">{d.comment}</label>
          <textarea id="demo-comment" rows={4} placeholder={d.placeholder} value={comment} onChange={(event) => setComment(event.target.value)} />
          <button className="demo-primary" type="submit">{d.send}</button>
          <button className="demo-text-button" type="button" onClick={() => show("google")}>{d.googleAlternative}</button>
          <p className="demo-help">{d.simulation}</p>
        </form>}

        {["google", "thanks", "social"].includes(screen) && <div className="demo-explanation">
          <div className="demo-state-icon" aria-hidden="true"><FontAwesomeIcon icon={screen === "thanks" ? faCheck : faArrowRight} /></div>
          <p>{screen === "google" ? d.googleBody : screen === "thanks" ? d.thanksBody : d.socialBody.replace("{platform}", platform)}</p>
          <p className="demo-help">{d.simulation}</p>
          <button className="demo-primary" onClick={() => show("home")}>{d.back}</button>
        </div>}

        {screen === "wifi" && <div className="demo-wifi-panel">
          <FontAwesomeIcon icon={faWifi} className="demo-wifi-icon" />
          <dl><dt>{d.network}</dt><dd>{demoBusiness.network}</dd><dt>{d.password}</dt><dd><code>{demoBusiness.password}</code></dd></dl>
          <button className="demo-primary" onClick={copyPassword} disabled={copying}>{copyStatus === "copied" ? d.copied : d.copy}</button>
          <p role="status" className="demo-copy-status">{copyStatus ? d[copyStatus] : ""}</p>
          <p className="demo-help">{d.wifiHelp}</p>
        </div>}
      </div>

      <div className="demo-footer"><span>{d.powered}</span><img src="/assets/icon.webp" alt="" width="20" height="20" /><strong>ReviewCard</strong></div>
      <button className="demo-reset" onClick={reset}><FontAwesomeIcon icon={faRotateLeft} /> {d.reset}</button>
    </div>
  );
}

export function CustomPage({ t, lang, onOrder }) {
  const c = t.customPage;
  const previewRef = useRef(null);
  const headingRef = useRef(null);

  function tryDemo() {
    previewRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    headingRef.current?.focus({ preventScroll: true });
  }

  return (
    <section id="custom" className="section custom-page" aria-labelledby="custom-title">
      <div className="container custom-page-grid">
        <div className="custom-intro">
          <p className="custom-eyebrow">{c.eyebrow}</p>
          <h2 id="custom-title">{c.title}</h2>
          <p className="custom-description">{c.description}</p>
          <ul className="custom-benefits">{c.benefits.map((benefit, index) => <li key={benefit}><FontAwesomeIcon icon={featureIcons[index]} /><span>{benefit}</span></li>)}</ul>
          <div className="custom-price"><strong>{c.price}</strong><p>{c.priceDetail}</p></div>
          <button className="custom-demo-button" onClick={tryDemo}>{c.tryDemo}<FontAwesomeIcon icon={faArrowRight} /></button>
          <p className="custom-languages">{c.languages}</p>
        </div>

        <div className="custom-preview" ref={previewRef}>
          <p className="custom-demo-label"><span aria-hidden="true" />{c.demoLabel}</p>
          <CustomerDemo key={lang} initialLanguage={lang} headingRef={headingRef} />
          <p className="custom-demo-hint">{c.demoHint}</p>
        </div>

        <div className="custom-purchase">
          <button className="btn" onClick={onOrder}>{c.order}<span aria-hidden="true">↗</span></button>
          <p>{c.reassurance}</p>
          <div className="custom-setup"><h3>{c.setupTitle}</h3><p>{c.setup}</p></div>
        </div>
      </div>
    </section>
  );
}
