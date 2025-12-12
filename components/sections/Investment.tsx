"use client";

import { useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Investment() {
  const { t } = useLanguage();

  const investmentPoints = useMemo(
    () => [
      {
        title: t.investment.points.value.title,
        description: t.investment.points.value.description,
      },
      {
        title: t.investment.points.demand.title,
        description: t.investment.points.demand.description,
      },
      {
        title: t.investment.points.complementary.title,
        description: t.investment.points.complementary.description,
      },
      {
        title: t.investment.points.competition.title,
        description: t.investment.points.competition.description,
      },
      {
        title: t.investment.points.sustainability.title,
        description: t.investment.points.sustainability.description,
      },
      {
        title: t.investment.points.return.title,
        description: t.investment.points.return.description,
      },
    ],
    [t]
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="inversion"
      className="relative py-30 overflow-hidden bg-white"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/images/6.jpg"
          alt="Inversión y Oportunidad"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto overflow-visible">
          <motion.div
            className="mb-16 overflow-visible"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-framer-motion
          >
            <div className="flex items-start gap-8">
              <motion.div
                className="text-7xl sm:text-8xl lg:text-9xl font-extralight text-white/20 leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                05
              </motion.div>
              <div className="flex-1 pt-4 overflow-visible">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.2] overflow-visible pr-4">
                  {t.investment.title}
                  <br />
                  <motion.span
                    className="font-[family-name:var(--font-dancing)] text-5xl sm:text-6xl lg:text-7xl inline-block overflow-visible"
                    animate={{
                      backgroundImage: [
                        "linear-gradient(90deg, #ffffff, #93c5fd)",
                        "linear-gradient(90deg, #93c5fd, #6ee7b7)",
                        "linear-gradient(90deg, #6ee7b7, #ffffff)",
                        "linear-gradient(90deg, #ffffff, #93c5fd)",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    }}
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: "1.4",
                      paddingTop: "0.3em",
                      paddingBottom: "0.4em",
                      paddingRight: "0.2em",
                      paddingLeft: "0.1em",
                      display: "inline-block",
                      willChange: "background-image",
                    }}
                  >
                    {t.investment.titleHighlight}
                  </motion.span>
                </h2>
                <p className="text-lg lg:text-xl text-white/90 font-light max-w-2xl leading-relaxed">
                  {t.investment.description}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentPoints.map((point, index) => (
              <motion.div
                key={index}
                className="border-2 border-white/30 rounded-xl p-6 bg-white/20 backdrop-blur-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  borderColor: "rgba(255, 255, 255, 0.6)",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                }}
                data-framer-motion
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      {point.title}
                    </h3>
                    <p className="text-base text-white/90 font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
