"use client";

import { useState, FormEvent } from "react";
import { Lock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/LanguageContext";

interface PasswordGateProps {
  onUnlock: () => void;
}

export function PasswordGate({ onUnlock }: PasswordGateProps) {
  const { t } = useLanguage();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = process.env.NEXT_PUBLIC_INVESTOR_PASSWORD || "12345";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

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
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Lock className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-sm text-gray-500 font-light">
                {t.passwordGate.title}
              </p>
            </div>

            <div className="relative">
              <Input
                type="password"
                placeholder={t.passwordGate.placeholder}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full border-2 rounded-lg px-6 py-4 text-center font-light transition-all bg-white ${
                  error
                    ? "border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-100"
                }`}
                disabled={isLoading}
                autoFocus
              />
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 mt-3 text-sm text-red-600 font-light"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>{t.passwordGate.error}</span>
                </motion.div>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full rounded-lg bg-black hover:bg-gray-900 text-white border-0 transition-all font-light py-4"
            disabled={isLoading || !password}
          >
            {isLoading ? t.passwordGate.verifying : t.passwordGate.button}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
