"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Team } from "@/components/sections/Team";
import { Banner } from "@/components/sections/Banner";
import { Concept } from "@/components/sections/Concept";
import { Projects } from "@/components/sections/Projects";
import { Investment } from "@/components/sections/Investment";
import { InvestorsGate } from "@/components/sections/InvestorsGate";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Team />
      <Banner />
      <Concept />
      <Projects />
      <Investment />
      <InvestorsGate />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
