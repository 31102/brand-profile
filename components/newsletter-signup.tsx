"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto"> 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-lg p-6 "
      >
        <div className="flex items-center space-x-3 mb-4">
          <Mail className="w-6 h-6 text-primary" />
          <h3 className="text-lg font-semibold">{t("newsletter.title")}</h3>
        </div>

        <p className="text-muted-foreground mb-4">
          {t("newsletter.description")}
        </p>

        {isSubscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 text-green-600"
          >
            <CheckCircle className="w-5 h-5" />
            <span>{t("newsletter.success")}</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="email"
              placeholder={t("newsletter.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading} className="h-10">
              {isLoading ? "..." : t("newsletter.subscribe")}
            </Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
