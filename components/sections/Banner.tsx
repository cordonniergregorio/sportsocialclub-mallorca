"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { memo } from "react";

export const Banner = memo(function Banner() {
  const { t } = useLanguage();
  return (
    <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/1.jpg"
          alt={t.clubName}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            data-framer-motion
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight overflow-visible"
              initial={{ opacity: 0.3, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              data-framer-motion
            >
              {t.banner.title}{" "}
              <span
                className="font-[family-name:var(--font-dancing)] text-5xl sm:text-6xl lg:text-7xl inline-block overflow-visible gradient-text-animated-blue"
                style={{
                  lineHeight: "1.4",
                  paddingTop: "0.3em",
                  paddingBottom: "0.4em",
                  display: "inline-block",
                }}
              >
                {t.banner.titleHighlight}
              </span>
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0.3, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              data-framer-motion
            >
              {t.banner.description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
