"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className={`text-lg font-light tracking-wide transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Club Deportivo Mallorca
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href="#equipo"
              className={`text-sm font-light transition-colors ${
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              El Equipo
            </Link>
            <Link
              href="#concepto"
              className={`text-sm font-light transition-colors ${
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              El Concepto
            </Link>
            <Link
              href="#proyectos"
              className={`text-sm font-light transition-colors ${
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Proyectos
            </Link>
            <Link
              href="#inversion"
              className={`text-sm font-light transition-colors ${
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Inversión
            </Link>
          </div>

          <Button
            asChild
            variant="outline"
            className={`hidden md:flex rounded-full transition-all ${
              isScrolled
                ? "border-gray-300 bg-transparent hover:bg-gray-50 text-gray-900"
                : "border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            }`}
          >
            <Link
              href="#inversores"
              className="flex items-center gap-2 text-sm font-light"
            >
              <Lock className="w-4 h-4" />
              Acceso para inversores
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
