import { useState } from "react";

export function Faq({ t, onOrder }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container faq-grid">
        <div>
          <h2>{t.faqTitle}</h2>
          <p>{t.faqPrompt}</p>
          <button className="text-btn" onClick={onOrder}>
            {t.message} ↗
          </button>
        </div>

        <div className="accordion">
          {t.faqs.map(([question, answer], i) => (
            <article className={openIndex === i ? "active" : ""} key={question}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{question}</span>
                <b aria-hidden="true">{openIndex === i ? "−" : "+"}</b>
              </button>
              <div className="answer" id={`faq-answer-${i}`} role="region">
                <p>{answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
