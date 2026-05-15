import { X, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const before = ["Insegurança", "Improviso", "Medo", "Dependência do staff"];
const after = ["Clareza", "Técnica", "Segurança", "Controle do plantão"];

export function TransformationSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-radial-red opacity-30" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Transformação</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]">
            A diferença entre saber…
            <span className="block text-primary text-glow-red">e conseguir agir.</span>
          </h2>
        </Reveal>

        <div className="mt-16 relative grid md:grid-cols-2 gap-8 md:gap-0">
          {/* Vertical glowing divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_30px_oklch(0.62_0.27_25/0.6)]" />

          {/* BEFORE */}
          <Reveal>
            <div className="md:pr-12 lg:pr-16">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Antes</div>
              <h3 className="font-display text-3xl uppercase mb-8 text-muted-foreground/80">
                Médico inseguro
              </h3>
              <ul className="space-y-4">
                {before.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-xl border border-border bg-surface/40 px-5 py-4"
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-muted-foreground">
                      <X className="size-5" />
                    </span>
                    <span className="text-lg text-muted-foreground line-through decoration-muted-foreground/40">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* AFTER */}
          <Reveal delay={150}>
            <div className="md:pl-12 lg:pl-16">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Depois</div>
              <h3 className="font-display text-3xl uppercase mb-8 text-glow-red text-primary">
                Médico resolutivo
              </h3>
              <ul className="space-y-4">
                {after.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-xl glass-red px-5 py-4 shadow-glow-soft"
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Check className="size-5" />
                    </span>
                    <span className="text-lg font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
