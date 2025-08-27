"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL?: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.insights": "Insights",
    "nav.awards": "Awards",
    "nav.contact": "Contact",
    "nav.language": "العربية",

    // Hero Section
    "hero.title": "Strategic Leadership",
    "hero.subtitle": "Investment Excellence",
    "hero.description":
      "Former Major General in Qatar Armed Forces, now entrepreneur, advisor, and investor. Bridging local opportunities with international ambition.",
    "hero.cta": "Explore My Journey",
    "hero.contact": "Get In Touch",

    // About Section
    "about.title": "About General Hamed",
    "about.subtitle": "A Legacy of Service & Innovation",
    "about.military.title": "Military Leadership",
    "about.military.description":
      "Over three decades of dedicated service in the Qatar Armed Forces, instilling values of leadership, discipline, and integrity.",
    "about.business.title": "Business Excellence",
    "about.business.description":
      "Applying military principles to entrepreneurship, advisory, and investment across sports management, CSR, and business development.",
    "about.vision.title": "Vision",
    "about.vision.description":
      "To build a future-ready Qatar by empowering meaningful partnerships between local leadership and global enterprise.",
    "about.mission.title": "Mission",
    "about.mission.description":
      "Supporting expatriates and foreign investors in navigating Qatar's business landscape with hands-on guidance from setup to scaling.",

    // Portfolio Section
    "portfolio.title": "Strategic Partnerships",
    "portfolio.subtitle": "Building Qatar's Future",
    "portfolio.iaid.title": "IAID Academy",
    "portfolio.iaid.role": "Strategic Advisor & Partner",
    "portfolio.iaid.description":
      "Supporting Qatar's leading performing arts academy in nurturing creativity and cultural exchange among youth.",
    "portfolio.impact.title": "Impact Events",
    "portfolio.impact.role": "Co-Partner & Event Sponsor",
    "portfolio.impact.description":
      "Creating and scaling large-scale public events, exhibitions, and conferences focused on entertainment and national development.",
    "portfolio.planet.title": "Planet Scribbles Qatar",
    "portfolio.planet.role": "Mentor & Impact Investor",
    "portfolio.planet.description":
      "Championing early childhood development through arts-based learning and community engagement.",

    // Services
    "services.title": "Key Offerings",
    "services.advisory.title": "Business Advisory",
    "services.advisory.description":
      "End-to-end support for business setup in Qatar with legal, financial, and operational guidance.",
    "services.csr.title": "CSR Leadership",
    "services.csr.description": "Designing CSR frameworks aligned with ESG goals and community engagement initiatives.",
    "services.sports.title": "Sports Management",
    "services.sports.description":
      "Advising sports federations and promoting youth participation through development programs.",
    "services.events.title": "Event Planning",
    "services.events.description":
      "Conceptualizing cultural and corporate events with governmental approvals and sponsorship management.",

    // Awards Section
    "awards.title": "Awards & Recognition",
    "awards.subtitle": "Commitment to Excellence",
    "awards.lifetime.title": "Lifetime Service Medal",
    "awards.lifetime.description":
      "Qatar Armed Forces recognition for exceptional leadership and dedication as Major General.",
    "awards.csr.title": "CSR Excellence Award",
    "awards.csr.description":
      "Doha CSR Summit recognition for championing youth empowerment and social cohesion programs.",
    "awards.investment.title": "Strategic Investment Leadership",
    "awards.investment.description":
      "Qatar Business Forum award for facilitating foreign direct investment and business launches.",
    "awards.sports.title": "Community Sports Development",
    "awards.sports.description": "Ministry of Sports & Youth honor for expanding community-based sports programs.",
    "awards.cultural.title": "Cultural Partnership Recognition",
    "awards.cultural.description":
      "Ministry of Culture award for supporting arts, education, and creative initiatives.",

    // Contact Section
    "contact.title": "Let's Connect",
    "contact.subtitle": "Ready for Strategic Partnerships",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company/Organization",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Thank you! Your message has been sent successfully.",
    "contact.info.location": "Doha, Qatar",
    "contact.info.email": "contact@generalhamed.com",
    "contact.info.phone": "+974 XXXX XXXX",

    // Footer
    "footer.tagline": "Building Qatar's Future Through Strategic Leadership",
    "footer.links.about": "About",
    "footer.links.services": "Services",
    "footer.links.portfolio": "Portfolio",
    "footer.links.contact": "Contact",
    "footer.links.privacy": "Privacy Policy",
    "footer.links.terms": "Terms of Service",
    "footer.copyright": "© 2024 Hamed Al Ayafei. All rights reserved.",

    // Newsletter
    "newsletter.title": "Stay Updated",
    "newsletter.description":
      "Subscribe to receive insights on leadership, investment opportunities, and Qatar's business landscape.",
    "newsletter.placeholder": "Enter your email",
    "newsletter.subscribe": "Subscribe",
    "newsletter.success": "Successfully subscribed to our newsletter!",

    // WhatsApp
    "whatsapp.message": "Hello! I'm interested in learning more about your services.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عني",
    "nav.portfolio": "الأعمال",
    "nav.insights": "الرؤى",
    "nav.awards": "الجوائز",
    "nav.contact": "التواصل",
    "nav.language": "English",

    // Hero Section
    "hero.title": "القيادة الاستراتيجية",
    "hero.subtitle": "التميز في الاستثمار",
    "hero.description":
      "لواء سابق في القوات المسلحة القطرية، الآن رجل أعمال ومستشار ومستثمر. أربط بين الفرص المحلية والطموحات العالمية.",
    "hero.cta": "استكشف رحلتي",
    "hero.contact": "تواصل معي",

    // About Section
    "about.title": "نبذة عن اللواء حامد",
    "about.subtitle": "إرث من الخدمة والابتكار",
    "about.military.title": "القيادة العسكرية",
    "about.military.description":
      "أكثر من ثلاثة عقود من الخدمة المتفانية في القوات المسلحة القطرية، غرست قيم القيادة والانضباط والنزاهة.",
    "about.business.title": "التميز في الأعمال",
    "about.business.description":
      "تطبيق المبادئ العسكرية في ريادة الأعمال والاستشارات والاستثمار عبر إدارة الرياضة والمسؤولية الاجتماعية وتطوير الأعمال.",
    "about.vision.title": "الرؤية",
    "about.vision.description":
      "بناء قطر مستعدة للمستقبل من خلال تمكين الشراكات المعنوية بين القيادة المحلية والمؤسسات العالمية.",
    "about.mission.title": "المهمة",
    "about.mission.description":
      "دعم المغتربين والمستثمرين الأجانب في التنقل في المشهد التجاري القطري مع التوجيه العملي من التأسيس إلى التوسع.",

    // Portfolio Section
    "portfolio.title": "الشراكات الاستراتيجية",
    "portfolio.subtitle": "بناء مستقبل قطر",
    "portfolio.iaid.title": "أكاديمية IAID",
    "portfolio.iaid.role": "مستشار استراتيجي وشريك",
    "portfolio.iaid.description":
      "دعم أكاديمية الفنون الأدائية الرائدة في قطر في رعاية الإبداع والتبادل الثقافي بين الشباب.",
    "portfolio.impact.title": "فعاليات التأثير",
    "portfolio.impact.role": "شريك مؤسس وراعي فعاليات",
    "portfolio.impact.description":
      "إنشاء وتوسيع الفعاليات العامة واسعة النطاق والمعارض والمؤتمرات المركزة على الترفيه والتنمية الوطنية.",
    "portfolio.planet.title": "بلانت سكريبلز قطر",
    "portfolio.planet.role": "موجه ومستثمر تأثير",
    "portfolio.planet.description": "دعم تنمية الطفولة المبكرة من خلال التعلم القائم على الفنون والمشاركة المجتمعية.",

    // Services
    "services.title": "الخدمات الرئيسية",
    "services.advisory.title": "الاستشارات التجارية",
    "services.advisory.description": "دعم شامل لتأسيس الأعمال في قطر مع التوجيه القانوني والمالي والتشغيلي.",
    "services.csr.title": "قيادة المسؤولية الاجتماعية",
    "services.csr.description":
      "تصميم أطر المسؤولية الاجتماعية المتوافقة مع أهداف الحوكمة البيئية والاجتماعية ومبادرات المشاركة المجتمعية.",
    "services.sports.title": "إدارة الرياضة",
    "services.sports.description": "استشارة الاتحادات الرياضية وتعزيز مشاركة الشباب من خلال برامج التطوير.",
    "services.events.title": "تخطيط الفعاليات",
    "services.events.description": "تصور الفعاليات الثقافية والمؤسسية مع الموافقات الحكومية وإدارة الرعاية.",

    // Awards Section
    "awards.title": "الجوائز والتقدير",
    "awards.subtitle": "الالتزام بالتميز",
    "awards.lifetime.title": "وسام الخدمة مدى الحياة",
    "awards.lifetime.description": "تقدير القوات المسلحة القطرية للقيادة الاستثنائية والتفاني كلواء.",
    "awards.csr.title": "جائزة التميز في المسؤولية الاجتماعية",
    "awards.csr.description": "تقدير قمة الدوحة للمسؤولية الاجتماعية لدعم برامج تمكين الشباب والتماسك الاجتماعي.",
    "awards.investment.title": "قيادة الاستثمار الاستراتيجي",
    "awards.investment.description": "جائزة منتدى قطر للأعمال لتسهيل الاستثمار الأجنبي المباشر وإطلاق الأعمال.",
    "awards.sports.title": "تطوير الرياضة المجتمعية",
    "awards.sports.description": "تكريم وزارة الرياضة والشباب لتوسيع برامج الرياضة المجتمعية.",
    "awards.cultural.title": "تقدير الشراكة الثقافية",
    "awards.cultural.description": "جائزة وزارة الثقافة لدعم الفنون والتعليم والمبادرات الإبداعية.",

    // Contact Section
    "contact.title": "لنتواصل",
    "contact.subtitle": "مستعد للشراكات الاستراتيجية",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.company": "الشركة/المؤسسة",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "الرسالة",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.success": "شكراً لك! تم إرسال رسالتك بنجاح.",
    "contact.info.location": "الدوحة، قطر",
    "contact.info.email": "contact@generalhamed.com",
    "contact.info.phone": "+974 XXXX XXXX",

    // Footer
    "footer.tagline": "بناء مستقبل قطر من خلال القيادة الاستراتيجية",
    "footer.links.about": "نبذة عني",
    "footer.links.services": "الخدمات",
    "footer.links.portfolio": "الأعمال",
    "footer.links.contact": "التواصل",
    "footer.links.privacy": "سياسة الخصوصية",
    "footer.links.terms": "شروط الخدمة",
    "footer.copyright": "© 2024 حامد العيافي. جميع الحقوق محفوظة.",

    // Newsletter
    "newsletter.title": "ابق على اطلاع",
    "newsletter.description": "اشترك لتلقي رؤى حول القيادة وفرص الاستثمار والمشهد التجاري في قطر.",
    "newsletter.placeholder": "أدخل بريدك الإلكتروني",
    "newsletter.subscribe": "اشترك",
    "newsletter.success": "تم الاشتراك بنجاح في نشرتنا الإخبارية!",

    // WhatsApp
    "whatsapp.message": "مرحباً! أنا مهتم بمعرفة المزيد عن خدماتكم.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    const browserLanguage = navigator.language.startsWith("ar") ? "ar" : "en"
    const initialLanguage = savedLanguage || browserLanguage

    setLanguage(initialLanguage)
    document.documentElement.lang = initialLanguage
    document.documentElement.dir = initialLanguage === "ar" ? "rtl" : "ltr"
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
