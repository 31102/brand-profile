"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useRouter } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { t, language } = useLanguage();
  const router = useRouter();

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.insights"), href: "#insights" },
    { name: t("nav.awards"), href: "#awards" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  // Handle scroll for nav background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 120; // offset for nav height
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section instanceof HTMLElement) {
          const top = section.offsetTop;
          const bottom = top + section.clientHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <span
              className={`text-xl font-bold font-serif cursor-pointer ${
                language === "ar" ? "font-arabic" : ""
              } ${scrolled ? "text-primary" : "text-white"}`}
              onClick={() => {
                router.push("/#home");
              }}
            >
              {language === "ar"
                ? "اللواء حامد العيافي"
                : "General Hamed Al Ayafei"}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`transition-colors duration-200 font-medium ${
                  language === "ar" ? "font-arabic" : ""
                } ${
                  activeSection === item.href
                    ? "text-primary underline"
                    : scrolled
                    ? "text-primary"
                    : "text-white hover:text-purple-50"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
            <LanguageSwitcher scrolled={scrolled} />
            <div className="flex items-center gap-2">
              <Button
                className={`bg-transparent ${
                  scrolled
                    ? "text-primary/80 hover:bg-transparent hover:text-primary"
                    : "text-white hover:bg-transparent hover:text-white/80"
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                className={`bg-transparent ${
                  scrolled
                    ? "text-primary/80 hover:bg-transparent hover:text-primary"
                    : "text-white hover:bg-transparent hover:text-white/80"
                }`}
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block transition-colors duration-200 font-medium ${
                    language === "ar"
                      ? "font-arabic text-right"
                      : ""
                  } ${
                    activeSection === item.href ? "text-primary underline" : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                {t("hero.contact")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
