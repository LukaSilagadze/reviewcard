/**
 * All user-facing text, in every supported language.
 *
 * Nothing rendered by the site should be written inline in a component — if a
 * string reaches the screen, it belongs here so both languages stay in step.
 *
 * `nav` is keyed by the section ids in `src/data/navigation.js`, and
 * `productDescriptions` by the product ids in `src/data/products.js`.
 */
import { customPageCopy } from "./customPage";

export const languages = ["ka", "en"];

export const languageNames = {
  ka: { label: "ქართული", short: "GE", flag: "/assets/flags/geo.webp" },
  en: { label: "English", short: "EN", flag: "/assets/flags/gb.svg" },
};

export const copy = {
  ka: {
    customPage: customPageCopy.ka,
    documentTitle: "შეფასების ბარათი და გუგლის შეფასების დასადგამი | ReviewCard",

    nav: {
      home: "მთავარი",
      products: "ბარათები",
      prices: "ფასები",
      how: "როგორ მუშაობს",
      custom: customPageCopy.ka.nav,
      delivery: "მიწოდება",
      partners: "პარტნიორები",
      faq: "ხშირი კითხვები",
    },

    hero: "NFC გუგლის შეფასების ბარათები ბიზნესებისთვის",
    intro:
      "ერთი შეხებით გახსენით თქვენი Google შეფასების გვერდი ან აირჩიეთ დამატებითი პერსონალური გვერდი — შეფასებებით, პირადი უკუკავშირით და სხვა შესაძლებლობებით.",
    primary: "შეუკვეთე",

    customersLabel: "ReviewCard-ის მომხმარებლები",
    customerPhotoAlt: "მომხმარებლის ფოტო",

    howTitle: "როგორ მუშაობს",
    stepLabel: "ნაბიჯი",
    steps: [
      ["მომხმარებელი ტელეფონით ეხება ReviewCard-ს"],
      ["იხსნება Google ან თქვენი პერსონალური გვერდი"],
      ["კლიენტი ტოვებს შეფასებას ან ირჩევს სასურველ მოქმედებას"],
    ],

    products: "შეარჩიე შენი Google Review ბარათი",
    productsSub:
      "ყველა პროდუქტი ინდივიდუალურად პროგრამირდება შენი ბიზნესისთვის. Google ბარათებისთვის აირჩიე პირდაპირი ბმული ან დამატებითი პერსონალური გვერდი.",
    productNames: {
      card: "Google-ის ოთხკუთხა მისაკრობი რევიუქარდი",
      stand: "Google-ის დასადგამი რევიუქარდი",
      sticker: "Google-ის მრგვალი მისაკრობი რევიუქარდი",
      instagram: "Instagram მისაკრობი რევიუქარდი",
      facebook: "Facebook მისაკრობი რევიუქარდი",
    },
    productDescriptions: {
      card: "NFC ბარათი, რომელიც ხსნის Google შეფასებას ან დამატებით პერსონალურ გვერდს.",
      stand: "გუგლის შეფასების დასადგამი კაფეებისთვის, რესტორნებისთვის, სალონებისა და მაღაზიებისთვის.",
      sticker: "კომპაქტური NFC სტიკერი დახლზე, მაგიდაზე ან სხვა ზედაპირზე დასაკრობად.",
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
      ...customPageCopy.ka.faqs,
      [
        "რა არის შეფასების ბარათი?",
        "NFC ბარათზე ტელეფონის შეხებით იხსნება თქვენი Google შეფასების გვერდი ან დამატებითი პერსონალური გვერდი, თქვენი არჩევანის მიხედვით.",
      ],
      [
        "რა არის გუგლის შეფასების დასადგამი?",
        "დახლზე ან მაგიდაზე დასადგმელი NFC დასადგამი ერთი შეხებით ხსნის Google შეფასებას ან დამატებით პერსონალურ გვერდს, თქვენი არჩევანის მიხედვით.",
      ],
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
      home: "ReviewCard - მთავარი",
      toggleMenu: "მენიუს გახსნა",
      chooseLanguage: "აირჩიე ენა",
      close: "დახურვა",
    },
  },

  en: {
    customPage: customPageCopy.en,
    documentTitle: "Review Card & Google Review Stand | ReviewCard",

    nav: {
      home: "Home",
      products: "Cards",
      prices: "Prices",
      how: "How it works",
      custom: customPageCopy.en.nav,
      delivery: "Delivery",
      partners: "Partners",
      faq: "FAQ",
    },

    hero: "NFC Google review cards for Businesses",
    intro:
      "One tap opens your Google review page—or choose an optional branded page for reviews, private feedback, and more.",
    primary: "Order",

    customersLabel: "ReviewCard customers",
    customerPhotoAlt: "Customer photo",

    howTitle: "How it works",
    stepLabel: "Step",
    steps: [
      ["Tap your phone on ReviewCard"],
      ["Google or your branded page opens"],
      ["Customers leave a review or choose their next action"],
    ],

    products: "Choose your Google Review card",
    productsSub: "Every product is individually programmed for your business. For Google review cards, choose a direct link or the optional branded page.",
    productNames: {
      card: "Google review card (adhesive)",
      stand: "Google Review Stand",
      sticker: "Google Review Sticker (adhesive)",
      instagram: "Instagram Follow Us Card (adhesive)",
      facebook: "Facebook Follow Us Card (adhesive)",
    },
    productDescriptions: {
      card: "NFC card that opens Google reviews or your optional branded page.",
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
      ...customPageCopy.en.faqs,
      [
        "What is a review card?",
        "An NFC card your customer taps with their phone to open your Google review destination or your optional branded customer page, depending on your choice.",
      ],
      [
        "What is a Google review stand?",
        "A counter or table NFC stand that opens your Google review destination or your optional branded customer page with one tap, depending on your choice.",
      ],
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
