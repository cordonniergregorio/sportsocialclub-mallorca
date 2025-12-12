"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isLanguageMenuOpen && !target.closest(".language-selector")) {
        setIsLanguageMenuOpen(false);
      }
    };
    if (isLanguageMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  const navLinks = [
    { href: "#equipo", label: t.header.nav.team },
    { href: "#concepto", label: t.header.nav.concept },
    { href: "#proyectos", label: t.header.nav.projects },
    { href: "#inversion", label: t.header.nav.investment },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className={`text-lg lg:text-xl font-light tracking-wide transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {t.clubName}
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-light transition-all relative group ${
                    isScrolled
                      ? "text-gray-600 hover:text-gray-900"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative language-selector">
              <motion.button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white/90 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-light">
                  {languages.find((l) => l.code === language)?.flag}
                </span>
              </motion.button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center gap-2 ${
                          language === lang.code
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.label}</span>
                        {language === lang.code && (
                          <span className="ml-auto text-blue-600">✓</span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className={`hidden md:flex rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "border-gray-300 bg-transparent hover:bg-gray-50 text-gray-900 shadow-sm"
                    : "border-white/60 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white shadow-lg"
                }`}
              >
                <Link
                  href="#inversores"
                  className="flex items-center gap-2 text-sm font-light px-6 py-2"
                >
                  <Lock className="w-4 h-4" />
                  {t.header.investorsAccess}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
