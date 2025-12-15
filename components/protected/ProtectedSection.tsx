"use client";

import { useState, useEffect, ReactNode } from "react";
import { PasswordGate } from "./PasswordGate";

interface ProtectedSectionProps {
  children: ReactNode;
  title?: ReactNode;
}

const checkAuthExpiration = (): boolean => {
  if (typeof window === "undefined") return false;

  const authStatus = localStorage.getItem("investor_authenticated");
  const authTimestamp = localStorage.getItem("investor_auth_timestamp");

  if (authStatus === "true" && authTimestamp) {
    const now = Date.now();
    const timestamp = parseInt(authTimestamp, 10);
    const fifteenMinutes = 15 * 60 * 1000;

    if (now - timestamp < fifteenMinutes) {
      return true;
    } else {
      localStorage.removeItem("investor_authenticated");
      localStorage.removeItem("investor_auth_timestamp");
      return false;
    }
  }
  return false;
};

export function ProtectedSection({ children, title }: ProtectedSectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    checkAuthExpiration()
  );
  const [isLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const stillValid = checkAuthExpiration();
      if (!stillValid && isAuthenticated) {
        setIsAuthenticated(false);
        window.location.reload();
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [isAuthenticated]);

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
      {title}

      {isAuthenticated ? (
        <div className="mt-12">{children}</div>
      ) : (
        <div className="mt-2">
          <PasswordGate onUnlock={handleUnlock} />
        </div>
      )}
    </div>
  );
}
