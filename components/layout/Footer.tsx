"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logoPrimary.png"
                alt={t.clubName}
                width={200}
                height={60}
                className=" w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-500 font-light">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-base font-light text-gray-900 mb-4">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 font-light">
              <li>
                <Link
                  href="#equipo"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t.footer.nav.team}
                </Link>
              </li>
              <li>
                <Link
                  href="#concepto"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t.footer.nav.concept}
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t.footer.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="#inversion"
                  className="hover:text-gray-900 transition-colors"
                >
                  {t.footer.nav.investment}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-light text-gray-900 mb-4">
              {t.footer.contact}
            </h3>
            <p className="text-sm text-gray-500 mb-3 font-light">
              <a
                href="mailto:cordonnier.gregorio@gmail.com"
                className="hover:text-gray-900 transition-colors"
              >
                cordonnier.gregorio@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center font-light">
            © {new Date().getFullYear()} {t.clubName}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
