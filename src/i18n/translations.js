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
      products: "პროდუქტები",
      prices: "ფასები",
      how: "როგორ მუშაობს",
      delivery: "მიწოდება",
      partners: "პარტნიორები",
      faq: "ხშირი კითხვები",
    },

    order: "შეკვეთა",
    hero: "გაუმარტივე შენს მომხმარებელს შეფასების დატოვება",
    intro:
      "ReviewCard ეხმარება შენს მომხმარებლებს მარტივად გახსნან შენი Google შეფასების გვერდი ტელეფონის ერთი შეხებით",
    primary: "შეუკვეთე",

    trust: [
      "მიწოდება მთელ საქართველოში",
      "NFC + QR",
      "აპლიკაცია არ არის საჭირო",
    ],

    /** The strip directly under the hero. Icon per entry lives in the component. */
    heroBenefits: [
      ["მარტივი მომხმარებლისთვის", "აპლიკაცია არ არის საჭირო"],
      ["სწრაფი", "დაახლოებით 2 სამუშაო დღე"],
      ["NFC + QR", "ორივე ტექნოლოგია ერთ ბარათზე"],
      ["აპის გარეშე", "მზადაა მიღებისთანავე"],
    ],

    customersLabel: "ReviewCard-ის მომხმარებლები",
    customerPhotoAlt: "მომხმარებლის ფოტო",

    howTitle: "როგორ მუშაობს",
    stepLabel: "ნაბიჯი",
    steps: [
      ["მიიტანე ტელეფონი ReviewCard-თან", "ან დაასკანერე QR კოდი."],
      ["იხსნება შესაბამისი გვერდი", "პირდაპირ ბრაუზერში, აპის გარეშე."],
      ["კლიენტი ტოვებს შეფასებას", "სულ რამდენიმე წამში."],
    ],

    products: "შეარჩიე შენი ReviewCard",
    productsSub:
      "ყველა პროდუქტი ინდივიდუალურად პროგრამირდება შენი ბიზნესისთვის.",
    price: "ფასი მალე დაემატება",
    productDescriptions: {
      card: "NFC + QR ბარათი, რომელიც ხსნის ბიზნესის Google შეფასების გვერდს.",
      stand: "სტენდი კაფეებისთვის, რესტორნებისთვის, სალონებისა და მაღაზიებისთვის.",
      sticker: "კომპაქტური NFC + QR სტიკერი დახლზე, მაგიდაზე ან სხვა ზედაპირზე.",
      instagram: "ერთი შეხებით ხსნის ბიზნესის Instagram გვერდს.",
      facebook: "ერთი შეხებით ხსნის ბიზნესის Facebook გვერდს.",
    },

    pricesTitle: "ფასები",
    pricesSub: "რაც მეტს შეუკვეთავ, მით უფრო იაფია თითოეული ცალი.",
    pricesProduct: "პროდუქტი",
    pricesUnit: "ცალი",
    pricesEach: "თითო",
    pricesNote: "ფასები მითითებულია ერთ ცალზე, ლარში (₾).",

    benefitsTitle: "ყველაფერი, რაც საჭიროა — და არაფერი ზედმეტი",
    benefits: [
      "მარტივი მომხმარებლისთვის",
      "სწრაფი",
      "NFC + QR",
      "აპის გარეშე",
      "შენს ბიზნესზე მორგებული",
      "მზადაა გამოსაყენებლად",
    ],

    delivery: "მიწოდება მთელ საქართველოში",
    deliveryText:
      "არ აქვს მნიშვნელობა სად მდებარეობს შენი ბიზნესი — ReviewCard-ს საქართველოს ნებისმიერ რეგიონში მოგაწვდით.",
    city: "დიდ ქალაქებში",
    cityTime: "დაახლოებით 2 სამუშაო დღე",
    other: "სხვა ლოკაციებში",
    otherTime: "2–4 სამუშაო დღე",

    map: "ReviewCard უკვე საქართველოს სხვადასხვა ქალაქშია",
    mapLabel: "საქართველოს რუკა მომხმარებლების ლოკაციებით",
    mapUnit: "ქალაქი და რეგიონი",

    partners: "ბიზნესები, რომლებმაც ReviewCard აირჩიეს",
    partnerLogoPlaceholder: "ლოგო",

    testimonials: "მომხმარებლების გამოცდილება",
    testimonialPlaceholder: "შეფასების სქრინშოტი",

    faqTitle: "ხშირად დასმული კითხვები",
    faqPrompt: "ვერ იპოვე პასუხი? მოგვწერე — სიამოვნებით დაგეხმარებით.",
    faqs: [
      [
        "როგორ მუშაობს ReviewCard?",
        "ტელეფონის შეხებით იხსნება მითითებული გვერდი. ასევე შესაძლებელია QR კოდის დასკანერება.",
      ],
      [
        "ყველა ტელეფონზე მუშაობს?",
        "მუშაობს თანამედროვე NFC-ის მქონე სმარტფონების უმეტესობაზე. QR კოდი ალტერნატივაა.",
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
      previous: "წინა",
      next: "შემდეგი",
      close: "დახურვა",
    },
  },

  en: {
    documentTitle: "ReviewCard | Get more Google reviews",

    nav: {
      home: "Home",
      products: "Products",
      prices: "Prices",
      how: "How it works",
      delivery: "Delivery",
      partners: "Partners",
      faq: "FAQ",
    },

    order: "Order",
    hero: "Get more Google reviews with one tap",
    intro:
      "ReviewCard helps customers open your Google review page instantly with one phone tap",
    primary: "Order ReviewCard",

    trust: ["Delivery across Georgia", "NFC + QR", "No app required"],

    heroBenefits: [
      ["Easy for customers", "No app required"],
      ["Fast", "Around 2 working days"],
      ["NFC + QR", "Both on every card"],
      ["No app required", "Ready out of the box"],
    ],

    customersLabel: "ReviewCard customers",
    customerPhotoAlt: "Customer photo",

    howTitle: "How it works",
    stepLabel: "Step",
    steps: [
      ["Tap a phone on ReviewCard", "Or scan the QR code."],
      ["The right page opens", "Directly in the browser, with no app."],
      ["Your customer leaves a review", "In just a few seconds."],
    ],

    products: "Choose your ReviewCard",
    productsSub: "Every product is programmed specifically for your business.",
    price: "Price coming soon",
    productDescriptions: {
      card: "NFC + QR card that opens the business's Google review page.",
      stand: "A countertop version for cafés, restaurants, salons and stores.",
      sticker: "A compact NFC + QR sticker for counters, tables or other surfaces.",
      instagram: "Opens the business's Instagram page with one tap.",
      facebook: "Opens the business's Facebook page with one tap.",
    },

    pricesTitle: "Prices",
    pricesSub: "The more you order, the less each one costs.",
    pricesProduct: "Product",
    pricesUnit: "pcs",
    pricesEach: "each",
    pricesNote: "Prices shown per unit, in Georgian Lari (₾).",

    benefitsTitle: "Everything you need. Nothing you don’t.",
    benefits: [
      "Easy for customers",
      "Fast",
      "NFC + QR",
      "No app required",
      "Made for your business",
      "Ready to use",
    ],

    delivery: "Delivery across all of Georgia",
    deliveryText:
      "Wherever your business is located, we deliver ReviewCard to every region of Georgia.",
    city: "Major cities",
    cityTime: "Around 2 working days",
    other: "Other locations",
    otherTime: "2–4 working days",

    map: "ReviewCard is already used across Georgia",
    mapLabel: "Map of Georgia with customer locations",
    mapUnit: "cities & regions",

    partners: "Businesses that chose ReviewCard",
    partnerLogoPlaceholder: "LOGO",

    testimonials: "Customer experiences",
    testimonialPlaceholder: "Review screenshot",

    faqTitle: "Frequently asked questions",
    faqPrompt: "Still have a question? Message us — we’ll be happy to help.",
    faqs: [
      [
        "How does ReviewCard work?",
        "Tapping the phone opens the configured page. QR scanning is also available.",
      ],
      [
        "Does it work on every phone?",
        "It works with most modern NFC-enabled smartphones. QR provides an alternative.",
      ],
      ["Does the customer need an app?", "No."],
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
      "A simpler way to get more Google reviews and social media followers.",
    footerNav: "Navigation",
    footerSocial: "Social media",
    copyright: "Made for growing businesses in Georgia.",

    a11y: {
      home: "ReviewCard home",
      toggleMenu: "Toggle menu",
      chooseLanguage: "Choose language",
      previous: "Previous",
      next: "Next",
      close: "Close",
    },
  },
};
