"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  TrendingUp,
  Target,
  Users,
  MapPin,
  Building2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function InvestorsContent() {
  const { t } = useLanguage();
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-gray-600" />
              {t.investorsContent.financial.title}
            </h3>
            <p className="text-sm text-gray-500 font-light">
              {t.investorsContent.financial.subtitle}
            </p>
          </div>
          <div className="space-y-5">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="text-xs text-gray-500 mb-1 font-light uppercase tracking-wider">
                {t.investorsContent.financial.investment}
              </p>
              <p className="text-3xl font-bold text-gray-900">1,25 M€</p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 py-2">
              <p className="text-xs text-gray-500 mb-1 font-light uppercase tracking-wider">
                {t.investorsContent.financial.guarantees}
              </p>
              <p className="text-3xl font-bold text-gray-900">350k €</p>
              <p className="text-xs text-gray-400 mt-1 font-light">
                {t.investorsContent.financial.guaranteesNote}
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <p className="text-xs text-gray-500 mb-1 font-light uppercase tracking-wider">
                {t.investorsContent.financial.ebitda}
              </p>
              <p className="text-3xl font-bold text-gray-900">300k €</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-400 font-light">
                {t.investorsContent.financial.excelNote}
              </p>
              <p className="text-xs text-gray-400 font-light mt-1">
                {t.investorsContent.financial.concessionNote}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-gray-600" />
            {t.investorsContent.value.title}
          </h3>
          <div className="space-y-4 text-gray-600 font-light leading-relaxed text-sm">
            <p>{t.investorsContent.value.p1}</p>
            <p>{t.investorsContent.value.p2}</p>
            <p className="font-bold text-gray-900">
              {t.investorsContent.value.p3}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-600" />
            {t.investorsContent.location.title}
          </h3>
          <ul className="space-y-2.5 text-gray-600 font-light text-sm">
            {t.investorsContent.location.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mercado */}
        <motion.div
          className="border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-600" />
            {t.investorsContent.market.title}
          </h3>
          <div className="space-y-4 text-gray-600 font-light text-sm">
            <div>
              <p className="font-bold text-gray-900 mb-2">
                {t.investorsContent.market.residents.title}
              </p>
              <p className="leading-relaxed">
                {t.investorsContent.market.residents.description}
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">
                {t.investorsContent.market.tourism.title}
              </p>
              <p className="leading-relaxed">
                {t.investorsContent.market.tourism.description}
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">
                {t.investorsContent.market.trends.title}
              </p>
              <p className="leading-relaxed">
                {t.investorsContent.market.trends.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Competencia */}
        <motion.div
          className="border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-gray-600" />
            {t.investorsContent.competition.title}
          </h3>
          <div className="space-y-4 text-gray-600 font-light text-sm">
            <div>
              <p className="font-bold text-gray-900 mb-2">
                {t.investorsContent.competition.highEnd.title}
              </p>
              <p className="leading-relaxed">
                {t.investorsContent.competition.highEnd.description}
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">
                {t.investorsContent.competition.lowEnd.title}
              </p>
              <p className="leading-relaxed">
                {t.investorsContent.competition.lowEnd.description}
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4 py-3 mt-4 bg-emerald-50/30 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-1">
                {t.investorsContent.competition.opportunity.title}
              </p>
              <p className="leading-relaxed">
                {t.investorsContent.competition.opportunity.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Oportunidad */}
        <motion.div
          className="border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-gray-600" />
            {t.investorsContent.opportunity.title}
          </h3>
          <div className="space-y-3 text-gray-600 font-light leading-relaxed text-sm">
            {t.investorsContent.opportunity.items.map((item, index) => (
              <p key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </motion.div>

        {/* Modelo de Negocio */}
        <motion.div
          className="border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {t.investorsContent.business.title}
          </h3>
          <ul className="space-y-2.5 text-gray-600 font-light text-sm">
            {t.investorsContent.business.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Potencial Futuro */}
        <motion.div
          className="border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {t.investorsContent.future.title}
          </h3>
          <ul className="space-y-2.5 text-gray-600 font-light text-sm">
            {t.investorsContent.future.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
            <li className="font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
              {t.investorsContent.future.note}
            </li>
          </ul>
        </motion.div>

        {/* Marketing y Ventas */}
        <motion.div
          className="md:col-span-2 border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {t.investorsContent.marketing.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold text-gray-900 mb-4">
                {t.investorsContent.marketing.acquisition.title}
              </p>
              <ul className="space-y-2.5 text-gray-600 text-sm font-light">
                {t.investorsContent.marketing.acquisition.items.map(
                  (item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-4">
                {t.investorsContent.marketing.retention.title}
              </p>
              <ul className="space-y-2.5 text-gray-600 text-sm font-light">
                {t.investorsContent.marketing.retention.items.map(
                  (item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Hoja de Ruta */}
        <motion.div
          className="md:col-span-2 border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-600" />
            {t.investorsContent.roadmap.title}
          </h3>
          <div className="space-y-5">
            <div className="border-l-4 border-blue-500 pl-5 py-3">
              <p className="font-bold text-gray-900 text-lg mb-2">
                {t.investorsContent.roadmap.year2026.year}
              </p>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                {t.investorsContent.roadmap.year2026.description}
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-5 py-3">
              <p className="font-bold text-gray-900 text-lg mb-2">
                {t.investorsContent.roadmap.year2027.year}
              </p>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                {t.investorsContent.roadmap.year2027.description}
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-5 py-3">
              <p className="font-bold text-gray-900 text-lg mb-2">
                {t.investorsContent.roadmap.year2028.year}
              </p>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                {t.investorsContent.roadmap.year2028.description}
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-5 py-3">
              <p className="font-bold text-gray-900 text-lg mb-2">
                {t.investorsContent.roadmap.year2030.year}
              </p>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
                {t.investorsContent.roadmap.year2030.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Salida Futura */}
        <motion.div
          className="md:col-span-2 border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          whileHover={{
            borderColor: "rgb(59, 130, 246)",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {t.investorsContent.exit.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-5 py-3 bg-blue-50/30 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">
                {t.investorsContent.exit.option1.title}
              </p>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {t.investorsContent.exit.option1.description}
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-5 py-3 bg-emerald-50/30 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">
                {t.investorsContent.exit.option2.title}
              </p>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {t.investorsContent.exit.option2.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
