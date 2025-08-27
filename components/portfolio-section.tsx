"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, Palette, ExternalLink, Trophy, HeartHandshake, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const partnerships = [
  {
    icon: GraduationCap,
    name: {
      en: "IAID Academy",
      ar: "أكاديمية IAID",
    },
    location: {
      en: "Doha, Qatar",
      ar: "الدوحة، قطر",
    },
    role: {
      en: "Strategic Advisor & Partner",
      ar: "مستشار استراتيجي وشريك",
    },
    description: {
      en: "Supporting one of Qatar's leading performing arts academies in nurturing creativity, discipline, and cultural exchange among youth.",
      ar: "دعم إحدى أكاديميات الفنون الأدائية الرائدة في قطر في رعاية الإبداع والانضباط والتبادل الثقافي بين الشباب.",
    },
    focus: {
      en: ["Arts Education", "Youth Development", "Cultural Exchange"],
      ar: ["التعليم الفني", "تنمية الشباب", "التبادل الثقافي"],
    },
    image: "/modern-performing-arts-academy-with-students-in-qa.png",
  },
  {
    icon: Calendar,
    name: {
      en: "Impact Events",
      ar: "فعاليات التأثير",
    },
    location: {
      en: "Qatar",
      ar: "قطر",
    },
    role: {
      en: "Co-Partner & Event Sponsor",
      ar: "شريك مشارك وراعي فعاليات",
    },
    description: {
      en: "Creating, funding, and scaling large-scale public events, exhibitions, and conferences focused on entertainment, sports, and national development.",
      ar: "إنشاء وتمويل وتوسيع الفعاليات العامة واسعة النطاق والمعارض والمؤتمرات المركزة على الترفيه والرياضة والتنمية الوطنية.",
    },
    focus: {
      en: ["Event Management", "Sports Events", "Cultural Conferences"],
      ar: ["إدارة الفعاليات", "الفعاليات الرياضية", "المؤتمرات الثقافية"],
    },
    image: "/large-scale-qatar-cultural-event-with-traditional-.png",
  },
  {
    icon: Palette,
    name: {
      en: "Planet Scribbles Qatar",
      ar: "بلانت سكريبلز قطر",
    },
    location: {
      en: "Qatar",
      ar: "قطر",
    },
    role: {
      en: "Mentor & Impact Investor",
      ar: "موجه ومستثمر تأثير",
    },
    description: {
      en: "Championing early childhood development through arts-based learning, curriculum design, and community engagement.",
      ar: "دعم تنمية الطفولة المبكرة من خلال التعلم القائم على الفنون وتصميم المناهج والمشاركة المجتمعية.",
    },
    focus: {
      en: ["Early Childhood", "Arts Learning", "Community Engagement"],
      ar: ["الطفولة المبكرة", "التعلم الفني", "المشاركة المجتمعية"],
    },
    image: "/children-engaged-in-creative-arts-learning-activit.png",
  },
];

