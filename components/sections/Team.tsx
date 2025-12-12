"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Team() {
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
        image: "/images/2.jpg",
      },
      {
        id: 2,
        name: t.team.members.gregorio.name,
        role: t.team.members.gregorio.role,
        description: t.team.members.gregorio.description,
        image: "/images/2.jpg",
      },
      {
        id: 3,
        name: t.team.members.irene.name,
        role: t.team.members.irene.role,
        description: t.team.members.irene.description,
        image: "/images/2.jpg",
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
    <section id="equipo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-framer-motion
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.team.title}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t.team.description}
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            data-framer-motion
          >
            {teamMembers.map((member, index) => (
              <motion.button
                key={member.id}
                onClick={() => handleMemberClick(index)}
                className="relative focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                    selectedMember === index
                      ? "border-gray-300 scale-110 opacity-100"
                      : "border-gray-200 opacity-50"
                  }`}
                  animate={{
                    boxShadow:
                      selectedMember === index
                        ? "0 20px 40px -10px rgba(0, 0, 0, 0.3), 0 10px 20px -5px rgba(0, 0, 0, 0.2)"
                        : "0 0px 0px 0px rgba(0, 0, 0, 0)",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="text-center max-w-3xl mx-auto min-h-[200px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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
}
