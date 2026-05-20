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
      {/* Background image — doctor highlighted on the right */}
      <div className="absolute inset-0 -z-30 bg-background" />
      <img
        src={heroDoctor}
        alt="Dr. Rafael Alcântara — Sala Vermelha"
        className="absolute inset-0 -z-20 size-full object-cover object-[70%_center] sm:object-[65%_center] scale-105 opacity-40 sm:opacity-50 lg:opacity-35 transition-opacity duration-700"
      />

      {/* Cinematic overlays — keep doctor visible on right, darken left for copy */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 sm:via-background/70 md:via-background/55 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/30 to-background/40" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[50vh] bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute -top-20 -left-20 size-[420px] rounded-full bg-primary/20 blur-[140px] -z-10 animate-float" />
      <div className="absolute bottom-0 right-0 size-[500px] rounded-full bg-primary/15 blur-[160px] -z-10" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
          {/* Coluna da Esquerda: Conteúdo Textual */}
          <div className="lg:col-span-6 animate-fade-up flex flex-col justify-center">
            <div className="inline-flex self-start items-center gap-2 rounded-full glass-red px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary/90 mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Treinamento de elite • EmergPapers
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl xl:text-[5.5rem] leading-[0.95] uppercase">
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

            {/* Vídeo Exclusivo no Mobile (Visível apenas em telas menores que lg) */}
            <div className="mt-8 block lg:hidden w-full max-w-xl">
              <VideoPlayer videoId="elvlGNo9XaE" />
            </div>

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

          {/* Coluna da Direita: Vídeo Exclusivo no Desktop */}
          <div className="hidden lg:block lg:col-span-6 animate-fade-up [animation-delay:200ms] w-full">
            <VideoPlayer videoId="elvlGNo9XaE" />
          </div>
        </div>
      </div>
    </section>
  );
}
