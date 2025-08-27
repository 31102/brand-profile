"use client"

import Head from "next/head"
import { useLanguage } from "@/contexts/language-context"

const seoData = {
  en: {
    title: "General Hamed Al Ayafei - Strategic Leadership & Business Excellence in Qatar",
    description:
      "Former Major General turned entrepreneur, investor, and strategic advisor. Bridging local opportunities with international ambition across sports, education, CSR, and business development in Qatar.",
    keywords:
      "Qatar business leader, military leadership, strategic advisor, investment facilitation, CSR excellence, sports management, Qatar Vision 2030, business development, entrepreneurship",
    author: "General Hamed Al Ayafei",
  },
  ar: {
    title: "اللواء حامد العياضي - القيادة الاستراتيجية والتميز التجاري في قطر",
    description:
      "لواء سابق تحول إلى رائد أعمال ومستثمر ومستشار استراتيجي. ربط الفرص المحلية بالطموح الدولي عبر الرياضة والتعليم والمسؤولية الاجتماعية وتطوير الأعمال في قطر.",
    keywords:
      "قائد أعمال قطري، قيادة عسكرية، مستشار استراتيجي، تسهيل الاستثمار، تميز المسؤولية الاجتماعية، إدارة الرياضة، رؤية قطر 2030، تطوير الأعمال، ريادة الأعمال",
    author: "اللواء حامد العياضي",
  },
}

export function SEOHead() {
  const { language } = useLanguage()
  const seo = seoData[language]

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content="/professional-portrait-of-distinguished-qatar-milit.png" />
      <meta property="og:url" content="https://generalhamed.com" />
      <meta property="og:site_name" content={seo.author} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="/professional-portrait-of-distinguished-qatar-milit.png" />

      {/* Language and Region */}
      <meta name="language" content={language === "ar" ? "Arabic" : "English"} />
      <meta name="geo.region" content="QA" />
      <meta name="geo.placename" content="Doha" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: language === "ar" ? "اللواء حامد العياضي" : "General Hamed Al Ayafei",
            jobTitle: language === "ar" ? "مستشار استراتيجي ومستثمر" : "Strategic Advisor & Investor",
            description: seo.description,
            url: "https://generalhamed.com",
            image: "/professional-portrait-of-distinguished-qatar-milit.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Doha",
              addressCountry: "QA",
            },
            alumniOf: "Qatar Armed Forces",
            knowsAbout: [
              "Strategic Leadership",
              "Business Development",
              "Investment Facilitation",
              "Corporate Social Responsibility",
              "Sports Management",
            ],
          }),
        }}
      />

      <link rel="canonical" href="https://generalhamed.com" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  )
}
