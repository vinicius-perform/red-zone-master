import { Star, Quote, Users, Calendar, Activity } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Dr. Lucas M.",
    role: "Emergencista • SP",
    text: "Em duas semanas, intubei meu primeiro paciente sem chamar o staff. O método te força a pensar com protocolo, não com pânico.",
  },
  {
    name: "Dra. Camila R.",
    role: "Residente R2 • RJ",
    text: "Era o tipo de médica que congelava em sala vermelha. Hoje sou a primeira a chegar no leito. O curso muda quem você é no plantão.",
  },
  {
    name: "Dr. André P.",
    role: "Plantonista UTI • MG",
    text: "Ventilação mecânica deixou de ser caixa-preta. Saio do plantão com a sensação de que dominei o cenário, não que sobrevivi a ele.",
  },
  {
    name: "Dra. Júlia F.",
    role: "Acadêmica 6º ano • RS",
    text: "Cheguei na residência sabendo coisas que muito R2 não sabe. O conteúdo é denso, mas direto ao osso.",
  },
];

const stats = [
  { icon: Users, value: "+3.000", label: "Médicos treinados" },
  { icon: Calendar, value: "10+ anos", label: "Ensinando emergência" },
  { icon: Activity, value: "100%", label: "Casos reais de sala vermelha" },
];

export function SocialProof() {
  return (
    <section id="prova" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/40 to-background" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Quem já entrou</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]">
            Médicos que decidiram
            <span className="block text-primary text-glow-red">dominar o plantão.</span>
          </h2>
        </Reveal>

        {/* Stats */}
        <Reveal className="mt-12">
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-2xl glass p-6 flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20">
                  <Icon className="size-5" />
                </span>
                <div>
                  <div className="font-display text-3xl text-glow-red text-primary">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials carousel — overflow scroll */}
        <div className="mt-12 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-5 snap-x snap-mandatory">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80} className="snap-start shrink-0 w-[85%] sm:w-[420px]">
                <article className="h-full rounded-2xl glass p-6 sm:p-7 relative overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-soft">
                  <Quote className="absolute -top-2 -right-2 size-24 text-primary/5" />
                  <div className="flex items-center gap-1 text-primary mb-4">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="size-4 fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed">"{t.text}"</p>
                  <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                    <div className="size-10 rounded-full bg-gradient-red flex items-center justify-center font-semibold">
                      {t.name.split(" ")[1]?.[0] ?? "M"}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
