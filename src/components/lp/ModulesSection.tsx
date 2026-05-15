import {
  Heart, Wind, Brain, FlaskConical, Stethoscope, Syringe,
  Activity, TestTube2, Droplets, Crosshair, Slash, Waves,
  Wind as Lung, Award, ShieldCheck, Ambulance, Truck,
} from "lucide-react";
import airway from "@/assets/module-airway.jpg";
import cardio from "@/assets/module-cardio.jpg";
import vent from "@/assets/module-ventilation.jpg";
import procImg from "@/assets/module-procedures.jpg";
import { Reveal } from "./Reveal";
import { CTAButton } from "./CTAButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const posterModules = [
  "https://emergpapers.com/wp-content/uploads/2026/05/OB.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/Procedimentos.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/ECG.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/ATB.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/POCUS.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/Coracao.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/VAB.png"
];

const featured = [
  { title: "Manejo de Via Aérea", subtitle: "Sequência rápida. Plano A, B, C, D.", img: airway },
  { title: "Emergências Cardiovasculares", subtitle: "IAM, arritmias, choque, parada.", img: cardio },
  { title: "Ventilação Mecânica", subtitle: "Modos, ajustes e desmame.", img: vent },
  { title: "Procedimentos Críticos", subtitle: "Acesso central, drenos, punções.", img: procImg },
];

const modules: { icon: React.ComponentType<{ className?: string }>; name: string }[] = [
  { icon: Heart, name: "Emergências Cardiovasculares" },
  { icon: Lung, name: "Emergências Respiratórias" },
  { icon: Brain, name: "Emergências Neurológicas" },
  { icon: FlaskConical, name: "Emergências Metabólicas" },
  { icon: Wind, name: "Manejo de Via Aérea" },
  { icon: Stethoscope, name: "Intubação Orotraqueal" },
  { icon: Activity, name: "Ventilação Mecânica" },
  { icon: TestTube2, name: "Gasometria Arterial" },
  { icon: Syringe, name: "Acesso Venoso Central" },
  { icon: Crosshair, name: "Punção Intra-Arterial" },
  { icon: Droplets, name: "Pericardiocentese" },
  { icon: Waves, name: "Paracentese" },
  { icon: Slash, name: "Toracocentese" },
  { icon: Award, name: "ACLS" },
  { icon: ShieldCheck, name: "PALS" },
  { icon: Ambulance, name: "ATLS" },
  { icon: Truck, name: "PHTLS" },
];

export function ModulesSection() {
  return (
    <section id="modulos" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface to-background" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Arsenal de treinamento</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]">
            Um treinamento completo para
            <span className="block text-primary text-glow-red">dominar emergências reais.</span>
          </h2>
        </Reveal>

        {/* Featured visual cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <article className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-primary/90">Módulo</div>
                  <h3 className="mt-1 font-display text-2xl uppercase leading-tight">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.subtitle}</p>
                </div>
                <div className="absolute top-3 right-3 size-2 rounded-full bg-primary animate-pulse shadow-glow-soft" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Full grid of modules */}
        <Reveal className="mt-16">
          <div className="rounded-3xl glass p-6 sm:p-10">
            <div className="flex items-baseline justify-between mb-8 flex-wrap gap-2">
              <h3 className="font-display text-2xl uppercase tracking-wide">+17 módulos cinematográficos</h3>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Conteúdo vivo</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {modules.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-3.5 py-3 hover:border-primary/40 hover:bg-surface-elevated transition-all"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium leading-tight">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Posters Modules Carousel */}
        <Reveal className="mt-16">
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide">Módulos Exclusivos</h3>
            <span className="hidden sm:inline-block text-xs text-primary uppercase tracking-widest text-glow-red font-semibold">Séries Premium</span>
          </div>
          <div className="w-full relative">
            <Carousel
              opts={{
                align: "start",
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 py-4">
                {posterModules.map((src, index) => (
                  <CarouselItem key={index} className="pl-4 basis-[55%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <article className="group relative w-full aspect-[2/3] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow hover:border-primary/40 cursor-grab active:cursor-grabbing">
                      <img
                        src={src}
                        alt={`Módulo Exclusivo ${index + 1}`}
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      />
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden xl:block">
                <CarouselPrevious className="-left-14" />
                <CarouselNext className="-right-14" />
              </div>
            </Carousel>
          </div>
        </Reveal>

        <div className="mt-16 flex justify-center">
          <CTAButton size="lg">Quero acesso completo</CTAButton>
        </div>
      </div>
    </section>
  );
}
