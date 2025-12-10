"use client";

import Image from "next/image";

export function Team() {
  return (
    <section
      id="equipo"
      className="py-32 bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Quiénes
              <br />
              <span className="font-normal">somos</span>
            </h2>
            <p className="text-xl text-gray-500 font-light">El Equipo</p>
          </div>

          <div className="space-y-16">
            {/* Foto del equipo */}
            <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/2.jpg"
                alt="Equipo fundador"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Somos un equipo multidisciplinario con amplia experiencia en
                gestión deportiva, hostelería y creación de proyectos
                familiares. Gregorio, ex jugador ATP, y Antonio han liderado
                academias que han formado a más de 2.000 jugadores y gestionado
                programas internacionales en Europa.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="border-l-2 border-blue-300 pl-6">
                  <h4 className="text-xl font-normal text-gray-900 mb-3">
                    Antonio Cordonnier
                  </h4>
                  <p className="text-base text-gray-600 font-light">
                    Director de cinco clubes de tenis en Sudamérica, con amplia
                    experiencia en la gestión de centros deportivos y en la
                    coordinación de equipos de trabajo.
                  </p>
                </div>
                <div className="border-l-2 border-green-300 pl-6">
                  <h4 className="text-xl font-normal text-gray-900 mb-3">
                    Gregorio Cordonnier
                  </h4>
                  <p className="text-base text-gray-600 font-light">
                    Ex jugador profesional ATP y emprendedor en el sector
                    deportivo. Ha participado en la gestión y desarrollo de
                    proyectos deportivos, trabajando con jugadores y equipos
                    multidisciplinarios.
                  </p>
                </div>
              </div>

              <p>
                Contamos con una red sólida de entrenadores, preparadores
                físicos, restauradores y profesionales operativos. Nuestro plan
                financiero ha sido desarrollado junto al ex CEO de la Rafa Nadal
                Academy, aportando una visión estratégica y de alto nivel.
              </p>

              <div className="border-l-2 border-amber-300 pl-6 my-8">
                <h4 className="text-xl font-normal text-gray-900 mb-3">
                  Arquitecto
                </h4>
                <p className="text-base text-gray-600 font-light">
                  <span className="font-normal">Irene Oliver:</span> Arquitecta
                  reconocida en la zona con experiencia en proyectos deportivos
                  de gran escala.
                </p>
              </div>

              <p>
                Estamos preparados para dirigir un club moderno, sostenible y
                diseñado para ofrecer experiencias de calidad a familias durante
                todo el año.
              </p>
            </div>

            {/* Visión y Valores - Diseño minimalista con fondo */}
            <div className="mt-24 pt-20 pb-20 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="max-w-3xl mx-auto px-8 space-y-12">
                {/* Visión */}
                <div className="text-center">
                  <h3 className="text-4xl font-light text-gray-900 mb-4">
                    Visión
                  </h3>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    Crear espacios de comunidad para familias, deporte y
                    bienestar
                  </p>
                </div>

                {/* Separador */}
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px bg-gray-200 flex-1"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                {/* Valores */}
                <div className="text-center">
                  <h3 className="text-4xl font-light text-gray-900 mb-8">
                    Valores
                  </h3>
                  <div className="flex flex-wrap justify-center gap-6">
                    <span className="text-lg text-gray-600 font-light">
                      Sostenibilidad
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-lg text-gray-600 font-light">
                      Innovación
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-lg text-gray-600 font-light">
                      Calidad
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-lg text-gray-600 font-light">
                      Vida social
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
