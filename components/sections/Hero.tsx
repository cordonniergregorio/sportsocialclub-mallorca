"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/4.jpg"
          alt="Club Deportivo Mallorca"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white leading-[1.1] tracking-tight drop-shadow-lg">
              Un nuevo concepto
              <br />
              <span className="font-normal">de club social y deportivo</span>
              <br />
              <span className="font-light">en Mallorca</span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90  mx-auto leading-relaxed font-light drop-shadow-md">
              Una propuesta única que integra deporte, gastronomía, bienestar y
              comunidad familiar, con dos proyectos complementarios que
              transformarán la oferta deportiva en la paradisíaca isla.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Button
              size="lg"
              className="text-base px-8 py-6 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 transition-all font-light"
              onClick={() => scrollToSection("proyectos")}
            >
              Descubre los proyectos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 rounded-full border-2 border-white/50 bg-transparent text-white hover:bg-white/10 hover:border-white transition-all font-light backdrop-blur-sm"
              onClick={() => scrollToSection("equipo")}
            >
              Conoce al equipo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
