// HARB! Website Constants

export const SITE_NAME = "HARB!"
export const SITE_TAGLINE = "Dijital Dominasyon Ajansı"
// Site Configuration - All contact and social media information
export const SITE_CONFIG = {
  // Contact Information
  contact: {
    email: "harbiagency@gmail.com",
    phone: "+90 535 763 19 08",
    phoneDisplay: "+90 535 763 19 08",
    address: "İstanbul, Türkiye",
    addressFull: "Sarıyer, İstanbul, Türkiye",
  },
  // Social Media Links
  social: {
    instagram: "https://instagram.com/harbiagency",
    linkedin: "",
    twitter: "",
    facebook: "",
    youtube: "",
  },
  // Business Information
  business: {
    companyName: "HARB! Dijital Dönüşüm Ajansı",
    companyNameShort: "HARB!",
    taxOffice: "",
    taxNumber: "",
    mersis: "",
  },
  // Site URLs
  urls: {
    website: "https://harbiagency.com",
    blog: "",
  },
} as const
// Navigation links
export const NAV_LINKS = [
  { href: "/about", label: "Hakkımızda" },
  { href: "/work", label: "İşler" },
  { href: "/services", label: "Hizmetler" },
  { href: "/team", label: "Ekip" },
  { href: "/contact", label: "İletişim" },
] as const

// Act section labels
export const ACT_LABELS = {
  act1: "BÖLÜM I: ORMAN KANUNU",
  act2: "BÖLÜM II: GÖRÜNMEZ ADAM SENDROMU",
  act3: "BÖLÜM III: KAOSUN İÇİNDEKİ DÜZEN",
  act4: "BÖLÜM IV: ARAÇLAR",
  act5: "BÖLÜM V: KANIT",
  act6: "BÖLÜM VI: SAVAŞ PLANI",
  act7: "BÖLÜM VII: FARK",
  act8: "BÖLÜM VIII: ETKİ",
  act9: "BÖLÜM IX: HAREKETSİZLİĞİN BEDELİ",
  act10: "BÖLÜM X: FİNAL",
} as const

// Services
export const SERVICES = [
  {
    id: "strategy",
    title: "STRATEJİ",
    description: "Savaş Planı Olmadan Zafer Olmaz.",
  },
  {
    id: "branding",
    title: "BRANDING",
    description: "Kaptansız Gemi Batırıyoruz.",
  },
  {
    id: "web",
    title: "WEB DEVELOPMENT",
    description: "Dijital Gökdelenler İnşa Ediyoruz.",
  },
  {
    id: "production",
    title: "PRODUCTION",
    description: "Okutmuyoruz, İzletiyoruz.",
  },
] as const

export const STATS = [
  { value: "150+", label: "Proje" },
  { value: "98%", label: "Müşteri Memnuniyeti" },
  { value: "5x", label: "Ortalama ROI" },
  { value: "24/7", label: "Destek" },
] as const

// Battle plan steps
export const BATTLE_PLAN = [
  {
    step: "01",
    title: "ANALİZ",
    description: "Masaya oturduğumuzda önce acı gerçekleri konuşuruz.",
  },
  {
    step: "02",
    title: "STRATEJİ",
    description: "Rotayı çizeriz. Hedef belli, mermiler hazır.",
  },
  {
    step: "03",
    title: "ZAFER",
    description: "Lansman ve sonrası. Rakiplere geçmiş olsun.",
  },
] as const

// Comparison data
export const COMPARISON = {
  others: [
    '"Evet efendim"ci yaklaşım',
    "Bitmeyen revizeler",
    "Sıkıcı şablonlar",
  ],
  harbi: [
    '"Hayır" diyebilen profesyoneller',
    "Veri odaklı kararlar",
    "DOMİNASYON",
  ],
} as const
