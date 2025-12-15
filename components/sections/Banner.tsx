"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { memo, useMemo } from "react";

const bannerImages = [
  "/images/mallorca2.jpg",
  "/images/mallorca1.jpg",
  "/images/mallorca3.webp",
];

type BannerPoint = {
  title: [string, string];
  image: string;
  number: number;
};

function splitTitleInTwoLines(title: string): [string, string] {
  if (!title) return ["", ""];

  const middle = Math.floor(title.length / 2);
  let splitIndex = title.indexOf(" ", middle);

  if (splitIndex === -1) {
    splitIndex = title.lastIndexOf(" ", middle);
  }

  if (splitIndex === -1) {
    return [title, ""];
  }

  return [title.slice(0, splitIndex).trim(), title.slice(splitIndex).trim()];
}

export const Banner = memo(function Banner() {
  const { t } = useLanguage();

  const bannerPoints: BannerPoint[] = useMemo(() => {
    const titles =
      t.banner?.cards?.length && t.banner.cards.length > 0
        ? t.banner.cards
        : [];

    return titles.slice(0, 3).map((title, index) => ({
      title: splitTitleInTwoLines(title ?? ""),
      image: bannerImages[index] ?? bannerImages[0],
      number: index + 1,
    }));
  }, [t]);

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
                alt={`${point.title[0]} ${point.title[1]}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/30 to-black/20" />
            </div>

            <div className="absolute inset-0 flex flex-col">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1">
                <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-end py-6 lg:py-8">
                  <motion.div
                    className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 transform text-7xl sm:text-8xl lg:text-9xl font-extralight text-white/50 leading-none text-center"
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

                  <motion.h3
                    className="font-[family-name:var(--font-dancing)] text-5xl sm:text-6xl lg:text-7xl inline-block overflow-visible text-center text-white"
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});
