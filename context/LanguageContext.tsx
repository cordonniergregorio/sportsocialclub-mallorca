"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  useEffect,
} from "react";
import { Language, translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Usamos valor estable en SSR para evitar mismatches; luego sincronizamos en efecto.
  const [language, setLanguageState] = useState<Language>("fr");

  // Sincroniza idioma desde localStorage solo en cliente
  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage === "fr" || savedLanguage === "en" || savedLanguage === "es") {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = useMemo(() => translations[language], [language]);

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
