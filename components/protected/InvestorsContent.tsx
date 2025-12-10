"use client";

import {
  Calendar,
  DollarSign,
  TrendingUp,
  Target,
  Users,
  MapPin,
  Building2,
} from "lucide-react";

export function InvestorsContent() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Modelo Financiero */}
        <div className="border border-gray-200 rounded-lg p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-light text-gray-900 mb-2 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-gray-600" />
              Modelo Financiero
            </h3>
            <p className="text-sm text-gray-500 font-light">
              Santa Ponça - Mallorca Racket Club
            </p>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-gray-300 pl-6 py-2">
              <p className="text-sm text-gray-500 mb-1 font-light">
                Inversión renovaciones + operaciones
              </p>
              <p className="text-3xl font-light text-gray-900">1,25 M€</p>
            </div>
            <div className="border-l-2 border-gray-300 pl-6 py-2">
              <p className="text-sm text-gray-500 mb-1 font-light">Garantías</p>
              <p className="text-3xl font-light text-gray-900">350k €</p>
              <p className="text-xs text-gray-400 mt-1 font-light">
                vía aval/caución
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-6 py-2">
              <p className="text-sm text-gray-500 mb-1 font-light">
                EBITDA objetivo año 4
              </p>
              <p className="text-3xl font-light text-gray-900">300k €</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-400 italic font-light">
                *Un archivo excel está disponible para más detalle
              </p>
              <p className="text-xs text-gray-400 italic font-light mt-1">
                Valor de la concesión como activo transferible
              </p>
            </div>
          </div>
        </div>

        {/* Propuesta de Valor */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-gray-600" />
            Propuesta de Valor
          </h3>
          <div className="space-y-4 text-gray-600 font-light leading-relaxed">
            <p>
              Club social deportivo integral de alta calidad en la mejor zona de
              Mallorca.
            </p>
            <p>
              Transformación de un club municipal en un centro deportivo-social
              de primer nivel con varias líneas de negocio rentables.
            </p>
            <p className="font-normal text-gray-900">
              Concesión pública a 31 años → acceso a un activo estratégico sin
              necesidad de compra de terreno.
            </p>
          </div>
        </div>

        {/* Ubicación */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-600" />
            Ubicación
          </h3>
          <ul className="space-y-3 text-gray-600 font-light">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>15 mins de Palma y aeropuerto</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>Poder adquisitivo alto</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>300 mts de la playa</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>
                Mucha gente residiendo anualmente y turistas visitantes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>Oferta Hotelera</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>Zona más cara de Palma de Mallorca</span>
            </li>
          </ul>
        </div>

        {/* Mercado */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-600" />
            Mercado
          </h3>
          <div className="space-y-4 text-gray-600 font-light">
            <div>
              <p className="font-normal text-gray-900 mb-2">
                Residentes locales:
              </p>
              <p className="text-sm leading-relaxed">
                Población de Calvià (50k hab.) y alrededores, con alta renta
                media. Palma y Andratx (Otros 400.000)
              </p>
            </div>
            <div>
              <p className="font-normal text-gray-900 mb-2">Turismo:</p>
              <p className="text-sm leading-relaxed">
                Más de 10 millones de turistas anuales en Mallorca, demanda
                estacional fuerte.
              </p>
            </div>
            <div>
              <p className="font-normal text-gray-900 mb-2">Tendencias:</p>
              <p className="text-sm leading-relaxed">
                Auge del pádel, estabilidad del tenis, creciente interés en
                clubes sociales.
              </p>
            </div>
          </div>
        </div>

        {/* Competencia */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-gray-600" />
            Competencia
          </h3>
          <div className="space-y-4 text-gray-600 font-light">
            <div>
              <p className="font-normal text-gray-900 mb-2">High-end:</p>
              <p className="text-sm leading-relaxed">
                Mallorca Country Club, Bendinat, Palma Sport → exclusivos y
                caros.
              </p>
            </div>
            <div>
              <p className="font-normal text-gray-900 mb-2">Low-end:</p>
              <p className="text-sm leading-relaxed">
                Polideportivos locales o clubes con mala atención y baja calidad
                → accesibles pero con servicios básicos.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-6 py-3 mt-4">
              <p className="font-normal text-gray-900 mb-1">Oportunidad:</p>
              <p className="text-sm leading-relaxed">
                Posicionarse en el segmento medio-alto, con precios competitivos
                y calidad premium.
              </p>
            </div>
          </div>
        </div>

        {/* Oportunidad */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-gray-600" />
            Oportunidad
          </h3>
          <div className="space-y-3 text-gray-600 font-light leading-relaxed">
            <p>
              • Modelo basado en concesión, no en compra → menor CAPEX inicial.
            </p>
            <p>
              • Retornos vía operación (canon fijo + ingresos deportivos,
              restauración, eventos).
            </p>
            <p>
              • Posibilidad de cesión autorizada en el futuro como vía de
              salida.
            </p>
          </div>
        </div>

        {/* Modelo de Negocio */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-6">
            Modelo de Negocio
          </h3>
          <ul className="space-y-3 text-gray-600 font-light">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>Sponsors corporativos (branding + beneficios)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>Summer, premium, adults and kids camps</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>Alquiler por horas (pistas y clases particulares)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>Eventos, restauración, beauty, tienda</span>
            </li>
          </ul>
        </div>

        {/* Potencial Futuro */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-6">
            Potencial Futuro
          </h3>
          <ul className="space-y-3 text-gray-600 font-light">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>
                Ampliación con más canchas de pádel para atender demanda
                creciente
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">—</span>
              <span>
                Desarrollo de membresías privadas premium para mejorar el
                servicio
              </span>
            </li>
            <li className="font-normal text-gray-900 mt-4 pt-4 border-t border-gray-200">
              Esto aumentaría significativamente la rentabilidad a largo plazo
            </li>
          </ul>
        </div>

        {/* Marketing y Ventas */}
        <div className="md:col-span-2 border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-8">
            Marketing y Ventas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-normal text-gray-900 mb-4">Captación:</p>
              <ul className="space-y-3 text-gray-600 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>
                    Equipo de ventas dedicado a la captación de empresas y
                    clientes en programas anuales
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>
                    Alianzas con academias y clubes internacionales, colegios y
                    clubes náuticos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Alianzas con hoteles y touroperadores</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-normal text-gray-900 mb-4">Retención:</p>
              <ul className="space-y-3 text-gray-600 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>Programas de fidelización para miembros</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>
                    Eventos sociales y deportivos a nivel local e internacional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">—</span>
                  <span>
                    Estrategias con influencers deportivos en redes sociales
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hoja de Ruta */}
        <div className="md:col-span-2 border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-8 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-600" />
            Hoja de Ruta
          </h3>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-300 pl-6">
              <p className="font-normal text-gray-900 text-xl mb-2">2026</p>
              <p className="text-gray-600 font-light leading-relaxed">
                Adjudicación de la concesión. Inicio de la remodelación de las
                pistas, construcción del pádel cubierto y habilitación del
                restaurante. Puesta en marcha progresiva de las distintas líneas
                de negocio.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-6">
              <p className="font-normal text-gray-900 text-xl mb-2">2027</p>
              <p className="text-gray-600 font-light leading-relaxed">
                Desarrollo del rooftop con sus programas principales, apertura
                del club social, gimnasio y área infantil. Enfoque estratégico
                en el posicionamiento y fortalecimiento de la marca.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-6">
              <p className="font-normal text-gray-900 text-xl mb-2">
                2028 – 2029
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Consolidación de las líneas de negocio y de la identidad de
                marca. Lanzamiento de nuevas sublíneas y ampliaciones de
                servicios.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-6">
              <p className="font-normal text-gray-900 text-xl mb-2">2030</p>
              <p className="text-gray-600 font-light leading-relaxed">
                Club y líneas de negocio plenamente consolidadas, alcanzando el
                EBITDA objetivo.
              </p>
            </div>
          </div>
        </div>

        {/* Salida Futura */}
        <div className="md:col-span-2 border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-8">
            Salida Futura
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-gray-300 pl-6 py-2">
              <p className="font-normal text-gray-900 mb-2">Opción 1:</p>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Venta de la concesión a una academia o club social de mayor
                tamaño.
              </p>
            </div>
            <div className="border-l-2 border-gray-300 pl-6 py-2">
              <p className="font-normal text-gray-900 mb-2">Opción 2:</p>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                Venta a un fondo de capital privado (Private Equity).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
