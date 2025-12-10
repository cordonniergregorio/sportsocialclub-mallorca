"use client";

import { useState } from "react";
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

interface Project {
  name: string;
  location: string;
  investment: string;
  features: string[];
  businessModel: string[];
  image: string;
}

const projects: Project[] = [
  {
    name: "Santa Ponça",
    location: "Santa Ponça, Mallorca",
    investment: "€1.6MM",
    features: [
      "3 canchas de pádel techadas",
      "7 canchas de tenis",
      "Restaurante con baños y zonas comunes (300 m²)",
      "Rooftop con vistas panorámicas a todo el club",
      "Mejoras potenciales: más canchas de pádel, piscina, gimnasio",
    ],
    businessModel: [
      "Sponsors corporativos (branding + beneficios)",
      "Summer, premium, adults and kids camps",
      "Alquiler por horas (pistas y clases particulares)",
      "Eventos, restauración, beauty, tienda",
    ],
    image: "/images/4.jpg",
  },
  {
    name: "Palmanova",
    location: "Palmanova, Mallorca",
    investment: "€1.25MM",
    features: [
      "8 canchas de pádel",
      "Restaurante",
      "Campo de fútbol 11",
      "Instalaciones modernas",
    ],
    businessModel: [
      "Programas para turistas",
      "Alquiler de pistas",
      "Escuela deportiva",
      "Restauración",
    ],
    image: "/images/1.jpg",
  },
];

function ProjectCardDialog({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full mt-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all font-light shadow-md hover:shadow-lg">
          Ver detalles del proyecto
        </Button>
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
  const handleInvestorLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
    // Scroll suave a la sección de inversores
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
            Inversión estimada: {project.investment}
          </h3>
        </div>

        <div>
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Características principales
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
            Modelo de negocio
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
            <span className="font-normal">
              Para información detallada del proyecto
            </span>{" "}
            (mercado, competencia, roadmap, modelo financiero, etc.), accede al{" "}
            <a
              href="#inversores"
              onClick={handleInvestorLinkClick}
              className="text-gray-900 font-normal hover:underline cursor-pointer"
            >
              área privada de inversores
            </a>
            .
          </p>
        </div>
      </div>
    </DialogContent>
  );
}

export function Projects() {
  return (
    <section
      id="proyectos"
      className="py-32 bg-gradient-to-b from-white via-blue-50/20 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Los Dos
            <br />
            <span className="font-normal">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-500 font-light">
            Dos propuestas complementarias para transformar la oferta deportiva
            en Mallorca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Imagen con overlay al hover */}
              <div className="h-80 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Badge de inversión sobre la imagen */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <Euro className="w-4 h-4 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-900">
                      {project.investment}
                    </span>
                  </div>
                </div>

                {/* Título sobre la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-light text-white mb-2 drop-shadow-lg">
                    {project.name}
                  </h3>
                  <p className="text-white/90 font-light">{project.location}</p>
                </div>
              </div>

              {/* Contenido de la card */}
              <div className="p-8 space-y-6 bg-white">
                {/* Características destacadas */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Características principales
                  </h4>
                  <ul className="space-y-3">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                        <span className="text-gray-700 font-light leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-sm text-blue-600 font-light pt-2">
                        +{project.features.length - 3} características más
                      </li>
                    )}
                  </ul>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100"></div>

                {/* Modelo de negocio preview */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Modelo de negocio
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.businessModel.slice(0, 2).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-light"
                      >
                        {item.split(" ")[0]}
                      </span>
                    ))}
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-light">
                      +{project.businessModel.length - 2} más
                    </span>
                  </div>
                </div>

                <ProjectCardDialog project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
