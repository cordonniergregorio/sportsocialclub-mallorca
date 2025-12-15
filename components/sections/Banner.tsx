"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { memo, useMemo } from "react";

const bannerImages = ["/images/4.jpg", "/images/5.jpg", "/images/6.jpg"];

export const Banner = memo(function Banner() {
  const { t } = useLanguage();

  const bannerPoints = useMemo(
    () => [
      {
        title: ["Competencia vs", "ventaja estratégica"],
        image: bannerImages[0],
        number: 4,
      },
      {
        title: ["Sostenibilidad", ""],
        image: bannerImages[1],
        number: 5,
      },
      {
        title: ["Oportunidad de", "retorno"],
        image: bannerImages[2],
        number: 6,
      },
    ],
    [t]
  );

  return (
    <section className="relative py-0 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {bannerPoints.map((point, index) => (
          <motion.div
            key={index}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden group"
            initial={{ opacity: 0.4, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.02 }}
            data-framer-motion
          >
            <div className="absolute inset-0">
              <Image
                src={point.image}
                alt={point.title[0] + point.title[1]}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
            </div>

            {/* Número grande transparente de fondo */}
            <motion.div
              className="absolute top-8 left-8 text-7xl sm:text-8xl lg:text-9xl font-extralight text-white/20 leading-none"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15 + 0.2,
              }}
            >
              {String(point.number).padStart(2, "0")}
            </motion.div>

            {/* Contenido abajo */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 lg:p-8">
              <div className="text-center w-full">
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.3,
                    ease: "easeOut",
                  }}
                >
                  <span className="block">{point.title[0]}</span>
                  {point.title[1] && (
                    <span className="block">{point.title[1]}</span>
                  )}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});
