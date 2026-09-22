import { useState } from "react";
import { useLanguage } from "./hooks/useLanguage";
import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { CustomerCarousel } from "./components/CustomerCarousel";
import { HowItWorks } from "./components/HowItWorks";
import { CustomPage } from "./components/CustomPage";
import { Products } from "./components/Products";
import { Prices } from "./components/Prices";
import { Delivery } from "./components/Delivery";
import { Partners } from "./components/Partners";
import { Faq } from "./components/Faq";
import { OrderCta } from "./components/OrderCta";
import { SiteFooter } from "./components/SiteFooter";
import { OrderModal } from "./components/OrderModal";

export default function App() {
  const { lang, setLang, t } = useLanguage();
  const [activeNav, setActiveNav] = useState("top");
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderIntent, setOrderIntent] = useState(null);

  const openOrder = () => {
    setOrderIntent(null);
    setOrderOpen(true);
  };
  const openCustomOrder = () => {
    setOrderIntent("custom");
    setOrderOpen(true);
  };

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
        <Partners t={t} />
        <CustomerCarousel t={t} />
        <HowItWorks t={t} />
        <CustomPage t={t} lang={lang} onOrder={openCustomOrder} />
        <Products t={t} />
        <Prices t={t} />
        <Delivery t={t} />
        <Faq t={t} onOrder={openOrder} />
        <OrderCta t={t} onOrder={openOrder} />
      </main>

      <SiteFooter t={t} />

      {orderOpen && <OrderModal t={t} intent={orderIntent} onClose={() => setOrderOpen(false)} />}
    </>
  );
}
