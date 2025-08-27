"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { Calendar, Clock } from "lucide-react";
import { insightsData } from "@/components/insights-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function InsightsPage() {
  const { language, isRTL } = useLanguage();
  const content = insightsData[language];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/qatar-skyline-with-modern-buildings-and-traditiona.png"
          alt="Qatar Skyline"
          className="w-full h-full object-cover filter brightness-75 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/70 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navigation />
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-2 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`text-center mb-16 ${isRTL ? "rtl" : "ltr"}`}
            >
              <Badge variant="default" className="mb-4">
                {content.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 font-work-sans">
                {content.title}
              </h1>
              <p className="text-lg text-white/80 max-w-3xl mx-auto font-open-sans">
                {content.subtitle}
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className={`flex flex-wrap justify-center gap-2 mb-12 ${isRTL ? "rtl" : "ltr"}`}
            >
              {content.categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Insights list */}
            <div className="space-y-12">
              {content.insights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all pt-0">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-72 object-cover"
                    />
                    <CardHeader className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          <insight.icon className="w-3 h-3" />
                          {insight.type}
                        </Badge>
                        <Badge variant="outline">{insight.category}</Badge>
                      </div>
                      <CardTitle
                        className={`text-2xl font-work-sans leading-tight ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {insight.title}
                      </CardTitle>
                      <div
                        className={`flex items-center gap-6 text-sm text-muted-foreground ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(insight.date).toLocaleDateString(
                            language === "ar" ? "ar-QA" : "en-US",
                            { month: "long", day: "numeric", year: "numeric" }
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {insight.readTime}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p
                        className={`text-base text-muted-foreground font-open-sans leading-relaxed ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {insight.excerpt}
                      </p>
                      <div className="mt-6 flex justify-end">
                        <Button className="bg-primary hover:bg-primary/90">
                          {language === "ar" ? "اقرأ المزيد" : "Read Full Insight"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
