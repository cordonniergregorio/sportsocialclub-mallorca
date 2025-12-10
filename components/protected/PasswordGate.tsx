"use client";

import { useState, FormEvent } from "react";
import { Lock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PasswordGateProps {
  onUnlock: () => void;
}

export function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = process.env.NEXT_PUBLIC_INVESTOR_PASSWORD || "12345";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    // Simular validación
    setTimeout(() => {
      if (password === correctPassword) {
        localStorage.setItem("investor_authenticated", "true");
        onUnlock();
      } else {
        setError(true);
        setPassword("");
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header con gradiente */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
              <Lock className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-light text-white mb-1">
            Acceso Privado
          </h3>
          <p className="text-sm text-blue-100 font-light">para Inversores</p>
        </div>

        {/* Formulario */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-light text-gray-600 mb-2 text-center">
                Ingresa tu contraseña
              </label>
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full border-2 rounded-full px-6 py-4 text-center font-light transition-all ${
                  error
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
                disabled={isLoading}
                autoFocus
              />
              {error && (
                <div className="flex items-center justify-center gap-2 mt-3 text-sm text-red-600 font-light">
                  <AlertCircle className="w-4 h-4" />
                  <span>Contraseña incorrecta. Intenta nuevamente.</span>
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all font-light py-4"
              disabled={isLoading || !password}
            >
              {isLoading ? "Verificando..." : "Acceder"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
