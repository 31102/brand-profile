"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Briefcase, Heart, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const values = [
  {
    icon: Shield,
    title: {
      en: "Leadership with Purpose",
      ar: "القيادة الهادفة",
    },
    description: {
      en: "Guided by military discipline and strategic vision for Qatar's development.",
      ar: "موجهة بالانضباط العسكري والرؤية الاستراتيجية لتطوير قطر.",
    },
  },
  {
    icon: Briefcase,
    title: {
      en: "Global-Minded Collaboration",
      ar: "التعاون العالمي",
    },
    description: {
      en: "Bridging local opportunities with international business ambitions.",
      ar: "ربط الفرص المحلية بالطموحات التجارية الدولية.",
    },
  },
  {
    icon: Heart,
    title: {
      en: "Empowering Next Generation",
      ar: "تمكين الجيل القادم",
    },
    description: {
      en: "Committed to youth development and community engagement initiatives.",
      ar: "ملتزم بمبادرات تنمية الشباب والمشاركة المجتمعية.",
    },
  },
  {
    icon: Globe,
    title: {
      en: "National Progress",
      ar: "التقدم الوطني",
    },
    description: {
      en: "Every endeavor aligned with Qatar National Vision 2030 pillars.",
      ar: "كل مسعى متماشٍ مع ركائز رؤية قطر الوطنية 2030.",
    },
  },
]

export function AboutSection() {
  const { language, isRTL } = useLanguage()

  const content = {
    en: {
      badge: "About General Hamed",
      title: "From Military Excellence to Business Innovation",
      subtitle:
        "A distinguished career spanning three decades of military service, now channeling leadership expertise into strategic business ventures and community development.",
      militaryTitle: "Military Foundation",
      militaryText:
        "As a former Major General in the Qatar Armed Forces, my military tenure instilled the core values of leadership, discipline, integrity, and long-term strategic vision. These principles now guide every business decision and partnership I undertake.",
      entrepreneurialTitle: "Entrepreneurial Vision",
      entrepreneurialText:
        "Today, I apply military-grade strategic thinking to entrepreneurship, advisory roles, and investments across sports management, education, corporate social responsibility, and business development sectors.",
      missionTitle: "Mission Focus",
      missionText:
        "My focus lies in bridging the gap between local opportunities and international ambition, helping expatriates, investors, and startups establish and thrive in Qatar's dynamic business ecosystem.",
      valuesTitle: "Core Values",
      valuesSubtitle: "The principles that guide every decision and partnership",
      yearsLabel: "Years of Leadership",
    },
    ar: {
      badge: "عن اللواء حامد",
      title: "من التميز العسكري إلى الابتكار التجاري",
      subtitle:
        "مسيرة مميزة تمتد لثلاثة عقود من الخدمة العسكرية، والآن توجيه الخبرة القيادية نحو المشاريع التجارية الاستراتيجية وتنمية المجتمع.",
      militaryTitle: "الأساس العسكري",
      militaryText:
        "كلواء سابق في القوات المسلحة القطرية، غرست فترة خدمتي العسكرية القيم الأساسية للقيادة والانضباط والنزاهة والرؤية الاستراتيجية طويلة المدى. هذه المبادئ توجه الآن كل قرار تجاري وشراكة أقوم بها.",
      entrepreneurialTitle: "الرؤية الريادية",
      entrepreneurialText:
        "اليوم، أطبق التفكير الاستراتيجي بمستوى عسكري على ريادة الأعمال والأدوار الاستشارية والاستثمارات عبر إدارة الرياضة والتعليم والمسؤولية الاجتماعية للشركات وقطاعات تطوير الأعمال.",
      missionTitle: "تركيز المهمة",
      missionText:
        "يكمن تركيزي في سد الفجوة بين الفرص المحلية والطموح الدولي، مساعدة المغتربين والمستثمرين والشركات الناشئة على التأسيس والازدهار في النظام التجاري الديناميكي في قطر.",
      valuesTitle: "القيم الأساسية",
      valuesSubtitle: "المبادئ التي توجه كل قرار وشراكة",
      yearsLabel: "سنة من القيادة",
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className={`text-center mb-16 ${isRTL ? "rtl" : "ltr"}`}
        >
          <Badge variant="outline" className="mb-4">
            {content[language].badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-work-sans">{content[language].title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-open-sans">{content[language].subtitle}</p>
        </motion.div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${isRTL ? "rtl" : "ltr"}`}>
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary font-work-sans">{content[language].militaryTitle}</h3>
              <p className="text-muted-foreground font-open-sans leading-relaxed">{content[language].militaryText}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary font-work-sans">
                {content[language].entrepreneurialTitle}
              </h3>
              <p className="text-muted-foreground font-open-sans leading-relaxed">
                {content[language].entrepreneurialText}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary font-work-sans">{content[language].missionTitle}</h3>
              <p className="text-muted-foreground font-open-sans leading-relaxed">{content[language].missionText}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="relative"
          >
            <img
              src="/qatar-military-officer-transitioning-to-business-l.png"
              alt="General Hamed in Business Setting"
              className="w-full rounded-lg shadow-lg"
            />
            <div
              className={`absolute -bottom-6 ${isRTL ? "-right-6" : "-left-6"} bg-primary text-primary-foreground p-6 rounded-lg shadow-lg`}
            >
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm">{content[language].yearsLabel}</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className={`space-y-8 ${isRTL ? "rtl" : "ltr"}`}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4 font-work-sans">{content[language].valuesTitle}</h3>
            <p className="text-muted-foreground font-open-sans">{content[language].valuesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary font-work-sans">{value.title[language]}</h4>
                    <p className="text-sm text-muted-foreground font-open-sans">{value.description[language]}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
