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
    if (typeof window === "undefined") return;

    const handleInitialScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    requestAnimationFrame(handleInitialScroll);
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
