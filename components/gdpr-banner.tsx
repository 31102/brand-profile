"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Cookie, X } from "lucide-react"

const gdprData = {
  en: {
    title: "Cookie Consent",
    message:
      "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies.",
    acceptAll: "Accept All",
    acceptNecessary: "Accept Necessary Only",
    learnMore: "Learn More",
    close: "Close",
  },
  ar: {
    title: "موافقة ملفات تعريف الارتباط",
    message:
      "نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح الخاصة بك، وتقديم محتوى مخصص، وتحليل حركة المرور لدينا. بالنقر على 'قبول الكل'، فإنك توافق على استخدامنا لملفات تعريف الارتباط.",
    acceptAll: "قبول الكل",
    acceptNecessary: "قبول الضروري فقط",
    learnMore: "تعلم المزيد",
    close: "إغلاق",
  },
}

export function GDPRBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const { language, isRTL } = useLanguage()
  const content = gdprData[language]

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setShowBanner(false)
  }

  const handleAcceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary")
    setShowBanner(false)
  }

  const handleClose = () => {
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto"
        >
          <Card className="shadow-2xl border-2">
            <CardContent className="p-6">
              <div className={`flex items-start gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-primary mb-2 font-work-sans ${isRTL ? "text-right" : ""}`}>
                    {content.title}
                  </h3>
                  <p
                    className={`text-sm text-muted-foreground font-open-sans leading-relaxed ${isRTL ? "text-right" : ""}`}
                  >
                    {content.message}
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleClose} className="p-1 h-auto">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className={`flex flex-col sm:flex-row gap-2 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90 flex-1" size="sm">
                  {content.acceptAll}
                </Button>
                <Button onClick={handleAcceptNecessary} variant="outline" className="flex-1 bg-transparent" size="sm">
                  {content.acceptNecessary}
                </Button>
              </div>

              <Button
                variant="link"
                size="sm"
                className={`mt-2 p-0 h-auto text-xs ${isRTL ? "self-end" : "self-start"}`}
              >
                {content.learnMore}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
