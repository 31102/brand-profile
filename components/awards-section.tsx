"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Users, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Users2, Briefcase, Leaf } from "lucide-react";

const awards = [
  {
    icon: Shield,
    title: {
      en: "Lifetime Service Medal",
      ar: "وسام الخدمة مدى الحياة",
    },
    organization: {
      en: "Qatar Armed Forces",
      ar: "القوات المسلحة القطرية",
    },
    description: {
      en: "Awarded for exceptional leadership and long-standing dedication as a Major General, contributing to national defense, security planning, and youth mentorship within the military structure.",
      ar: "منح للقيادة الاستثنائية والتفاني طويل الأمد كلواء، مساهماً في الدفاع الوطني وتخطيط الأمن وتوجيه الشباب داخل الهيكل العسكري.",
    },
    year: "2023",
    category: {
      en: "Military Excellence",
      ar: "التميز العسكري",
    },
  },
  {
    icon: Users,
    title: {
      en: "CSR Excellence Award",
      ar: "جائزة التميز في المسؤولية الاجتماعية",
    },
    organization: {
      en: "Doha CSR Summit",
      ar: "قمة الدوحة للمسؤولية الاجتماعية",
    },
    description: {
      en: "Recognized for championing corporate social responsibility programs that empower youth, support education, and enhance social cohesion in alignment with Qatar Vision 2030.",
      ar: "معترف به لدعم برامج المسؤولية الاجتماعية للشركات التي تمكن الشباب وتدعم التعليم وتعزز التماسك الاجتماعي بما يتماشى مع رؤية قطر 2030.",
    },
    year: "2023",
    category: {
      en: "Social Impact",
      ar: "التأثير الاجتماعي",
    },
  },
  {
    icon: TrendingUp,
    title: {
      en: "Strategic Investment Leadership Award",
      ar: "جائزة قيادة الاستثمار الاستراتيجي",
    },
    organization: {
      en: "Qatar Business Forum",
      ar: "منتدى قطر للأعمال",
    },
    description: {
      en: "Presented for outstanding contributions in facilitating foreign direct investment and helping expatriate businesses successfully launch in Qatar.",
      ar: "مُقدمة للمساهمات المتميزة في تسهيل الاستثمار الأجنبي المباشر ومساعدة الشركات المغتربة على الإطلاق بنجاح في قطر.",
    },
    year: "2022",
    category: {
      en: "Business Leadership",
      ar: "القيادة التجارية",
    },
  },
  {
    icon: Users,
    title: {
      en: "Community Sports Development Honor",
      ar: "تكريم تطوير الرياضة المجتمعية",
    },
    organization: {
      en: "Ministry of Sports & Youth",
      ar: "وزارة الرياضة والشباب",
    },
    description: {
      en: "Honored for efforts in expanding community-based sports programs, promoting health and wellness, and encouraging youth participation across all demographics.",
      ar: "مُكرم للجهود في توسيع البرامج الرياضية المجتمعية وتعزيز الصحة والعافية وتشجيع مشاركة الشباب عبر جميع الفئات الديموغرافية.",
    },
    year: "2022",
    category: {
      en: "Sports Development",
      ar: "تطوير الرياضة",
    },
  },
  {
    icon: Palette,
    title: {
      en: "Cultural Partnership Recognition",
      ar: "اعتراف الشراكة الثقافية",
    },
    organization: {
      en: "Ministry of Culture",
      ar: "وزارة الثقافة",
    },
    description: {
      en: "Awarded for supporting arts, education, and creative initiatives through institutions like IAID Academy and Planet Scribbles Qatar.",
      ar: "منح لدعم الفنون والتعليم والمبادرات الإبداعية من خلال مؤسسات مثل أكاديمية IAID وبلانت سكريبلز قطر.",
    },
    year: "2021",
    category: {
      en: "Cultural Impact",
      ar: "التأثير الثقافي",
    },
  },
];

