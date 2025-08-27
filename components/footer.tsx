"use client"

import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Phone, Mail, Linkedin, Instagram, ArrowUp } from "lucide-react"

const footerData = {
  en: {
    name: "General Hamed Al Ayafei",
    description:
      "Strategic leadership meets innovation. Bridging local opportunities with international ambition through three decades of experience in military service and business excellence.",
    quickLinks: "Quick Links",
    services: "Services",
    copyright: "© 2024 General Hamed Al Ayafei. All rights reserved.",
    links: [
      { name: "About", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Insights", href: "#insights" },
      { name: "Awards", href: "#awards" },
      { name: "Contact", href: "#contact" },
    ],
    servicesList: [
      "Business Advisory",
      "Investment Facilitation",
      "CSR Leadership",
      "Sports Management",
      "Event Planning",
    ],
  },
  ar: {
    name: "اللواء حامد العياضي",
    description:
      "القيادة الاستراتيجية تلتقي بالابتكار. ربط الفرص المحلية بالطموح الدولي من خلال ثلاثة عقود من الخبرة في الخدمة العسكرية والتميز التجاري.",
    quickLinks: "روابط سريعة",
    services: "الخدمات",
    copyright: "© 2024 اللواء حامد العياضي. جميع الحقوق محفوظة.",
    links: [
      { name: "نبذة", href: "#about" },
      { name: "المحفظة", href: "#portfolio" },
      { name: "الرؤى", href: "#insights" },
      { name: "الجوائز", href: "#awards" },
      { name: "اتصل", href: "#contact" },
    ],
    servicesList: [
      "الاستشارات التجارية",
      "تسهيل الاستثمار",
      "قيادة المسؤولية الاجتماعية",
      "إدارة الرياضة",
      "تخطيط الفعاليات",
    ],
  },
}

export function Footer() {
  const { language, isRTL } = useLanguage()
  const content = footerData[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-2 md:px-8 py-16">
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? "rtl" : "ltr"}`}>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-2xl font-bold font-work-sans">{content.name}</h3>
            <p className="text-primary-foreground/80 font-open-sans leading-relaxed max-w-md">{content.description}</p>
            <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Button variant="secondary" size="sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="secondary" size="sm">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold font-work-sans">{content.quickLinks}</h4>
            <ul className="space-y-2">
              {content.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 font-open-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold font-work-sans">{content.services}</h4>
            <ul className="space-y-2">
              {content.servicesList.map((service) => (
                <li key={service} className="text-primary-foreground/80 font-open-sans">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? "md:flex-row-reverse" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className={`flex flex-col md:flex-row items-center gap-4 text-sm text-primary-foreground/80 font-open-sans ${isRTL ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {language === "ar" ? "الدوحة، قطر" : "Doha, Qatar"}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +974 XXXX XXXX
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              hamed@example.com
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <p className="text-sm text-primary-foreground/80 font-open-sans">{content.copyright}</p>
            <Button variant="secondary" size="sm" onClick={scrollToTop} className="rounded-full w-10 h-10 p-0">
              <ArrowUp className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
