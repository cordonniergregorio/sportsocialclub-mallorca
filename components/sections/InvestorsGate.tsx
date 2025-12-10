"use client";

import { ProtectedSection } from "@/components/protected/ProtectedSection";
import { InvestorsContent } from "@/components/protected/InvestorsContent";

export function InvestorsGate() {
  const title = (
    <div className="text-center">
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
        Área Privada
        <br />
        <span className="font-normal">de Inversores</span>
      </h2>
      <p className="text-xl text-gray-500 font-light">
        Información confidencial del proyecto Santa Ponça
      </p>
    </div>
  );

  return (
    <section id="inversores" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProtectedSection title={title}>
          <InvestorsContent />
        </ProtectedSection>
      </div>
    </section>
  );
}

