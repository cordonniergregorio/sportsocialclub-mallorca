import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-base font-light text-gray-900 mb-4">
              Club Deportivo Mallorca
            </h3>
            <p className="text-sm text-gray-500 font-light">
              Un nuevo concepto de club social y deportivo en Mallorca
            </p>
          </div>

          <div>
            <h3 className="text-base font-light text-gray-900 mb-4">
              Navegación
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 font-light">
              <li>
                <Link
                  href="#equipo"
                  className="hover:text-gray-900 transition-colors"
                >
                  El Equipo
                </Link>
              </li>
              <li>
                <Link
                  href="#concepto"
                  className="hover:text-gray-900 transition-colors"
                >
                  El Concepto
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="hover:text-gray-900 transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="#inversion"
                  className="hover:text-gray-900 transition-colors"
                >
                  Inversión
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-light text-gray-900 mb-4">
              Contacto
            </h3>
            <p className="text-sm text-gray-500 mb-3 font-light">
              <a
                href="mailto:cordonnier.gregorio@gmail.com"
                className="hover:text-gray-900 transition-colors"
              >
                cordonnier.gregorio@gmail.com
              </a>
            </p>
            <Link
              href="/aviso-legal"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-light"
            >
              Aviso legal
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center font-light">
            © {new Date().getFullYear()} Club Deportivo Mallorca. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
