import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Team } from "@/components/sections/Team";
import { Concept } from "@/components/sections/Concept";
import { Projects } from "@/components/sections/Projects";
import { Investment } from "@/components/sections/Investment";
import { InvestorsGate } from "@/components/sections/InvestorsGate";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Team />
      <Concept />
      <Projects />
      <Investment />
      <InvestorsGate />
      <Footer />
    </main>
  );
}
