"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";
import { Users, Building2, Award, Calendar, TrendingUp, Globe } from "lucide-react";

type Stat = {
  icon: any;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
};

const statistics: { en: Stat[]; ar: Stat[] } = {
  en: [
    { icon: Calendar, value: 30, suffix: "+", label: "Years of Leadership", description: "Military & Business Experience" },
    { icon: Building2, value: 50, suffix: "+", label: "Strategic Partnerships", description: "Across Multiple Industries" },
    { icon: Users, value: 1000, suffix: "+", label: "Lives Impacted", description: "Through CSR Initiatives" },
    { icon: Award, value: 15, suffix: "+", label: "Awards & Recognition", description: "National & International" },
    { icon: TrendingUp, value: 500, prefix: "QAR ", suffix: "M+", label: "Investment Facilitated", description: "For Qatar's Economy" },
    { icon: Globe, value: 25, suffix: "+", label: "Countries Engaged", description: "International Collaborations" },
  ],
  ar: [
    { icon: Calendar, value: 30, suffix: "+", label: "سنة من القيادة", description: "خبرة عسكرية وتجارية" },
    { icon: Building2, value: 50, suffix: "+", label: "شراكة استراتيجية", description: "عبر صناعات متعددة" },
    { icon: Users, value: 1000, suffix: "+", label: "حياة تأثرت", description: "من خلال مبادرات المسؤولية الاجتماعية" },
    { icon: Award, value: 15, suffix: "+", label: "جائزة وتقدير", description: "وطنية ودولية" },
    { icon: TrendingUp, value: 500, prefix: "ر.ق ", suffix: " مليون", label: "استثمار تم تسهيله", description: "لاقتصاد قطر" },
    { icon: Globe, value: 25, suffix: "+", label: "دولة متفاعلة", description: "تعاونات دولية" },
  ],
};

// CountUp component — animates only when its element comes into view
function CountUp({ target, duration = 1.8, once = true }: { target: number; duration?: number; once?: boolean }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState<number>(0);

  // update local state when motion value changes
  useEffect(() => {
    const unsubscribe = motionVal.on("change", (v) => {
      setDisplay(Math.floor(v));
    });
    return () => unsubscribe();
  }, [motionVal]);

  // start / reset animation based on visibility
  useEffect(() => {
    let controls: { stop: () => void } | null = null;
    if (inView) {
      controls = animate(motionVal, target, { duration, ease: "easeOut" });
    } else if (!once) {
      // if we want to re-trigger on every view, reset when out of view
      motionVal.set(0);
      setDisplay(0);
    }
    return () => controls?.stop();
  }, [inView, target, duration, once, motionVal]);

  return (
    <span ref={ref} aria-live="polite">
      {display.toLocaleString()}
    </span>
  );
}

export function StatisticsInfographic() {
  const { language, isRTL } = useLanguage();
  const stats = statistics[language];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center mb-12 ${isRTL ? "rtl" : "ltr"}`}
        >
          <Badge variant="outline" className="mb-4">
            {language === "ar" ? "إنجازات بالأرقام" : "Impact by Numbers"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-work-sans">
            {language === "ar" ? "ثلاثة عقود من التأثير والإنجاز" : "Three Decades of Impact & Achievement"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.07, type: "spring", stiffness: 100 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary font-work-sans flex items-baseline justify-center gap-2">
                      {/* prefix (like currency) if any */}
                      {stat.prefix && <span className="text-base font-medium">{stat.prefix}</span>}

                      {/* CountUp — will animate when visible */}
                      <CountUp target={stat.value} duration={1.8} once={true} />

                      {/* suffix (like +, M+, text) */}
                      {stat.suffix && <span className="font-medium">{stat.suffix}</span>}
                    </div>

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
  );
}
