"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Send, CheckCircle, MapPin, Mail, Phone } from "lucide-react"

export function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { t, language } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsLoading(false)
    setFormData({ name: "", email: "", company: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Send className="w-5 h-5 text-primary" />
              <span>{t("contact.title")}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-lg font-semibold text-green-600">{t("contact.form.success")}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder={t("contact.form.name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={language === "ar" ? "text-right" : ""}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder={t("contact.form.email")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={language === "ar" ? "text-right" : ""}
                  />
                </div>

                <Input
                  name="company"
                  placeholder={t("contact.form.company")}
                  value={formData.company}
                  onChange={handleChange}
                  className={language === "ar" ? "text-right" : ""}
                />

                <Input
                  name="subject"
                  placeholder={t("contact.form.subject")}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={language === "ar" ? "text-right" : ""}
                />

                <Textarea
                  name="message"
                  placeholder={t("contact.form.message")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={language === "ar" ? "text-right" : ""}
                />

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "..." : t("contact.form.submit")}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">{t("contact.subtitle")}</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{t("contact.info.location")}</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>{t("contact.info.email")}</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>{t("contact.info.phone")}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Doha, Qatar</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
