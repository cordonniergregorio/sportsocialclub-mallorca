"use client";

import { useRef, useState, useEffect, memo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const heroImages = ["/images/4.jpg", "/images/5.jpg", "/images/6.jpg"];

export const Hero = memo(function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fullText = t.hero.title;
  const secondLine = t.hero.titleHighlight;
  const [displayedText, setDisplayedText] = useState("");
  const [displayedSecondLine, setDisplayedSecondLine] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    });
  }, []);

  useEffect(() => {
    setDisplayedText("");
    setDisplayedSecondLine("");
    setShowCursor(true);

    let currentIndex = 0;
    let secondIndex = 0;
    let isSecondLine = false;
    let timeoutId: NodeJS.Timeout;

    const typeNext = () => {
      if (!isSecondLine) {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNext, 30);
        } else {
          isSecondLine = true;
          timeoutId = setTimeout(typeNext, 100);
        }
      } else {
        if (secondIndex < secondLine.length) {
          setDisplayedSecondLine(secondLine.slice(0, secondIndex + 1));
          secondIndex++;
          timeoutId = setTimeout(typeNext, 30);
        } else {
          setTimeout(() => {
            setShowCursor(false);
          }, 500);
        }
      }
    };

    timeoutId = setTimeout(typeNext, 100);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [fullText, secondLine]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 lg:py-30 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt={`${t.clubName} - ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              quality={85}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Navegación del carrusel */}
      <div className="absolute inset-0 z-5 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={goToPrevious}
          className="pointer-events-auto p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="pointer-events-auto p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentImageIndex
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start min-h-[500px]">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0.3, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              data-framer-motion
            >
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white leading-tight tracking-tight mt-10">
                <span className="inline">{displayedText}</span>
                {displayedText.length === fullText.length && (
                  <>
                    {" "}
                    <motion.span
                      className="font-bold text-6xl sm:text-7xl lg:text-8xl font-[family-name:var(--font-dancing)] text-white/95 inline"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      style={{
                        lineHeight: "1.2",
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
                initial={{ opacity: 0.3, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                data-framer-motion
              >
                {t.hero.description}
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col justify-end text-right self-end space-y-6"
              initial={{ opacity: 0.3, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              data-framer-motion
            >
              <motion.p
                className="text-lg lg:text-2xl text-white/90 leading-relaxed font-light"
                initial={{ opacity: 0.3, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                data-framer-motion
              >
                {t.hero.secondaryDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0.3, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex justify-end"
                data-framer-motion
              >
                <Button
                  onClick={() => scrollToSection("proyectos")}
                  className="group bg-primary text-white hover:bg-gray-900 rounded-lg px-6 py-6 text-base font-light transition-all duration-300 flex items-center gap-3 w-fit"
                >
                  <span>{t.hero.cta}</span>
                  <div className="bg-white rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});