export const visionPillars = [
  {
    title: { en: "Human Development", ar: "التنمية البشرية" },
    description: {
      en: "Investing in people through education, youth empowerment, and health initiatives.",
      ar: "الاستثمار في الناس من خلال التعليم وتمكين الشباب ومبادرات الصحة.",
    },
    color: "bg-chart-1",
    image: "/support2.png",
    icon: <Users />,
  },
  {
    title: { en: "Social Development", ar: "التنمية الاجتماعية" },
    description: {
      en: "Building a just, inclusive society rooted in values and mutual respect.",
      ar: "بناء مجتمع عادل وشامل متجذر في القيم والاحترام المتبادل.",
    },
    color: "bg-chart-2",
    image: "/support3.png",
    icon: <Users2 />,
  },
  {
    title: { en: "Economic Development", ar: "التنمية الاقتصادية" },
    description: {
      en: "Strengthening the private sector, diversifying the economy, and supporting entrepreneurial innovation.",
      ar: "تقوية القطاع الخاص وتنويع الاقتصاد ودعم الابتكار الريادي.",
    },
    color: "bg-chart-3",
    image: "/support4.png",
    icon: <Briefcase />,
  },
  {
    title: { en: "Environmental Development", ar: "التنمية البيئية" },
    description: {
      en: "Encouraging sustainable practices across business operations and community programs.",
      ar: "تشجيع الممارسات المستدامة عبر العمليات التجارية والبرامج المجتمعية.",
    },
    color: "bg-chart-4",
    image: "/support1.png",
    icon: <Leaf />,
  },
];
export function AwardsSection() {
  const { language, isRTL } = useLanguage();

  const content = {
    en: {
      badge: "Recognition & Impact",
      title: "Awards & Recognition",
      subtitle:
        "Recognition for commitment to Qatar's progress, social unity, and strategic vision aligned with Qatar National Vision 2030.",
      visionTitle: "Supporting Qatar National Vision 2030",
      visionSubtitle:
        "Every endeavor is grounded in the four pillars of Qatar National Vision 2030, contributing to a stronger, more resilient Qatar.",
    },
    ar: {
      badge: "الاعتراف والتأثير",
      title: "الجوائز والاعتراف",
      subtitle:
        "اعتراف بالالتزام بتقدم قطر والوحدة الاجتماعية والرؤية الاستراتيجية المتماشية مع رؤية قطر الوطنية 2030.",
      visionTitle: "دعم رؤية قطر الوطنية 2030",
      visionSubtitle:
        "كل مسعى متجذر في الركائز الأربع لرؤية قطر الوطنية 2030، مساهماً في قطر أقوى وأكثر مرونة.",
    },
  };

  return (
    <section id="awards" className="py-20 bg-muted/30">
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

        {/* Awards Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 ${
            isRTL ? "rtl" : "ltr"
          }`}
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.title.en}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <award.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs">
                        {award.category[language]}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-primary font-work-sans leading-tight">
                      {award.title[language]}
                    </h3>
                    <p className="text-sm font-medium text-secondary">
                      {award.organization[language]}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-open-sans leading-relaxed">
                    {award.description[language]}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Qatar Vision 2030 Alignment */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className={`space-y-8 ${isRTL ? "rtl" : "ltr"}`}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4 font-work-sans">
              {content[language].visionTitle}
            </h3>
            <p className="text-muted-foreground font-open-sans max-w-3xl mx-auto">
              {content[language].visionSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 pt-0">
                  <img
                    src={pillar.image}
                    alt={pillar.title[language]}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <CardContent className="p-2 md:p-4 py-0 md:py-0 space-y-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`size-10 flex items-center justify-center rounded-xl ${pillar.color}/20`}
                      >
                        {pillar.icon}
                      </div>
                      <h4 className="font-semibold text-primary font-work-sans">
                        {pillar.title[language]}
                      </h4>
                    </div>

                    <p className="text-sm text-muted-foreground font-open-sans leading-relaxed mt-2 md:ml-12">
                      {pillar.description[language]}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
