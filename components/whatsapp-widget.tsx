"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("whatsapp.message"))
    const phoneNumber = "97450000000" // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-xl border border-gray-200 w-80 max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">General Hamed Al Ayafei</h3>
                  <p className="text-sm opacity-90">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700">Hello! 👋 How can I help you today?</p>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Start Conversation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
