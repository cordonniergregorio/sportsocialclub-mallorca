"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  TrendingUp,
  Target,
  Users,
  MapPin,
  Building2,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface InvestorSectionProps {
  title: string;
  icon: ReactNode;
  preview: ReactNode;
  fullContent: ReactNode;
  delay?: number;
  className?: string;
}

function InvestorSection({
  title,
  icon,
  preview,
  fullContent,
  delay = 0,
  className,
}: InvestorSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <motion.div
          className={cn(
            "border-2 border-gray-200 rounded-xl p-6 bg-white transition-all duration-300 group cursor-pointer",
            className
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
          whileHover={{
            borderColor: "#006F9D",
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 111, 157, 0.1)",
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#006F9D] transition-colors mt-1" />
          </div>
          <div className="text-gray-600">{preview}</div>
        </motion.div>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-full max-h-[90vh] overflow-y-auto border-t-2 border-[#006F9D] px-4 sm:px-6 lg:px-8"
      >
        <div className="space-y-6 max-w-7xl mx-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-3 text-2xl font-bold text-gray-900 pb-4 border-b border-gray-200">
              {icon}
              {title}
            </SheetTitle>
          </SheetHeader>
          <div>{fullContent}</div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

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
        {/* Modelo Financiero */}
        <InvestorSection
          title={t.investorsContent.financial.title}
          icon={<DollarSign className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="flex items-end gap-4 mt-2">
              <div>
                <p className="text-xs text-gray-500 font-light uppercase tracking-wider mb-1">
                  Inversión
                </p>
                <p className="text-3xl font-bold text-[#006F9D]">1,25 M€</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-light uppercase tracking-wider mb-1">
                  EBITDA
                </p>
                <p className="text-3xl font-bold text-[#FF7E3B]">300k €</p>
              </div>
            </div>
          }
          fullContent={
            <div className="space-y-5">
              <div className="border-l-4 border-[#006F9D] pl-4 py-2">
                <p className="text-xs text-gray-500 mb-1 font-light uppercase tracking-wider">
                  {t.investorsContent.financial.investment}
                </p>
                <p className="text-3xl font-bold text-gray-900">1,25 M€</p>
              </div>
              <div className="border-l-4 border-[#FF7E3B] pl-4 py-2">
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
          }
          delay={0.1}
        />

        {/* Propuesta de Valor */}
        <InvestorSection
          title={t.investorsContent.value.title}
          icon={<Target className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="mt-2">
              <p className="text-sm text-gray-600 font-light">
                Club social deportivo integral de alta calidad
              </p>
              <p className="text-xs text-gray-400 mt-2">Concesión 31 años</p>
            </div>
          }
          fullContent={
            <div className="space-y-4 text-gray-600 font-light leading-relaxed text-sm">
              <p>{t.investorsContent.value.p1}</p>
              <p>{t.investorsContent.value.p2}</p>
              <p className="font-bold text-gray-900">
                {t.investorsContent.value.p3}
              </p>
            </div>
          }
          delay={0.2}
        />

        {/* Ubicación */}
        <InvestorSection
          title={t.investorsContent.location.title}
          icon={<MapPin className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="mt-2">
              <p className="text-4xl font-bold text-[#006F9D] mb-1">
                {t.investorsContent.location.items.length}
              </p>
              <p className="text-sm text-gray-600 font-light">
                Ventajas de ubicación
              </p>
            </div>
          }
          fullContent={
            <ul className="space-y-2.5 text-gray-600 font-light text-sm">
              {t.investorsContent.location.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#006F9D] mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          }
          delay={0.3}
        />

        {/* Mercado */}
        <InvestorSection
          title={t.investorsContent.market.title}
          icon={<Users className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="mt-2">
              <div className="flex items-end gap-4">
                <div>
                  <p className="text-3xl font-bold text-[#006F9D]">450k</p>
                  <p className="text-xs text-gray-500 mt-1">Residentes</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#FF7E3B]">10M+</p>
                  <p className="text-xs text-gray-500 mt-1">Turistas/año</p>
                </div>
              </div>
            </div>
          }
          fullContent={
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
          }
          delay={0.4}
        />

        {/* Competencia */}
        <InvestorSection
          title={t.investorsContent.competition.title}
          icon={<Building2 className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="mt-2">
              <p className="text-sm text-gray-600 font-light">
                Análisis competitivo y ventaja estratégica
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#006F9D] to-[#FF7E3B] w-3/4"></div>
                </div>
                <span className="text-xs text-gray-500">3 factores</span>
              </div>
            </div>
          }
          fullContent={
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
              <div className="border-l-4 border-[#FF7E3B] pl-4 py-3 mt-4 bg-[#FF7E3B]/10 rounded-r-lg">
                <p className="font-bold text-gray-900 mb-1">
                  {t.investorsContent.competition.opportunity.title}
                </p>
                <p className="leading-relaxed">
                  {t.investorsContent.competition.opportunity.description}
                </p>
              </div>
            </div>
          }
          delay={0.5}
        />

        {/* Oportunidad */}
        <InvestorSection
          title={t.investorsContent.opportunity.title}
          icon={<TrendingUp className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="mt-2">
              <p className="text-4xl font-bold text-[#006F9D] mb-1">
                {t.investorsContent.opportunity.items.length}
              </p>
              <p className="text-sm text-gray-600 font-light">
                Oportunidades clave
              </p>
            </div>
          }
          fullContent={
            <div className="space-y-3 text-gray-600 font-light leading-relaxed text-sm">
              {t.investorsContent.opportunity.items.map((item, index) => (
                <p key={index} className="flex items-start gap-2">
                  <span className="text-[#006F9D] mt-1">•</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          }
          delay={0.6}
        />

        {/* Modelo de Negocio */}
        <InvestorSection
          title={t.investorsContent.business.title}
          icon={<DollarSign className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="mt-2">
              <p className="text-4xl font-bold text-[#006F9D] mb-1">
                {t.investorsContent.business.items.length}
              </p>
              <p className="text-sm text-gray-600 font-light">
                Fuentes de ingresos
              </p>
            </div>
          }
          fullContent={
            <ul className="space-y-2.5 text-gray-600 font-light text-sm">
              {t.investorsContent.business.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#006F9D] mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          }
          delay={0.7}
          className="md:col-span-2"
        />

        {/* Potencial Futuro */}
        <InvestorSection
          title={t.investorsContent.future.title}
          icon={<TrendingUp className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="mt-2">
              <p className="text-sm text-gray-600 font-light">
                Expansión y crecimiento
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {t.investorsContent.future.items.length} áreas potenciales
              </p>
            </div>
          }
          fullContent={
            <>
              <ul className="space-y-2.5 text-gray-600 font-light text-sm">
                {t.investorsContent.future.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#006F9D] mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
                {t.investorsContent.future.note}
              </p>
            </>
          }
          delay={0.8}
          className="md:col-span-2"
        />

        {/* Marketing y Ventas */}
        <InvestorSection
          title={t.investorsContent.marketing.title}
          icon={<Users className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="mt-2 flex items-end gap-4">
              <div>
                <p className="text-2xl font-bold text-[#006F9D]">
                  {t.investorsContent.marketing.acquisition.items.length}
                </p>
                <p className="text-xs text-gray-500 mt-1">Adquisición</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#FF7E3B]">
                  {t.investorsContent.marketing.retention.items.length}
                </p>
                <p className="text-xs text-gray-500 mt-1">Retención</p>
              </div>
            </div>
          }
          fullContent={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-bold text-gray-900 mb-4">
                  {t.investorsContent.marketing.acquisition.title}
                </p>
                <ul className="space-y-2.5 text-gray-600 text-sm font-light">
                  {t.investorsContent.marketing.acquisition.items.map(
                    (item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#006F9D] mt-1.5">•</span>
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
                        <span className="text-[#006F9D] mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          }
          delay={0.9}
          className="md:col-span-2"
        />

        {/* Hoja de Ruta */}
        <InvestorSection
          title={t.investorsContent.roadmap.title}
          icon={<Calendar className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="mt-2">
              <p className="text-sm text-gray-600 font-light mb-3">
                Timeline estratégico
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 flex gap-1">
                  <div className="h-2 flex-1 bg-blue-500 rounded"></div>
                  <div className="h-2 flex-1 bg-emerald-500 rounded"></div>
                  <div className="h-2 flex-1 bg-amber-500 rounded"></div>
                  <div className="h-2 flex-1 bg-purple-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">4 años</span>
              </div>
            </div>
          }
          fullContent={
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
          }
          delay={1.0}
          className="md:col-span-2"
        />

        {/* Salida Futura */}
        <InvestorSection
          title={t.investorsContent.exit.title}
          icon={<Target className="w-6 h-6 text-[#006F9D]" />}
          preview={
            <div className="mt-2">
              <p className="text-4xl font-bold text-[#006F9D] mb-1">2</p>
              <p className="text-sm text-gray-600 font-light">
                Estrategias de salida
              </p>
            </div>
          }
          fullContent={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-[#006F9D] pl-5 py-3 bg-[#006F9D]/10 rounded-r-lg">
                <p className="font-bold text-gray-900 mb-2">
                  {t.investorsContent.exit.option1.title}
                </p>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {t.investorsContent.exit.option1.description}
                </p>
              </div>
              <div className="border-l-4 border-[#FF7E3B] pl-5 py-3 bg-[#FF7E3B]/10 rounded-r-lg">
                <p className="font-bold text-gray-900 mb-2">
                  {t.investorsContent.exit.option2.title}
                </p>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {t.investorsContent.exit.option2.description}
                </p>
              </div>
            </div>
          }
          delay={1.1}
          className="md:col-span-2"
        />
      </div>
    </motion.div>
  );
}
