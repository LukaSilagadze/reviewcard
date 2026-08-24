/**
 * All user-facing text, in every supported language.
 *
 * Nothing rendered by the site should be written inline in a component — if a
 * string reaches the screen, it belongs here so both languages stay in step.
 *
 * `nav` is keyed by the section ids in `src/data/navigation.js`, and
 * `productDescriptions` by the product ids in `src/data/products.js`.
 */
export const languages = ["ka", "en"];

export const languageNames = {
  ka: { label: "ქართული", short: "GE", flag: "/assets/flags/geo.webp" },
  en: { label: "English", short: "EN", flag: "/assets/flags/gb.svg" },
};

export const copy = {
  ka: {
    documentTitle: "ReviewCard | მიიღე მეტი Google შეფასება",

    nav: {
      home: "მთავარი",
      products: "ბარათები",
      prices: "ფასები",
      how: "როგორ მუშაობს",
      delivery: "მიწოდება",
      partners: "პარტნიორები",
      faq: "ხშირი კითხვები",
    },

    hero: "მიიღე მეტი Google შეფასება NFC ბარათით",
    intro:
      "ReviewCard-ის NFC ბარათი ეხმარება შენს მომხმარებლებს მარტივად გახსნან შენი Google შეფასების გვერდი ტელეფონის ერთი შეხებით",
    primary: "შეუკვეთე",

    customersLabel: "ReviewCard-ის მომხმარებლები",
    customerPhotoAlt: "მომხმარებლის ფოტო",

    howTitle: "როგორ მუშაობს",
    stepLabel: "ნაბიჯი",
    steps: [
      ["მომხმარებელი ტელეფონით ეხება ReviewCard-ს"],
      ["ავტომატურად იხსნება თქვენი ბიზნესის შეფასების გვერდი"],
      ["კლიენტი მარტივად ტოვებს შეფასებას"],
    ],

    products: "შეარჩიე შენი Google Review ბარათი",
    productsSub:
      "ყველა პროდუქტი ინდივიდუალურად პროგრამირდება შენი ბიზნესისთვის.",
    productDescriptions: {
      card: "NFC ბარათი, რომელიც ხსნის ბიზნესის Google შეფასების გვერდს.",
      stand: "სტენდი კაფეებისთვის, რესტორნებისთვის, სალონებისა და მაღაზიებისთვის.",
      sticker: "კომპაქტური NFC სტიკერი დახლზე, მაგიდაზე ან სხვა ზედაპირზე.",
      instagram: "ერთი შეხებით ხსნის ბიზნესის Instagram გვერდს.",
      facebook: "ერთი შეხებით ხსნის ბიზნესის Facebook გვერდს.",
    },

    pricesTitle: "ფასები",
    pricesSub: "რაც მეტს შეუკვეთავ, მით უფრო იაფია თითოეული ცალი.",
    pricesProduct: "პროდუქტი",
    pricesUnit: "ცალი",
    pricesEach: "თითო",
    pricesNote: "ფასები მითითებულია ერთ ცალზე, ლარში (₾).",

    delivery: "მიწოდება მთელ საქართველოში",
    deliveryText:
      "არ აქვს მნიშვნელობა სად მდებარეობს შენი ბიზნესი — ReviewCard-ს საქართველოს ნებისმიერ რეგიონში მოგაწვდით.",
    city: "დიდ ქალაქებში",
    cityTime: "დაახლოებით 2 სამუშაო დღე",
    other: "სხვა ლოკაციებში",
    otherTime: "2–4 სამუშაო დღე",

    deliveryMapTitle: "რუკა - ბიზნესები, რომლებსაც აქვთ ReviewCard საქართველოში",
    deliveryMapLabel: "ReviewCard-ები საქართველოს მასშტაბით",

    partners: "ბიზნესები, რომლებმაც ReviewCard აირჩიეს",
    partnerLogoPlaceholder: "ლოგო",

    faqTitle: "ხშირად დასმული კითხვები",
    faqPrompt: "ვერ იპოვე პასუხი? მოგვწერე — სიამოვნებით დაგეხმარებით.",
    faqs: [
      [
        "როგორ მუშაობს ReviewCard?",
        "ტელეფონის შეხებით იხსნება მითითებული გვერდი.",
      ],
      [
        "ყველა ტელეფონზე მუშაობს?",
        "მუშაობს თანამედროვე NFC-ის მქონე სმარტფონების უმეტესობაზე.",
      ],
      [
        "სჭირდება მომხმარებელს აპლიკაცია?",
        "არა. დამატებითი აპლიკაცია საჭირო არ არის.",
      ],
      [
        "შეიძლება ჩემს ბიზნესზე დაპროგრამება?",
        "დიახ. თითოეული ReviewCard კონკრეტული ბიზნესისთვის კონფიგურირდება.",
      ],
      [
        "თბილისის გარეთ მიგაქვთ?",
        "დიახ. მიწოდება ხელმისაწვდომია მთელ საქართველოში.",
      ],
      [
        "როგორ შევუკვეთო?",
        "მოგვწერე Instagram-ზე, Facebook-ზე ან WhatsApp-ზე.",
      ],
    ],

    cta: "გინდა ReviewCard შენი ბიზნესისთვის?",
    ctaText: "შეკვეთისთვის მოგვწერე Instagram-ზე, Facebook-ზე ან WhatsApp-ზე.",
    message: "მოგვწერე შეკვეთისთვის",
    where: "სად გირჩევნია მოგვწერო?",
    whereText: "აირჩიე შენთვის მოსახერხებელი პლატფორმა",

    footer:
      "მარტივი გზა მეტი Google შეფასებისა და სოციალური მედიის გამომწერის მისაღებად.",
    footerNav: "ნავიგაცია",
    footerSocial: "სოციალური მედია",
    copyright: "შექმნილია მზარდი ბიზნესებისთვის საქართველოში.",

    a11y: {
      home: "ReviewCard — მთავარი",
      toggleMenu: "მენიუს გახსნა",
      chooseLanguage: "აირჩიე ენა",
      close: "დახურვა",
    },
  },

  en: {
    documentTitle: "ReviewCard | Get more Google reviews",

    nav: {
      home: "Home",
      products: "Cards",
      prices: "Prices",
      how: "How it works",
      delivery: "Delivery",
      partners: "Partners",
      faq: "FAQ",
    },

    hero: "Get more Google reviews with an NFC review card",
    intro:
      "ReviewCard's NFC card helps your customers easily open your Google review page with one tap of the phone",
    primary: "Order",

    customersLabel: "ReviewCard customers",
    customerPhotoAlt: "Customer photo",

    howTitle: "How it works",
    stepLabel: "Step",
    steps: [
      ["Tap your phone on ReviewCard"],
      ["The right page opens"],
      ["The customer leaves a review"],
    ],

    products: "Choose your Google Review card",
    productsSub: "Every product is individually programmed for your business.",
    productDescriptions: {
      card: "NFC card that opens the business's Google review page.",
      stand: "A stand for cafés, restaurants, salons and stores.",
      sticker: "A compact NFC sticker for counters, tables or other surfaces.",
      instagram: "Opens the business's Instagram page with one tap.",
      facebook: "Opens the business's Facebook page with one tap.",
    },

    pricesTitle: "Prices",
    pricesSub: "The more you order, the cheaper each unit is.",
    pricesProduct: "Product",
    pricesUnit: "pcs",
    pricesEach: "each",
    pricesNote: "Prices shown per unit, in Georgian Lari (₾).",

    delivery: "Delivery across all of Georgia",
    deliveryText:
      "Wherever your business is located, we deliver ReviewCard to every region of Georgia.",
    city: "Major cities",
    cityTime: "Around 2 working days",
    other: "Other locations",
    otherTime: "2–4 working days",

    deliveryMapTitle: "Map — businesses using ReviewCard across Georgia",
    deliveryMapLabel: "ReviewCard across Georgia",

    partners: "Businesses that chose ReviewCard",
    partnerLogoPlaceholder: "LOGO",

    faqTitle: "Frequently asked questions",
    faqPrompt: "Couldn't find the answer? Message us — we'll be happy to help.",
    faqs: [
      [
        "How does ReviewCard work?",
        "Tapping the phone opens the configured page.",
      ],
      [
        "Does it work on every phone?",
        "It works with most modern NFC-enabled smartphones.",
      ],
      [
        "Does the customer need an app?",
        "No. No additional app is required.",
      ],
      [
        "Can it be programmed for my business?",
        "Yes. Each ReviewCard is configured for the specific business.",
      ],
      [
        "Do you deliver outside Tbilisi?",
        "Yes. Delivery is available across Georgia.",
      ],
      ["How do I order?", "Message us on Instagram, Facebook or WhatsApp."],
    ],

    cta: "Want ReviewCard for your business?",
    ctaText: "To order, message us on Instagram, Facebook or WhatsApp.",
    message: "Message us to order",
    where: "Where would you like to message us?",
    whereText: "Choose the platform that works best for you.",

    footer:
      "A simple way to get more Google reviews and social media followers.",
    footerNav: "Navigation",
    footerSocial: "Social media",
    copyright: "Made for growing businesses in Georgia.",

    a11y: {
      home: "ReviewCard — Home",
      toggleMenu: "Open menu",
      chooseLanguage: "Choose language",
      close: "Close",
    },
  },
};
