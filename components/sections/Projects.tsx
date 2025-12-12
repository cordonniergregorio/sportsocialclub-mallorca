"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Euro } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
  name: string;
  location: string;
  investment: string;
  features: string[];
  businessModel: string[];
  image: string;
}

function ProjectCardDialog({ project }: { project: Project }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button className="w-full rounded-lg bg-black text-white hover:bg-gray-900 transition-all font-light px-6 py-3">
            {t.projects.viewDetails}
          </Button>
        </motion.div>
      </DialogTrigger>
      <ProjectModal project={project} onClose={() => setOpen(false)} />
    </Dialog>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const handleInvestorLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const element = document.getElementById("inversores");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <DialogContent className=" max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-4xl font-light">
          {project.name}
        </DialogTitle>
        <DialogDescription className="text-lg font-light text-gray-500">
          {project.location}
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-8 mt-6">
        <div className="w-full h-64 relative rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-2xl font-light text-gray-900 mb-4 flex items-center gap-2">
            <Euro className="w-5 h-5 text-gray-600" />
            {t.projects.investment}: {project.investment}
          </h3>
        </div>

        <div>
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            {t.projects.mainFeatures}
          </h3>
          <ul className="space-y-3 text-gray-600 font-light">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">—</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            {t.projects.businessModel}
          </h3>
          <ul className="space-y-3 text-gray-600 font-light">
            {project.businessModel.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-l-2 border-gray-300 pl-6 py-4">
          <p className="text-sm text-gray-600 font-light">
            <span className="font-normal">{t.projects.detailedInfo}</span>{" "}
            (mercado, competencia, roadmap, modelo financiero, etc.), accede al{" "}
            <a
              href="#inversores"
              onClick={handleInvestorLinkClick}
              className="text-gray-900 font-normal hover:underline cursor-pointer"
            >
              {t.projects.accessInvestors}
            </a>
            .
          </p>
        </div>
      </div>
    </DialogContent>
  );
}

export function Projects() {
  const { t } = useLanguage();

  const projects = useMemo(
    (): Project[] => [
      {
        name: t.projects.santaPonca.name,
        location: t.projects.santaPonca.location,
        investment: "€1.6MM",
        features: t.projects.santaPonca.features,
        businessModel: t.projects.santaPonca.businessModel,
        image: "/images/4.jpg",
      },
      {
        name: t.projects.palmanova.name,
        location: t.projects.palmanova.location,
        investment: "€1.25MM",
        features: t.projects.palmanova.features,
        businessModel: t.projects.palmanova.businessModel,
        image: "/images/1.jpg",
      },
    ],
    [t]
  );

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto overflow-visible">
          <motion.div
            className="mb-16 overflow-visible"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-framer-motion
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.2] max-w-4xl overflow-visible pr-4">
              {t.projects.title}
              <br />
              <motion.span
                className="font-[family-name:var(--font-dancing)] text-5xl sm:text-6xl lg:text-7xl inline-block overflow-visible"
                style={{
                  lineHeight: "1.4",
                  paddingTop: "0.3em",
                  paddingBottom: "0.4em",
                  paddingRight: "0.2em",
                  paddingLeft: "0.1em",
                  display: "inline-block",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  willChange: "background-image",
                }}
                animate={{
                  backgroundImage: [
                    "linear-gradient(90deg, #3b82f6, #10b981)",
                    "linear-gradient(90deg, #10b981, #f59e0b)",
                    "linear-gradient(90deg, #f59e0b, #3b82f6)",
                    "linear-gradient(90deg, #3b82f6, #10b981)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                {t.projects.titleHighlight}
              </motion.span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
              {t.projects.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group border-2 border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  borderColor: "rgb(59, 130, 246)",
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
                }}
                data-framer-motion
              >
                <div className="h-64 relative overflow-hidden bg-gray-100">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-blue-600" />
                      <span className="text-lg font-semibold text-gray-900">
                        {project.investment}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-lg text-gray-600 font-light">
                      {project.location}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {t.projects.mainFeatures}
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700 font-light text-sm"
                        >
                          <span className="text-blue-600 mt-1.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <ProjectCardDialog project={project} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
