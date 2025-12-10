"use client";

import { useState, useEffect, ReactNode } from "react";
import { PasswordGate } from "./PasswordGate";

interface ProtectedSectionProps {
  children: ReactNode;
  title?: ReactNode;
}

export function ProtectedSection({ children, title }: ProtectedSectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si ya está autenticado en localStorage
    const authStatus = localStorage.getItem("investor_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleUnlock = () => {
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <div className="text-gray-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Mostrar siempre el título */}
      {title}

      {/* Mostrar contenido solo si está autenticado */}
      {isAuthenticated ? (
        <div className="mt-12">{children}</div>
      ) : (
        <div className="mt-12">
          <PasswordGate onUnlock={handleUnlock} />
        </div>
      )}
    </div>
  );
}
