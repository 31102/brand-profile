"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export function WhatsAppWidget() {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t("whatsapp.message"));
    const phoneNumber = "97450000000"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={handleWhatsAppClick}
          className="bg-transparent cursor-pointer text-white rounded-full shadow-lg transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/WhatsApp.png" alt="WhatsApp" className="w-14 h-14" />
        </motion.button>
      </motion.div>
    </>
  );
}
