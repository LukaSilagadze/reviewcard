import { useEffect, useState } from 'react';
import { copy } from './i18n/translations';
import { products } from './data/products';
import { locations } from './data/locations';
import { socials, partners, testimonials } from './config/siteConfig';

const Icon = ({ name }) => <span className="icon" aria-hidden="true">{{tap:'⌁',link:'↗',star:'✦',easy:'✓',fast:'⚡',nfc:'◉',app:'⊘',tune:'⌘',ready:'↗'}[name]}</span>;

function Logo() { return <a className="logo" href="#top" aria-label="ReviewCard home"><img src="/assets/logo.png" alt="ReviewCard" /></a>; }

function App() {
  const [lang,setLang]=useState('ka'), [menu,setMenu]=useState(false), [modal,setModal]=useState(false), [faq,setFaq]=useState(0), [slide,setSlide]=useState(0);
  const t=copy[lang];
  useEffect(()=>{ document.documentElement.lang=lang; document.title=lang==='ka'?'ReviewCard | მიიღე მეტი Google შეფასება':'ReviewCard | Get more Google reviews'; },[lang]);
  useEffect(()=>{ const timer=setInterval(()=>setSlide(s=>(s+1)%testimonials.length),5000); return()=>clearInterval(timer); },[]);
  const ids=['products','how','delivery','partners','faq'];
  const goOrder=()=>setModal(true);
  return <>
    <header className="nav"><div className="container nav-inner"><Logo/><button className="hamb" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label="Toggle menu">{menu?'×':'☰'}</button>
      <nav className={menu?'open':''}>{t.nav.map((x,i)=><a key={x} href={'#'+ids[i]} onClick={()=>setMenu(false)}>{x}</a>)}<button className="lang" onClick={()=>setLang(lang==='ka'?'en':'ka')}>{lang==='ka'?'EN':'KA'}</button><button className="btn small" onClick={goOrder}>{t.order} <span>↗</span></button></nav>
    </div></header>
    <main id="top">
      <section className="hero"><div className="hero-ticker"><div>{[...t.trust,...t.trust].map((x,i)=><span key={i}>{x}<b>•</b></span>)}</div></div><div className="hero-overlay"/><div className="container hero-center"><div className="badge"><span>●</span>{t.badge}</div><h1>{t.hero}</h1><p>{t.intro}</p><div className="actions"><button className="btn" onClick={goOrder}>{t.primary}<span>↗</span></button><a className="btn hero-secondary" href="#how">{t.secondary}<span>↓</span></a></div></div></section>
      <div className="hero-benefits"><div className="container">{t.benefits.slice(0,4).map((x,i)=><div key={x}><span>{['⚙','⚡','◉','✓'][i]}</span><p><b>{x}</b><small>{[t.trust[2],t.cityTime,'NFC + QR',lang==='ka'?'მზადაა მიღებისთანავე':'Ready out of the box'][i]}</small></p></div>)}</div></div>

      <section id="how" className="section how-section"><div className="container"><div className="how-heading"><div className="eyebrow">01 · {lang==='ka'?'როგორ მუშაობს':'HOW IT WORKS'}</div><h2>{t.howTitle}</h2><p>{lang==='ka'?'ReviewCard წინასწარ პროგრამირდება შენი ბიზნესისთვის და მიღებისთანავე მზადაა გამოსაყენებლად.':'Your ReviewCard arrives pre-programmed for your business and ready to use instantly.'}</p></div><div className="steps">{t.steps.map((s,i)=><article className={`step-card step-card-${i+1}`} key={s[0]}><div className="step-scene" aria-hidden="true"><div className="scene-card"><img src="/assets/icon.png" alt=""/><span>Review us on</span><b>Google</b><small>★★★★★</small></div><div className="scene-phone"><div className="phone-top"/><span>{i===0?'◉':i===1?'↗':'★★★★★'}</span><b>{i===0?'NFC':i===1?'Open':'Review'}</b><i/></div><div className="signal">)))</div></div><div className="step-shade"/><div className="step-content"><span className="step-number">{lang==='ka'?`ნაბიჯი ${i+1}`:`Step ${i+1}`}</span><h3>{s[0]}</h3><p>{s[1]}</p></div></article>)}</div></div></section>

      <section id="products" className="section soft"><div className="container"><div className="eyebrow">02 · {lang==='ka'?'პროდუქტები':'PRODUCTS'}</div><div className="section-head"><h2>{t.products}</h2><p>{t.productsSub}</p></div><div className="product-grid">{products.map((p,i)=><article className={'p-card p-'+p.id} key={p.id}><div className="p-visual"><span className="mock">{p.icon}<small>ReviewCard</small></span><em>{i<3?'Google':i===3?'Instagram':'Facebook'}</em></div><div className="p-body"><h3>{p.name}</h3><p>{t.descriptions[i]}</p><div><strong>{t.price}</strong><button className="circle-btn" onClick={goOrder} aria-label={`${t.order} ${p.name}`}>↗</button></div></div></article>)}</div></div></section>

      <section className="section benefits"><div className="container"><div className="section-head centered"><h2>{t.benefitsTitle}</h2></div><div className="benefit-grid">{t.benefits.map((b,i)=><div key={b}><Icon name={['easy','fast','nfc','app','tune','ready'][i]}/><span>{b}</span></div>)}</div></div></section>

      <section id="delivery" className="delivery section"><div className="container delivery-grid"><div><div className="eyebrow light">03 · {lang==='ka'?'მიწოდება':'DELIVERY'}</div><h2>{t.delivery}</h2><p>{t.deliveryText}</p><div className="delivery-times"><div><span>⌖</span><p>{t.city}<strong>{t.cityTime}</strong></p></div><div><span>▰</span><p>{t.other}<strong>{t.otherTime}</strong></p></div></div></div><div className="route-art"><div className="route">• · · · · · · · · · · · · · · · · · · · · · · · · · ●</div><span className="pin">⌖</span><span className="box">▣</span><b>ReviewCard</b></div></div></section>

      <section className="section map-section"><div className="container"><div className="section-head centered"><div className="eyebrow">04 · {lang==='ka'?'ჩვენი გეოგრაფია':'OUR REACH'}</div><h2>{t.map}</h2></div><div className="map-wrap"><svg viewBox="0 0 900 420" role="img" aria-label="Map of Georgia with customer locations"><path d="M65 240L98 190l72-15 49-63 63 5 50-39 76 35 84-30 68 49 89 3 53 52 75 25 55 69-48 49-109-15-70 28-80-16-57 35-91-21-66 25-68-35-85 4-45-42-68-18z" fill="#e8f2ff" stroke="#8ab9ff" strokeWidth="3"/>{locations.map(([en,ka,x,y])=><g className="map-pin" key={en} transform={`translate(${x*9-12} ${y*4})`}><circle r="14"/><circle r="5"/><text y="-20" textAnchor="middle">{lang==='ka'?ka:en}</text></g>)}</svg><div className="map-note"><span>●</span>{locations.length} {lang==='ka'?'ქალაქი და რეგიონი':'cities & regions'}</div></div></div></section>

      <section id="partners" className="section partners"><div className="section-head centered"><div className="eyebrow">05 · {lang==='ka'?'პარტნიორები':'PARTNERS'}</div><h2>{t.partners}</h2></div><div className="logo-track">{[...partners,...partners].map((p,i)=><div className="partner-logo" key={i}><span>◇</span><i>{lang==='ka'?'ლოგო':'LOGO'}</i></div>)}</div></section>

      <section className="section testimonials"><div className="container"><div className="section-head"><div><div className="eyebrow">06 · {lang==='ka'?'გამოხმაურება':'TESTIMONIALS'}</div><h2>{t.testimonials}</h2></div><div className="arrows"><button onClick={()=>setSlide((slide-1+5)%5)} aria-label="Previous">←</button><button onClick={()=>setSlide((slide+1)%5)} aria-label="Next">→</button></div></div><div className="test-window"><div className="test-track" style={{transform:`translateX(-${slide*33.333}%)`}}>{testimonials.map((x,i)=><article key={x}><div className="shot"><div className="shot-head"><span/><b>Review screenshot</b></div><div className="lines"><i/><i/><i/><i/></div><div className="shot-foot">♡　◯　⌁</div></div><small>{String(i+1).padStart(2,'0')} / {String(testimonials.length).padStart(2,'0')}</small></article>)}</div></div></div></section>

      <section id="faq" className="section faq"><div className="container faq-grid"><div><div className="eyebrow">07 · FAQ</div><h2>{t.faqTitle}</h2><p>{lang==='ka'?'ვერ იპოვე პასუხი? მოგვწერე — სიამოვნებით დაგეხმარებით.':'Still have a question? Message us — we’ll be happy to help.'}</p><button className="text-btn" onClick={goOrder}>{t.message} ↗</button></div><div className="accordion">{t.faqs.map((q,i)=><article className={faq===i?'active':''} key={q[0]}><button onClick={()=>setFaq(faq===i?-1:i)} aria-expanded={faq===i}><span>{q[0]}</span><b>{faq===i?'−':'+'}</b></button><div className="answer"><p>{q[1]}</p></div></article>)}</div></div></section>

      <section id="order" className="order section"><div className="container"><div className="order-inner"><img src="/assets/icon.png" alt=""/><div><h2>{t.cta}</h2><p>{t.ctaText}</p></div><button className="btn white" onClick={goOrder}>{t.message}<span>↗</span></button></div></div></section>
    </main>
    <footer><div className="container footer-grid"><div><Logo light/><p>{t.footer}</p></div><div><b>{lang==='ka'?'ნავიგაცია':'Navigation'}</b>{t.nav.slice(0,4).map((x,i)=><a key={x} href={'#'+ids[i]}>{x}</a>)}</div><div><b>{lang==='ka'?'სოციალური მედია':'Social media'}</b>{Object.keys(socials).map(s=><a key={s} href={socials[s]}>{s[0].toUpperCase()+s.slice(1)} ↗</a>)}</div></div><div className="container copyright">© {new Date().getFullYear()} ReviewCard <span>Made for growing businesses in Georgia.</span></div></footer>
    {modal&&<div className="modal" role="dialog" aria-modal="true" onMouseDown={e=>e.target===e.currentTarget&&setModal(false)}><div><button className="close" onClick={()=>setModal(false)} aria-label="Close">×</button><img src="/assets/icon.png" alt=""/><h2>{t.where}</h2><p>{lang==='ka'?'აირჩიე შენთვის მოსახერხებელი პლატფორმა':'Choose the platform that works best for you.'}</p>{['instagram','facebook','whatsapp'].map(s=><a href={socials[s]} key={s}><span>{s==='instagram'?'◎':s==='facebook'?'f':'◉'}</span>{s[0].toUpperCase()+s.slice(1)}<b>↗</b></a>)}</div></div>}
  </>;
}

export default App;
