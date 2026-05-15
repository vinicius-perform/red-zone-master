import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";
import bgTexture from "@/assets/bg-texture.jpg";

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <img src={bgTexture} alt="" aria-hidden className="absolute inset-0 -z-20 size-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/40 to-background" />
      <div className="absolute inset-0 -z-10 bg-radial-red opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/25 blur-[160px] -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full glass-red px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Última chamada
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[1.02] text-glow-red">
            O próximo paciente grave
            <span className="block text-primary mt-2">
              não vai esperar você se sentir pronto.
            </span>
          </h2>
          <p className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda a agir com segurança <span className="text-foreground">antes do próximo plantão.</span>
          </p>

          <div className="mt-10 flex justify-center">
            <CTAButton size="xl" pulse>Quero dominar a Sala Vermelha</CTAButton>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Vagas limitadas • Atendimento direto pelo WhatsApp
          </p>
        </Reveal>
      </div>
    </section>
  );
}
