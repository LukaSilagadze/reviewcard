import { useState } from "react";
import { useLanguage } from "./hooks/useLanguage";

import { SiteHeader } from "./components/SiteHeader";
import { Hero, HeroBenefits } from "./components/Hero";
import { CustomerCarousel } from "./components/CustomerCarousel";
import { HowItWorks } from "./components/HowItWorks";
import { Products } from "./components/Products";
import { Prices } from "./components/Prices";
import { Benefits } from "./components/Benefits";
import { Delivery } from "./components/Delivery";
import { Partners } from "./components/Partners";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { OrderCta } from "./components/OrderCta";
import { SiteFooter } from "./components/SiteFooter";
import { OrderModal } from "./components/OrderModal";

export default function App() {
  const { lang, setLang, t } = useLanguage();
  const [activeNav, setActiveNav] = useState("top");
  const [orderOpen, setOrderOpen] = useState(false);

  const openOrder = () => setOrderOpen(true);

  return (
    <>
      <SiteHeader
        lang={lang}
        setLang={setLang}
        t={t}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOrder={openOrder}
      />

      <main id="top">
        <Hero t={t} onOrder={openOrder} />
        <CustomerCarousel t={t} />
        <HowItWorks t={t} />
        <Products t={t} />
        <Prices t={t} />
        <Delivery t={t} />
        <Partners t={t} />
        <Faq t={t} onOrder={openOrder} />
        <OrderCta t={t} onOrder={openOrder} />
      </main>

      <SiteFooter t={t} />

      {orderOpen && <OrderModal t={t} onClose={() => setOrderOpen(false)} />}
    </>
  );
}
