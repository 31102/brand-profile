"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { CheckCircle } from "lucide-react"

const timelineData = {
  en: [
    {
      year: "1990-2020",
      title: "Military Leadership Excellence",
      description:
        "Served as Major General in Qatar Armed Forces, leading strategic initiatives and mentoring future leaders.",
      achievements: ["Strategic Defense Planning", "Youth Mentorship Programs", "International Military Cooperation"],
    },
    {
      year: "2020-2022",
      title: "Business Transition & Advisory",
      description: "Transitioned to private sector, establishing advisory roles and strategic partnerships.",
      achievements: ["Founded Advisory Practice", "Established Key Partnerships", "Investment Strategy Development"],
    },
    {
      year: "2022-2023",
      title: "Strategic Partnerships Formation",
      description: "Formed partnerships with IAID Academy, Impact Events, and Planet Scribbles Qatar.",
      achievements: ["IAID Academy Partnership", "Impact Events Co-Partnership", "Planet Scribbles Mentorship"],
    },
    {
      year: "2023-Present",
      title: "Comprehensive Business Leadership",
      description: "Leading multiple initiatives across sports, education, CSR, and business development.",
      achievements: ["Multi-Sector Leadership", "CSR Excellence Recognition", "International Collaborations"],
    },
  ],
  ar: [
    {
      year: "1990-2020",
      title: "التميز في القيادة العسكرية",
      description: "خدم كلواء في القوات المسلحة القطرية، قاد المبادرات الاستراتيجية وتوجيه القادة المستقبليين.",
      achievements: ["التخطيط الدفاعي الاستراتيجي", "برامج توجيه الشباب", "التعاون العسكري الدولي"],
    },
    {
      year: "2020-2022",
      title: "الانتقال التجاري والاستشاري",
      description: "انتقل إلى القطاع الخاص، وأسس أدوار استشارية وشراكات استراتيجية.",
      achievements: ["تأسيس الممارسة الاستشارية", "إقامة شراكات رئيسية", "تطوير استراتيجية الاستثمار"],
    },
    {
      year: "2022-2023",
      title: "تكوين الشراكات الاستراتيجية",
      description: "شكل شراكات مع أكاديمية IAID وإمباكت إيفنتس وبلانيت سكريبلز قطر.",
      achievements: ["شراكة أكاديمية IAID", "شراكة إمباكت إيفنتس", "توجيه بلانيت سكريبلز"],
    },
    {
      year: "2023-الحاضر",
      title: "القيادة التجارية الشاملة",
      description: "يقود مبادرات متعددة عبر الرياضة والتعليم والمسؤولية الاجتماعية وتطوير الأعمال.",
      achievements: ["القيادة متعددة القطاعات", "تقدير التميز في المسؤولية الاجتماعية", "التعاونات الدولية"],
    },
  ],
}

export function TimelineInfographic() {
  const { language, isRTL } = useLanguage()
  const timeline = timelineData[language]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className={`text-center mb-16 ${isRTL ? "rtl" : "ltr"}`}
        >
          <Badge variant="outline" className="mb-4">
            {language === "ar" ? "رحلة القيادة" : "Leadership Journey"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-work-sans">
            {language === "ar" ? "مسيرة من الخدمة إلى الريادة" : "From Service to Entrepreneurship"}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary rounded-full"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} ${isRTL && index % 2 === 0 ? "flex-row-reverse" : isRTL && index % 2 !== 0 ? "flex-row" : ""}`}
              >
                <div className="flex-1 px-8">
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="font-work-sans">
                            {item.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-primary font-work-sans">{item.title}</h3>
                        <p className="text-muted-foreground font-open-sans leading-relaxed">{item.description}</p>
                        <div className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                              <span className="text-sm font-open-sans">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-lg"
                  ></motion.div>
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
