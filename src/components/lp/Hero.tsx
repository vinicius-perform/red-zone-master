import { ShieldCheck, Stethoscope, Activity, Zap, HeartPulse } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import { CTAButton } from "./CTAButton";
import { VideoPlayer } from "./VideoPlayer";

const bullets = [
  { icon: Stethoscope, label: "Via aérea e intubação" },
  { icon: HeartPulse, label: "Emergências reais" },
  { icon: Zap, label: "Procedimentos críticos" },
  { icon: Activity, label: "Ventilação mecânica" },
  { icon: ShieldCheck, label: "Decisão sob pressão" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden min-h-screen flex items-center pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background image — doctor as a cinematic watermark */}
      <div className="absolute inset-0 -z-30 bg-background" />
      <img
        src={heroDoctor}
        alt="Dr. Rafael Alcântara — Sala Vermelha"
        className="absolute inset-0 -z-20 size-full object-cover object-center scale-105 opacity-25 sm:opacity-30 lg:opacity-20 transition-opacity duration-700"
      />

      {/* Cinematic overlays — uniform vignette for clean central focus */}
      <div className="absolute inset-0 -z-10 bg-background/80 lg:bg-background/75" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/40 to-background/50" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[50vh] bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/10 blur-[150px] -z-10 animate-float" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* 1. Badge */}
        <div className="inline-flex items-center gap-2 rounded-full glass-red px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary/90 mb-6 animate-fade-up">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Treinamento de elite • EmergPapers
        </div>

        {/* 2. Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] uppercase max-w-5xl animate-fade-up flex flex-col items-center">
          <span className="block whitespace-nowrap text-[6.8vw] sm:text-[5.5vw] md:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight">
            Pare de <span className="text-muted-foreground">sobreviver</span> ao plantão.
          </span>
          <span className="block mt-3 text-primary text-glow-red text-[7vw] sm:text-[5.8vw] md:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight">
            Domine a Sala Vermelha.
          </span>
        </h1>

        {/* 3. Video (Monumental!) */}
        <div className="mt-10 w-full max-w-5xl animate-fade-up [animation-delay:150ms] shadow-glow relative z-10">
          <VideoPlayer videoId="elvlGNo9XaE" />
        </div>

        {/* 4. Subheadline (Descrição) */}
        <p className="mt-10 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up [animation-delay:250ms]">
          Treinamento prático para médicos que querem ganhar
          <span className="text-foreground font-medium"> segurança, técnica e controle </span>
          diante de pacientes graves.
        </p>

        {/* 5. Tópicos (Bullets) */}
        <ul className="mt-8 flex flex-wrap justify-center gap-3 max-w-3xl animate-fade-up [animation-delay:300ms]">
          {bullets.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl glass px-5 py-3.5 text-sm transition-all duration-300 hover:scale-103 hover:border-primary/30"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon className="size-4" />
              </span>
              <span className="text-foreground/90 font-medium">{label}</span>
            </li>
          ))}
        </ul>

        {/* 6. Botão CTA + Legenda */}
        <div className="mt-10 flex flex-col items-center gap-4 animate-fade-up [animation-delay:350ms]">
          <CTAButton size="xl" pulse>
            Quero mais informações
          </CTAButton>
          <p className="text-sm text-muted-foreground">
            Fale agora com nossa equipe e tire suas dúvidas.
          </p>
        </div>
      </div>
    </section>
  );
}
