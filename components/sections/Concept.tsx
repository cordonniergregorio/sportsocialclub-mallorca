"use client";

import Image from "next/image";

export function Concept() {
  return (
    <section
      id="concepto"
      className="relative py-32 min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Imagen de fondo completa */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/3.jpg"
          alt="Club Social Deportivo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight drop-shadow-lg">
              El Concepto
              <br />
              <span className="font-normal">de Club Social Deportivo</span>
            </h2>
          </div>

          <div className=" mx-auto mb-20">
            <p className="text-2xl text-white/90 leading-relaxed font-light text-center drop-shadow-md">
              Ambos proyectos comparten una misma visión: crear clubes modernos,
              vibrantes y familiares, con espacios deportivos de primer nivel y
              un enfoque social para disfrutar todo el año.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12  mx-auto mb-20">
            <div className="space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-light text-white">
                Clubes familiares
              </h3>
              <p className="text-white/90 font-light leading-relaxed">
                Espacios diseñados para disfrutar en familia durante todo el año
              </p>
            </div>

            <div className="space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-light text-white">
                Gastronomía integrada
              </h3>
              <p className="text-white/90 font-light leading-relaxed">
                Restaurantes y rooftops de alta calidad como parte de la
                experiencia
              </p>
            </div>

            <div className="space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-light text-white">
                Bienestar y comunidad
              </h3>
              <p className="text-white/90 font-light leading-relaxed">
                Actividades, eventos y espacios para niños que fomentan la vida
                social
              </p>
            </div>

            <div className="space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-light text-white">
                Tecnología moderna
              </h3>
              <p className="text-white/90 font-light leading-relaxed">
                Reservas online, gestión innovadora y experiencia digital fluida
              </p>
            </div>
          </div>

          <div className=" mx-auto border-t border-white/30 pt-16">
            <h3 className="text-3xl font-light text-white mb-8">
              Servicios integrados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white/90 font-light">
              <div className="space-y-3">
                <p>Tenis y pádel de alta calidad</p>
                <p>Fútbol 11 (Palmanova)</p>
                <p>Restaurantes y rooftops</p>
                <p>Zonas para niños / Kids Club</p>
              </div>
              <div className="space-y-3">
                <p>Eventos y actividades</p>
                <p>Escuela deportiva</p>
                <p>Gestión moderna e innovación</p>
                <p>Comunidad activa todo el año</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
