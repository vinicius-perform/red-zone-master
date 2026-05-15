import { Brain, AlertOctagon, ShieldOff, Lock } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: AlertOctagon,
    title: "Travou diante de um paciente grave?",
    desc: "Sabe o que fazer, mas o corpo congela quando a vida do paciente está em jogo.",
  },
  {
    icon: ShieldOff,
    title: "Sente insegurança em sala vermelha?",
    desc: "Cada plantão vira uma roleta — e a próxima emergência pode ser hoje.",
  },
  {
    icon: Lock,
    title: "Evita procedimentos por medo?",
    desc: "Deixa para o colega, espera o staff, perde a chance de aprender na prática.",
  },
  {
    icon: Brain,
    title: "Sabe a teoria, mas falta confiança?",
    desc: "O conhecimento existe. O que falta é treino real para agir sob pressão.",
  },
];

export function PainSection() {
  return (
    <section id="dor" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-red opacity-40 -z-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">A realidade do plantão</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]">
            A faculdade ensina teoria.
            <span className="block text-primary text-glow-red">O plantão exige decisão.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            Você passou anos estudando — mas ninguém te ensinou a manter o sangue
            frio enquanto a saturação cai e a equipe te olha esperando uma ordem.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group relative h-full rounded-2xl glass p-6 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 group-hover:shadow-glow-soft transition-all">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-semibold text-lg leading-snug">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
