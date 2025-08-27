"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { Users, Building2, Award, Calendar, TrendingUp, Globe } from "lucide-react"

const statistics = {
  en: [
    { icon: Calendar, value: "30+", label: "Years of Leadership", description: "Military & Business Experience" },
    { icon: Building2, value: "50+", label: "Strategic Partnerships", description: "Across Multiple Industries" },
    { icon: Users, value: "1000+", label: "Lives Impacted", description: "Through CSR Initiatives" },
    { icon: Award, value: "15+", label: "Awards & Recognition", description: "National & International" },
    { icon: TrendingUp, value: "QAR 500M+", label: "Investment Facilitated", description: "For Qatar's Economy" },
    { icon: Globe, value: "25+", label: "Countries Engaged", description: "International Collaborations" },
  ],
  ar: [
    { icon: Calendar, value: "+30", label: "سنة من القيادة", description: "خبرة عسكرية وتجارية" },
    { icon: Building2, value: "+50", label: "شراكة استراتيجية", description: "عبر صناعات متعددة" },
    { icon: Users, value: "+1000", label: "حياة تأثرت", description: "من خلال مبادرات المسؤولية الاجتماعية" },
    { icon: Award, value: "+15", label: "جائزة وتقدير", description: "وطنية ودولية" },
    { icon: TrendingUp, value: "+500 مليون ريال", label: "استثمار تم تسهيله", description: "لاقتصاد قطر" },
    { icon: Globe, value: "+25", label: "دولة متفاعلة", description: "تعاونات دولية" },
  ],
}

export function StatisticsInfographic() {
  const { language, isRTL } = useLanguage()
  const stats = statistics[language]

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className={`text-center mb-12 ${isRTL ? "rtl" : "ltr"}`}
        >
          <Badge variant="outline" className="mb-4">
            {language === "ar" ? "إنجازات بالأرقام" : "Impact by Numbers"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-work-sans">
            {language === "ar" ? "ثلاثة عقود من التأثير والإنجاز" : "Three Decades of Impact & Achievement"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      className="text-3xl font-bold text-primary font-work-sans"
                    >
                      {stat.value}
                    </motion.div>
                    <h3 className="font-semibold text-sm text-foreground font-work-sans">{stat.label}</h3>
                    <p className="text-xs text-muted-foreground font-open-sans">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
