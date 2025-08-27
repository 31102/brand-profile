"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className={`flex items-center space-x-2 ${scrolled ? "text-primary" : "text-white"} hover:text-primary cursor-pointer`}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{t("nav.language")}</span>
      </Button>
    </motion.div>
  )
}