export const offerings = [
  {
    title: {
      en: "Business Advisory & Investment Facilitation",
      ar: "الاستشارات التجارية وتسهيل الاستثمار",
    },
    items: {
      en: [
        "End-to-end support for business setup in Qatar",
        "Matching ventures with investors and sponsorships",
        "Structuring Public-Private Partnerships (PPPs)",
      ],
      ar: [
        "دعم شامل لإنشاء الأعمال في قطر",
        "ربط المشاريع بالمستثمرين والرعايات",
        "هيكلة الشراكات بين القطاعين العام والخاص",
      ],
    },
    image: "/offering1.jpg",
    icon: <Briefcase />,
  },
  {
    title: {
      en: "Corporate Social Responsibility Leadership",
      ar: "قيادة المسؤولية الاجتماعية للشركات",
    },
    items: {
      en: [
        "Designing CSR frameworks aligned with ESG goals",
        "Youth development and community engagement programs",
        "Supporting NGOs focused on social equity",
      ],
      ar: [
        "تصميم أطر المسؤولية الاجتماعية متماشية مع أهداف ESG",
        "برامج تنمية الشباب والمشاركة المجتمعية",
        "دعم المنظمات غير الحكومية المركزة على العدالة الاجتماعية",
      ],
    },
    image: "/offering4.jpg",
    icon: <HeartHandshake />,
  },
  {
    title: {
      en: "Sports Management & Development",
      ar: "إدارة وتطوير الرياضة",
    },
    items: {
      en: [
        "Advising sports federations and local clubs",
        "Promoting youth participation in sports",
        "Sponsoring sports festivals and championships",
      ],
      ar: [
        "استشارة الاتحادات الرياضية والأندية المحلية",
        "تعزيز مشاركة الشباب في الرياضة",
        "رعاية المهرجانات والبطولات الرياضية",
      ],
    },
    image: "/offering3.jpg",
    icon: <Trophy />,
  },
  {
    title: {
      en: "Event Planning & Public Engagement",
      ar: "تخطيط الفعاليات والمشاركة العامة",
    },
    items: {
      en: [
        "Conceptualizing cultural and corporate events",
        "Venue partnerships and governmental approvals",
        "Integrating CSR and innovation into event design",
      ],
      ar: [
        "تصور الفعاليات الثقافية والشركاتية",
        "شراكات الأماكن والموافقات الحكومية",
        "دمج المسؤولية الاجتماعية والابتكار في تصميم الفعاليات",
      ],
    },
    image: "/offering2.jpg",
    icon: <Calendar />,
  },
];
export function PortfolioSection() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      badge: "Strategic Partnerships",
      title: "Building Qatar's Future Through Strategic Alliances",
      subtitle:
        "Proudly serving as sponsor, investor, and advisor to initiatives that contribute to Qatar's creative, social, and economic landscape.",
      offeringsTitle: "Key Offerings",
      offeringsSubtitle:
        "Comprehensive services designed to support business growth and community development",
      learnMore: "Learn More",
    },
    ar: {
      badge: "الشراكات الاستراتيجية",
      title: "بناء مستقبل قطر من خلال التحالفات الاستراتيجية",
      subtitle:
        "نفخر بالعمل كراعٍ ومستثمر ومستشار للمبادرات التي تساهم في المشهد الإبداعي والاجتماعي والاقتصادي في قطر.",
      offeringsTitle: "العروض الرئيسية",
      offeringsSubtitle: "خدمات شاملة مصممة لدعم نمو الأعمال وتنمية المجتمع",
      learnMore: "اعرف المزيد",
    },
  };

  return (
    <section id="portfolio" className="py-20">
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-work-sans">
            {content[language].title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-open-sans">
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* Strategic Partnerships */}
        <div className={`space-y-12 mb-20 ${isRTL ? "rtl" : "ltr"}`}>
          {partnerships.map((partnership, index) => (
            <motion.div
              key={partnership.name.en}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={partnership.image || "/placeholder.svg"}
                      alt={partnership.name[language]}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                  <div
                    className={`p-8 flex flex-col justify-center ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <partnership.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary font-work-sans">
                          {partnership.name[language]}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {partnership.location[language]}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit mb-4">
                      {partnership.role[language]}
                    </Badge>
                    <p className="text-muted-foreground mb-6 font-open-sans leading-relaxed">
                      {partnership.description[language]}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {partnership.focus[language].map((focus) => (
                        <Badge
                          key={focus}
                          variant="outline"
                          className="text-xs"
                        >
                          {focus}
                        </Badge>
                      ))}
                    </div>
                    {/* <Button variant="outline" className="w-fit bg-transparent">
                      {content[language].learnMore}
                      <ExternalLink
                        className={`${isRTL ? "mr-2" : "ml-2"} w-4 h-4`}
                      />
                    </Button> */}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className={`space-y-8 ${isRTL ? "rtl" : "ltr"}`}
        >
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-work-sans">
              {content[language].offeringsTitle}
            </h3>
            <p className="text-lg text-muted-foreground font-open-sans">
              {content[language].offeringsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
  {offerings.map((offering, index) => (
    <motion.div
      key={offering.title.en}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 pt-0">
        <img src={offering.image} alt={offering.title[language]} className="w-full h-70 object-cover rounded-md" />
        <CardHeader className="flex items-center gap-4">
          <div className="size-10 flex items-center justify-center bg-primary/10 rounded-xl">
            {offering.icon}
          </div>
          <CardTitle className="text-primary font-work-sans">
            {offering.title[language]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {offering.items[language].map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-3 ml-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground font-open-sans">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>
        </motion.div>
      </div>
    </section>
  );
}
