import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/lp/Nav";
import { Hero } from "@/components/lp/Hero";
import { PainSection } from "@/components/lp/PainSection";
import { ModulesSection } from "@/components/lp/ModulesSection";
import { TransformationSection } from "@/components/lp/TransformationSection";
import { SocialProof } from "@/components/lp/SocialProof";
import { CommunitySection } from "@/components/lp/CommunitySection";
import { BonusSection } from "@/components/lp/BonusSection";
import { FinalCTA } from "@/components/lp/FinalCTA";
import { Footer } from "@/components/lp/Footer";
import { FloatingWhats } from "@/components/lp/FloatingWhats";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Domine a Sala Vermelha — Treinamento de Emergência | EmergPapers" },
      {
        name: "description",
        content:
          "Treinamento prático para médicos: via aérea, ventilação, procedimentos e decisão sob pressão. Domine a sala vermelha antes do próximo plantão.",
      },
      { property: "og:title", content: "Domine a Sala Vermelha | EmergPapers" },
      {
        property: "og:description",
        content:
          "De médico inseguro a médico resolutivo. Treinamento de elite em emergências reais.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <PainSection />
      <ModulesSection />
      <TransformationSection />
      <SocialProof />
      <CommunitySection />
      <BonusSection />
      <FinalCTA />
      <Footer />
      <FloatingWhats />
    </main>
  );
}
