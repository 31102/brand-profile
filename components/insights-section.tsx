"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Video,
  Mic,
} from "lucide-react";

export const insightsData = {
  en: {
    title: "Insights & Perspectives",
    subtitle:
      "Sharing insights on leadership, business strategy, and Qatar Vision 2030 through articles, interviews, and keynote presentations.",
    badge: "Thought Leadership",
    viewAll: "View All Insights",
    readMore: "Read More",
    insights: [
      {
        type: "Article",
        icon: BookOpen,
        title: "Strategic Leadership in Qatar's Economic Diversification",
        excerpt:
          "Exploring how military leadership principles can drive business innovation and economic growth in alignment with Qatar Vision 2030.",
        date: "2024-01-15",
        readTime: "8 min read",
        category: "Leadership",
        image: "/qatar-business-district-with-modern-skyscrapers-an.png",
      },
      {
        type: "Interview",
        icon: Mic,
        title:
          "From Military Service to Entrepreneurship: A Journey of Purpose",
        excerpt:
          "An in-depth conversation about transitioning from military leadership to business advisory and investment roles.",
        date: "2023-12-10",
        readTime: "25 min listen",
        category: "Career Transition",
        image: "/professional-interview-setting-with-qatar-flag-and.png",
      },
      {
        type: "Video",
        icon: Video,
        title: "Building Sustainable Partnerships in Qatar's Sports Sector",
        excerpt:
          "A keynote presentation on developing community-based sports programs and fostering youth participation.",
        date: "2023-11-20",
        readTime: "15 min watch",
        category: "Sports Development",
        image: "/qatar-sports-facility-with-youth-athletes-training.png",
      },
    ],
    categories: [
      "All",
      "Leadership",
      "Career Transition",
      "Sports Development",
      "CSR",
      "Investment",
      "Youth Development",
    ],
  },
  ar: {
    title: "الرؤى والمنظورات",
    subtitle:
      "مشاركة الرؤى حول القيادة واستراتيجية الأعمال ورؤية قطر 2030 من خلال المقالات والمقابلات والعروض التقديمية الرئيسية.",
    badge: "القيادة الفكرية",
    viewAll: "عرض جميع الرؤى",
    readMore: "اقرأ المزيد",
    insights: [
      {
        type: "مقال",
        icon: BookOpen,
        title: "القيادة الاستراتيجية في التنويع الاقتصادي لقطر",
        excerpt:
          "استكشاف كيف يمكن لمبادئ القيادة العسكرية أن تدفع الابتكار التجاري والنمو الاقتصادي بما يتماشى مع رؤية قطر 2030.",
        date: "2024-01-15",
        readTime: "8 دقائق قراءة",
        category: "القيادة",
        image: "/qatar-business-district-with-modern-skyscrapers-an.png",
      },
      {
        type: "مقابلة",
        icon: Mic,
        title: "من الخدمة العسكرية إلى ريادة الأعمال: رحلة الهدف",
        excerpt:
          "محادثة متعمقة حول الانتقال من القيادة العسكرية إلى الأدوار الاستشارية والاستثمارية التجارية.",
        date: "2023-12-10",
        readTime: "25 دقيقة استماع",
        category: "التحول المهني",
        image: "/professional-interview-setting-with-qatar-flag-and.png",
      },
      {
        type: "فيديو",
        icon: Video,
        title: "بناء شراكات مستدامة في القطاع الرياضي القطري",
        excerpt:
          "عرض تقديمي رئيسي حول تطوير البرامج الرياضية المجتمعية وتعزيز مشاركة الشباب.",
        date: "2023-11-20",
        readTime: "15 دقيقة مشاهدة",
        category: "التطوير الرياضي",
        image: "/qatar-sports-facility-with-youth-athletes-training.png",
      },
    ],
    categories: [
      "الكل",
      "القيادة",
      "التحول المهني",
      "التطوير الرياضي",
      "المسؤولية الاجتماعية",
      "الاستثمار",
      "تطوير الشباب",
    ],
  },
};

export function InsightsSection() {
  const { language, isRTL } = useLanguage();
  const content = insightsData[language];

  return (
    <section id="insights" className="py-20">
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className={`text-center mb-16 ${isRTL ? "rtl" : "ltr"}`}
        >
          <Badge variant="outline" className="mb-4">
            {content.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-work-sans">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-open-sans">
            {content.subtitle}
          </p>
        </motion.div>


        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {content.insights.slice(0, 3).map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative overflow-hidden">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-4 ${isRTL ? "right-4" : "left-4"}`}
                  >
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <insight.icon className="w-3 h-3" />
                      {insight.type}
                    </Badge>
                  </div>
                  <div
                    className={`absolute top-4 ${isRTL ? "left-4" : "right-4"}`}
                  >
                    <Badge
                      variant="outline"
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      {insight.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle
                    className={`text-lg font-work-sans leading-tight group-hover:text-primary transition-colors ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {insight.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p
                    className={`text-sm text-muted-foreground font-open-sans leading-relaxed ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {insight.excerpt}
                  </p>

                  <div
                    className={`flex items-center justify-between text-xs text-muted-foreground ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(insight.date).toLocaleDateString(
                          language === "ar" ? "ar-QA" : "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {insight.readTime}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    {content.readMore}
                    <ArrowRight
                      className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/insight">{content.viewAll}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
