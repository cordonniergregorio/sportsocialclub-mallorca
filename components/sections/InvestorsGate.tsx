"use client";

import { motion } from "framer-motion";
import { ProtectedSection } from "@/components/protected/ProtectedSection";
import { InvestorsContent } from "@/components/protected/InvestorsContent";
import { useLanguage } from "@/context/LanguageContext";

export function InvestorsGate() {
  const { t } = useLanguage();
  const title = (
    <motion.div
      className="text-center overflow-visible"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      data-framer-motion
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight overflow-visible pr-4">
        {t.investorsGate.title}
        <br />
        <span
          className="font-[family-name:var(--font-dancing)] text-5xl sm:text-6xl lg:text-7xl inline-block overflow-visible gradient-text-animated"
          style={{
            lineHeight: "1.4",
            paddingTop: "0.3em",
            paddingBottom: "0.4em",
            paddingRight: "0.2em",
            paddingLeft: "0.1em",
            display: "inline-block",
          }}
        >
          {t.investorsGate.titleHighlight}
        </span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto">
        {t.investorsGate.description}
      </p>
    </motion.div>
  );

  return (
    <section id="inversores" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto overflow-visible">
          <ProtectedSection title={title}>
            <InvestorsContent />
          </ProtectedSection>
        </div>
      </div>
    </section>
  );
}
