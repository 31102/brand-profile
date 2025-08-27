"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Phone, Mail, Linkedin, Instagram, Send } from "lucide-react"

const contactData = {
  en: {
    badge: "Let's Connect",
    title: "Ready to Build Something Great Together?",
    subtitle:
      "Open to new partnerships, investment opportunities, strategic collaborations, and conversations that shape Qatar's business and social future.",
    getInTouch: "Get in Touch",
    description:
      "Whether you're looking for strategic guidance, investment opportunities, or partnership discussions, I'm here to help bridge your vision with Qatar's dynamic business landscape.",
    followConnect: "Follow & Connect",
    sendMessage: "Send a Message",
    responseTime: "I typically respond within 24-48 hours. For urgent matters, please call directly.",
    contactInfo: [
      {
        icon: MapPin,
        title: "Location",
        details: "Doha, Qatar",
        description: "D Ring Road, Zone 44, Street 250, Building No. 219, Gate No. 1, 2nd Floor, Office No. 15",
      },
      {
        icon: Phone,
        title: "Phone",
        details: "+974 XXXX XXXX",
        description: "Available for strategic consultations and partnership discussions",
      },
      {
        icon: Mail,
        title: "Email",
        details: "hamed@example.com",
        description: "For speaking engagements, partnerships, and media inquiries",
      },
    ],
    formFields: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      company: "Company/Organization",
      subject: "Subject",
      message: "Message",
      firstNamePlaceholder: "Your first name",
      lastNamePlaceholder: "Your last name",
      emailPlaceholder: "your.email@example.com",
      companyPlaceholder: "Your company or organization",
      subjectPlaceholder: "What would you like to discuss?",
      messagePlaceholder: "Tell me more about your project, partnership opportunity, or how I can help...",
      sendButton: "Send Message",
    },
  },
  ar: {
    badge: "لنتواصل",
    title: "مستعد لبناء شيء عظيم معاً؟",
    subtitle:
      "مفتوح للشراكات الجديدة وفرص الاستثمار والتعاونات الاستراتيجية والمحادثات التي تشكل مستقبل قطر التجاري والاجتماعي.",
    getInTouch: "تواصل معي",
    description:
      "سواء كنت تبحث عن التوجيه الاستراتيجي أو فرص الاستثمار أو مناقشات الشراكة، أنا هنا لمساعدتك في ربط رؤيتك بالمشهد التجاري الديناميكي في قطر.",
    followConnect: "تابع وتواصل",
    sendMessage: "إرسال رسالة",
    responseTime: "عادة ما أرد خلال 24-48 ساعة. للأمور العاجلة، يرجى الاتصال مباشرة.",
    contactInfo: [
      {
        icon: MapPin,
        title: "الموقع",
        details: "الدوحة، قطر",
        description: "الطريق الدائري D، المنطقة 44، شارع 250، المبنى رقم 219، البوابة رقم 1، الطابق الثاني، المكتب رقم 15",
      },
      {
        icon: Phone,
        title: "الهاتف",
        details: "+974 XXXX XXXX",
        description: "متاح للاستشارات الاستراتيجية ومناقشات الشراكة",
      },
      {
        icon: Mail,
        title: "البريد الإلكتروني",
        details: "hamed@example.com",
        description: "للمشاركات الخطابية والشراكات والاستفسارات الإعلامية",
      },
    ],
    formFields: {
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      company: "الشركة/المؤسسة",
      subject: "الموضوع",
      message: "الرسالة",
      firstNamePlaceholder: "اسمك الأول",
      lastNamePlaceholder: "اسم عائلتك",
      emailPlaceholder: "your.email@example.com",
      companyPlaceholder: "شركتك أو مؤسستك",
      subjectPlaceholder: "ما الذي تود مناقشته؟",
      messagePlaceholder: "أخبرني المزيد عن مشروعك أو فرصة الشراكة أو كيف يمكنني المساعدة...",
      sendButton: "إرسال الرسالة",
    },
  },
}

const socialLinks = [
  { icon: Linkedin, name: "LinkedIn", href: "#", color: "hover:text-blue-600" },
  { icon: Instagram, name: "Instagram", href: "#", color: "hover:text-pink-600" },
  { icon: Mail, name: "Email", href: "#", color: "hover:text-green-600" },
]

export function ContactSection() {
  const { language, isRTL } = useLanguage()
  const content = contactData[language]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className={`text-center mb-16`}
        >
          <Badge variant="outline" className="mb-4">
            {content.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-work-sans">{content.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-open-sans">{content.subtitle}</p>
        </motion.div>

        <div className={`grid lg:grid-cols-2 gap-12`}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-work-sans">{content.getInTouch}</h3>
              <p className="text-muted-foreground font-open-sans mb-8">{content.description}</p>
            </div>

            <div className="space-y-6">
              {content.contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className={`flex items-start gap-4`}>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className={`space-y-1`}>
                          <h4 className="font-semibold text-primary font-work-sans">{info.title}</h4>
                          <p className="font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground font-open-sans">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-primary font-work-sans">{content.followConnect}</h4>
              <div className={`flex gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    className={`${social.color} transition-colors duration-200`}
                  >
                    <social.icon className="w-4 h-4 mr-2" />
                    {social.name}
                  </Button>
                ))}
              </div>
            </motion.div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className={`text-primary font-work-sans`}>
                  {content.sendMessage}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isRTL ? "text-right block" : ""}`}>
                      {content.formFields.firstName}
                    </label>
                    <Input
                      placeholder={content.formFields.firstNamePlaceholder}
                      className={isRTL ? "text-right" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isRTL ? "text-right block" : ""}`}>
                      {content.formFields.lastName}
                    </label>
                    <Input placeholder={content.formFields.lastNamePlaceholder} className={isRTL ? "text-right" : ""} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isRTL ? "text-right block" : ""}`}>
                    {content.formFields.email}
                  </label>
                  <Input
                    type="email"
                    placeholder={content.formFields.emailPlaceholder}
                    className={isRTL ? "text-right" : ""}
                  />
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isRTL ? "text-right block" : ""}`}>
                    {content.formFields.company}
                  </label>
                  <Input placeholder={content.formFields.companyPlaceholder} className={isRTL ? "text-right" : ""} />
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isRTL ? "text-right block" : ""}`}>
                    {content.formFields.subject}
                  </label>
                  <Input placeholder={content.formFields.subjectPlaceholder} className={isRTL ? "text-right" : ""} />
                </div>

                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isRTL ? "text-right block" : ""}`}>
                    {content.formFields.message}
                  </label>
                  <Textarea
                    placeholder={content.formFields.messagePlaceholder}
                    rows={5}
                    className={isRTL ? "text-right" : ""}
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Send className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {content.formFields.sendButton}
                </Button>

                <p className={`text-xs text-muted-foreground font-open-sans ${isRTL ? "text-right" : "text-center"}`}>
                  {content.responseTime}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
