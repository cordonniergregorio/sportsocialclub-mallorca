"use client";

import { useState, useEffect, useMemo, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Team = memo(function Team() {
  const { t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const teamMembers = useMemo(
    () => [
      {
        id: 1,
        name: t.team.members.antonio.name,
        role: t.team.members.antonio.role,
        description: t.team.members.antonio.description,
        image: "/images/anto.jpeg",
      },
      {
        id: 2,
        name: t.team.members.gregorio.name,
        role: t.team.members.gregorio.role,
        description: t.team.members.gregorio.description,
        image: "/images/grego3.jpg",
      },
      {
        id: 3,
        name: t.team.members.irene.name,
        role: t.team.members.irene.role,
        description: t.team.members.irene.description,
        image: "/images/plano.png",
      },
    ],
    [t]
  );

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setSelectedMember((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMemberClick = (index: number) => {
    setSelectedMember(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="equipo" className="pt-20 pb-5 bg-white overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="max-w-6xl mx-auto overflow-visible">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            data-framer-motion
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.2] max-w-5xl mx-auto overflow-visible pr-4">
              {t.team.title}
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
                {t.team.titleHighlight}
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t.team.description}
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center gap-8 mb-16 px-8 py-8 overflow-visible"
            initial={{ opacity: 0.3, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            data-framer-motion
          >
            {teamMembers.map((member, index) => (
              <motion.button
                key={member.id}
                onClick={() => handleMemberClick(index)}
                className="relative focus:outline-none overflow-visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                    selectedMember === index
                      ? "border-gray-300 scale-110 opacity-100"
                      : "border-gray-200 opacity-50"
                  }`}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                  />
                </motion.div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="text-center max-w-3xl mx-auto min-h-[200px]"
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            data-framer-motion
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {teamMembers[selectedMember].name}
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed">
                  {teamMembers[selectedMember].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
