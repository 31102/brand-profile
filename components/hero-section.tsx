"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Target } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const { t, language } = useLanguage();
  const router = useRouter();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30 lg:pt-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/qatar-skyline-with-modern-buildings-and-traditiona.png"
          alt="Qatar Skyline"
          className="w-full h-full object-cover filter brightness-75 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-8 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`space-y-8 ${language === "ar" ? "text-right" : ""}`}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`flex flex-wrap gap-2 ${
                  language === "ar" ? "justify-end" : ""
                }`}
              >
                {/* <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  {language === "ar" ? "لواء سابق" : "Former Major General"}
                </Badge>
                <Badge variant="outline" className="border-white text-white">
                  {language === "ar" ? "القوات المسلحة القطرية" : "Qatar Armed Forces"}
                </Badge> */}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-4xl md:text-6xl font-bold font-serif leading-tight ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("hero.title")}
                <span className="block text-secondary">
                  {t("hero.subtitle")}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-xl text-white/90 font-sans leading-relaxed max-w-2xl ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("hero.description")}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`flex flex-col sm:flex-row gap-4 ${
                language === "ar" ? "sm:flex-row-reverse" : ""
              }`}
            >
              <Button
                onClick={() => {
                  router.push("/#timeline");
                }}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                {t("hero.cta")}
                <ArrowRight
                  className={`w-5 h-5 ${
                    language === "ar" ? "mr-2 rotate-180" : "ml-2"
                  }`}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                onClick={() => {
                  router.push("/#contact");
                }}
              >
                {t("hero.contact")}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
            >
              <div
                className={`text-center ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm text-white/80">
                  {language === "ar" ? "سنة خبرة" : "Years Experience"}
                </div>
              </div>
              <div
                className={`text-center ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-white/80">
                  {language === "ar" ? "شراكة" : "Partnerships"}
                </div>
              </div>
              <div
                className={`text-center ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                <div className="flex justify-center mb-2">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-white/80">
                  {language === "ar" ? "مشروع" : "Projects"}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/Major General Hamed Mohammed.png"
                alt="Hamed Al Ayafei Portrait"
                className="w-full h-[500px] max-w-md mx-auto rounded-lg shadow-2xl object-cover object-top"
              />
              <div
                className={`absolute bottom-5 md:-bottom-6 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg ${
                  language === "ar" ? "-left-6" : "-right-6"
                }`}
              >
                <div
                  className={`text-sm font-medium ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {language === "ar" ? "رؤية قطر 2030" : "Qatar Vision 2030"}
                </div>
                <div
                  className={`text-xs opacity-80 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {language === "ar" ? "قيادة متوافقة" : "Aligned Leadership"}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
