"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const fullText = t.hero.title;
  const secondLine = t.hero.titleHighlight;
  const [displayedText, setDisplayedText] = useState("");
  const [displayedSecondLine, setDisplayedSecondLine] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    const preventScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    preventScroll();
    setTimeout(preventScroll, 0);
    setTimeout(preventScroll, 100);
    setTimeout(preventScroll, 200);
  }, []);

  useEffect(() => {
    setDisplayedText("");
    setDisplayedSecondLine("");
    setShowCursor(true);
    setIsTypingComplete(false);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        let secondIndex = 0;
        const secondInterval = setInterval(() => {
          if (secondIndex < secondLine.length) {
            setDisplayedSecondLine(secondLine.slice(0, secondIndex + 1));
            secondIndex++;
          } else {
            clearInterval(secondInterval);

            setTimeout(() => {
              setShowCursor(false);
              setIsTypingComplete(true);
            }, 500);
          }
        }, 50);
        return () => clearInterval(secondInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText, secondLine]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 lg:py-30 overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/images/4.jpg"
          alt={t.clubName}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </motion.div>

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <div className=" mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start min-h-[500px]">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              data-framer-motion
            >
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white leading-none tracking-tight overflow-visible">
                {displayedText}
                {displayedText.length === fullText.length && (
                  <>
                    {" "}
                    <motion.span
                      className="font-bold text-6xl sm:text-7xl lg:text-8xl font-[family-name:var(--font-dancing)] text-white/95 inline-block overflow-visible"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      style={{
                        lineHeight: "1",
                        marginTop: "-0.1em",
                        marginBottom: "-0.1em",
                        display: "inline-block",
                        verticalAlign: "baseline",
                      }}
                    >
                      {displayedSecondLine}
                    </motion.span>
                  </>
                )}
                {showCursor && (
                  <motion.span
                    className="inline-block w-[2px] h-[1.2em] bg-white ml-1 align-middle"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </h1>

              <motion.p
                className="text-lg lg:text-2xl text-white/90 leading-relaxed font-light max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                data-framer-motion
              >
                {t.hero.description}
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col justify-end text-right self-end space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              data-framer-motion
            >
              <motion.p
                className="text-lg lg:text-2xl text-white/90 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                data-framer-motion
              >
                {t.hero.secondaryDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex justify-end"
                data-framer-motion
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                  whileHover={{ scale: 1.05, y: 0 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection("proyectos")}
                    className="group bg-black text-white hover:bg-gray-900 rounded-lg px-6 py-6 text-base font-light transition-all duration-300 flex items-center gap-3 w-fit"
                  >
                    <span>{t.hero.cta}</span>
                    <div className="bg-white rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
