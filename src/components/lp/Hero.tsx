import { Play, ShieldCheck, Stethoscope, Activity, Zap, HeartPulse } from "lucide-react";
import heroImg from "@/assets/hero-emergency.jpg";
import bgTexture from "@/assets/bg-texture.jpg";
import { CTAButton } from "./CTAButton";

const bullets = [
  { icon: Stethoscope, label: "Via aérea e intubação" },
  { icon: HeartPulse, label: "Emergências reais" },
  { icon: Zap, label: "Procedimentos críticos" },
  { icon: Activity, label: "Ventilação mecânica" },
  { icon: ShieldCheck, label: "Decisão sob pressão" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-background" />
      <img
        src={bgTexture}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[60vh] bg-gradient-to-b from-primary/15 via-transparent to-transparent" />
      {/* Floating glow orbs */}
      <div className="absolute -top-20 -left-20 size-[420px] rounded-full bg-primary/20 blur-[120px] animate-float -z-10" />
      <div className="absolute top-40 -right-20 size-[380px] rounded-full bg-primary/15 blur-[140px] -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — copy */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass-red px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary/90 mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Treinamento de elite • EmergPapers
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] uppercase">
              Pare de <span className="text-muted-foreground">sobreviver</span> ao plantão.
              <span className="block mt-3 text-primary text-glow-red">
                Domine a Sala Vermelha.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Treinamento prático para médicos que querem ganhar
              <span className="text-foreground"> segurança, técnica e controle </span>
              diante de pacientes graves.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {bullets.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl glass px-4 py-3 text-sm"
                >
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-foreground/90">{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <CTAButton size="xl" pulse>
                Quero mais informações
              </CTAButton>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Fale agora com nossa equipe e tire suas dúvidas.
            </p>
          </div>

          {/* RIGHT — Video mockup */}
          <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms]">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[2rem] opacity-60 group-hover:opacity-100 transition" />
              <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-2xl overflow-hidden shadow-elevated border border-white/10">
                <img
                  src={heroImg}
                  alt="Médico em sala vermelha durante emergência"
                  className="absolute inset-0 size-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1500ms]"
                  width={1600}
                  height={900}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

                {/* Play button */}
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Assistir vídeo"
                >
                  <span className="relative flex size-20 sm:size-24 items-center justify-center rounded-full bg-gradient-red shadow-glow animate-pulse-red">
                    <Play className="size-8 sm:size-10 text-white fill-white ml-1" />
                  </span>
                </button>

                {/* Bottom HUD */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                      AO VIVO • SALA VERMELHA
                    </span>
                    <span className="font-mono">04:32 / 12:18</span>
                  </div>
                  <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[36%] bg-gradient-red" />
                  </div>
                </div>

                {/* Top corner badge */}
                <div className="absolute top-4 left-4 rounded-md glass px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold">
                  EmergPapers • Cinematic Training
                </div>
              </div>

              {/* Floating chip */}
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 glass rounded-2xl px-4 py-3 shadow-card animate-float">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <HeartPulse className="size-5" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Casos reais</p>
                  <p className="text-sm font-semibold">+3.000 médicos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
