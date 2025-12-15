"use client";

import { motion } from "framer-motion";
import { Users, UtensilsCrossed, Heart, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useMemo, memo } from "react";

export const Concept = memo(function Concept() {
  const { t } = useLanguage();

  const conceptCards = useMemo(
    () => [
      {
        title: t.concept.cards.families.title,
        description: t.concept.cards.families.description,
        icon: Users,
      },
      {
        title: t.concept.cards.gastronomy.title,
        description: t.concept.cards.gastronomy.description,
        icon: UtensilsCrossed,
      },
      {
        title: t.concept.cards.wellbeing.title,
        description: t.concept.cards.wellbeing.description,
        icon: Heart,
      },
      {
        title: t.concept.cards.technology.title,
        description: t.concept.cards.technology.description,
        icon: Zap,
      },
    ],
    [t]
  );
  return (
    <section id="concepto" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto overflow-visible">
          <motion.div
            className="mb-16 overflow-visible"
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            data-framer-motion
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900  leading-[1.2] max-w-5xl overflow-visible pr-4">
              {t.concept.title}
              <br />
              <span
                className="font-[family-name:var(--font-dancing)] text-5xl sm:text-6xl lg:text-7xl inline-block overflow-visible gradient-text-animated-colorful"
                style={{
                  lineHeight: "1.4",
                  paddingTop: "0.3em",
                  paddingBottom: "0.4em",
                  paddingRight: "0.2em",
                  paddingLeft: "0.1em",
                  display: "inline-block",
                }}
              >
                {t.concept.titleHighlight}
              </span>
            </h2>
            <motion.p
              className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed"
              initial={{ opacity: 0.3, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              data-framer-motion
            >
              {t.concept.description}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {conceptCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  className="relative border-2 border-gray-200 rounded-xl p-6 bg-linear-to-br from-white to-gray-50/50 transition-all duration-300 group"
                  initial={{ opacity: 0.3, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    borderColor: "#006F9D",
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 111, 157, 0.1)",
                  }}
                  data-framer-motion
                >
                  <motion.div
                    initial={{ scale: 0.8, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08 + 0.15,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-7 h-7 text-gray-900 mb-4 group-hover:text-[#006F9D] transition-colors" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});
