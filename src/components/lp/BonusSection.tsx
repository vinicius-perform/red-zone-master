import { Activity, FileText, BookMarked, Heart } from "lucide-react";
import { Reveal } from "./Reveal";

const bonuses = [
  { icon: Activity, name: "ECG na Emergência", tag: "Bônus 01", desc: "Decifre traçados em segundos." },
  { icon: FileText, name: "Guia de Prescrições", tag: "Bônus 02", desc: "Doses, diluições, cuidados." },
  { icon: BookMarked, name: "Guia de Bolso", tag: "Bônus 03", desc: "Protocolos prontos para o plantão." },
  { icon: Heart, name: "Emergências Cardiovasculares", tag: "Bônus 04", desc: "Manual completo do plantonista." },
];

export function BonusSection() {
  return (
    <section id="bonus" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/40 via-background to-background" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Materiais inclusos</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]">
            Bônus que valem
            <span className="block text-primary text-glow-red">o curso inteiro.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bonuses.map(({ icon: Icon, name, tag, desc }, i) => (
            <Reveal key={name} delay={i * 80}>
              <div className="group relative rounded-2xl glass p-6 h-full overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-glow-soft hover:border-primary/40">
                {/* Mock book/material */}
                <div className="relative mb-6 h-44 flex items-end justify-center">
                  <div className="absolute inset-x-8 bottom-0 h-40 rounded-md bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl" />
                  <div
                    className="relative w-28 h-40 rounded-md bg-gradient-to-br from-surface-elevated to-surface border border-white/10 shadow-elevated transform rotate-[-6deg] group-hover:rotate-0 group-hover:-translate-y-2 transition-transform duration-500 flex flex-col"
                  >
                    <div className="h-1 bg-gradient-red" />
                    <div className="flex-1 p-3 flex flex-col">
                      <div className="text-[8px] tracking-widest text-primary/80 uppercase">EmergPapers</div>
                      <Icon className="size-7 mt-2 text-primary" />
                      <div className="mt-auto text-[9px] font-semibold leading-tight">{name}</div>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-primary mb-1">{tag}</div>
                <h3 className="font-semibold leading-snug">{name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
