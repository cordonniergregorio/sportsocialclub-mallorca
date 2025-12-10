"use client";

import Image from "next/image";

const investmentPoints = [
  {
    title: "Valor diferencial",
    description:
      "Club multideportivo, familiar y de media-alta gama, con servicios integrados (deporte, restauración, bienestar, cuidado infantil) que lo distinguen de clubes tradicionales.",
  },
  {
    title: "Demanda creciente en Mallorca",
    description:
      "Mallorca tiene un potencial excepcional, con demanda tanto de residentes como de turistas; existe una necesidad real de clubes de calidad integral durante todo el año.",
  },
  {
    title: "Proyectos complementarios",
    description:
      "Más allá del deporte —pistas, gimnasio, wellness—, se incorporan servicios como restaurante, eventos, actividades familiares, bienestar, lo que multiplica las fuentes de ingresos.",
  },
  {
    title: "Competencia vs ventaja estratégica",
    description:
      "Frente a clubes tradicionales o de gama media, la oferta integral del club (deporte + bienestar + ocio + familia) y su estructura profesional representan una ventaja competitiva clara.",
  },
  {
    title: "Sostenibilidad",
    description:
      "Gracias a diversificar servicios, al modelo de membresías y a una gestión profesional desde el inicio, el proyecto tiene bases sólidas para funcionar todo el año y ofrecer calidad a residentes de la zona, reduciendo riesgos de estacionalidad.",
  },
  {
    title: "Oportunidad de retorno",
    description:
      "Combinando estructura sólida, demanda, diversificación de ingresos y gestión eficiente, el proyecto representa un alto potencial de rentabilidad y valorización.",
  },
];

export function Investment() {
  return (
    <section id="inversion" className="relative py-32 overflow-hidden">
      {/* Imagen de fondo completa */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/6.jpg"
          alt="Inversión y Oportunidad"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header con número grande */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex items-start gap-8 mb-12">
            <div className="text-8xl sm:text-9xl font-light text-white/20 leading-none">
              05
            </div>
            <div className="flex-1 pt-4">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
                Inversión
                <br />
                <span className="font-normal">y Oportunidad</span>
              </h2>
              <p className="text-xl text-white/80 font-light max-w-2xl">
                Una oportunidad única para formar parte del futuro del deporte y
                la comunidad en Mallorca
              </p>
            </div>
          </div>
        </div>

        {/* Grid con diseño alternativo - cards más grandes y espaciadas */}
        <div className="max-w-7xl mx-auto space-y-6">
          {investmentPoints.map((point, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col md:flex-row gap-8 items-start p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {/* Número de índice */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <span className="text-2xl font-light text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-light text-white">
                    {point.title}
                  </h3>
                  <div className="w-20 h-px bg-white/30"></div>
                  <p className="text-lg text-white/85 leading-relaxed font-light ">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
