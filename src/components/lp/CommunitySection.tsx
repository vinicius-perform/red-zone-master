import { MessageSquare, Users, BookOpen, Headphones } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: MessageSquare, title: "Comunidade WhatsApp", desc: "Grupo privado com médicos e mentores ativos." },
  { icon: BookOpen, title: "Discussão de casos reais", desc: "Casos clínicos comentados toda semana." },
  { icon: Headphones, title: "Suporte contínuo", desc: "Tire dúvidas técnicas em até 24h." },
  { icon: Users, title: "Troca entre médicos", desc: "Networking com plantonistas de todo o Brasil." },
];

export function CommunitySection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-surface/40" />
      <div className="absolute -right-40 top-1/2 size-[500px] rounded-full bg-primary/15 blur-[160px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Comunidade privada</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]">
            Você não vai enfrentar
            <span className="block text-primary text-glow-red">o plantão sozinho.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl">
            Acesso a um ambiente de elite onde casos críticos são discutidos em tempo
            real — antes, durante e depois do plantão.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl glass p-4 hover:border-primary/40 transition">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary mb-3">
                  <Icon className="size-4" />
                </span>
                <div className="font-semibold text-sm">{title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Chat mockup */}
        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/15 blur-3xl rounded-[2rem]" />
            <div className="relative rounded-3xl glass p-5 sm:p-6 shadow-elevated">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="size-10 rounded-full bg-gradient-red flex items-center justify-center">
                  <MessageSquare className="size-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Sala Vermelha • Comunidade</div>
                  <div className="text-xs text-primary flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                    312 médicos online
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <ChatBubble who="Dr. Felipe" mine={false}>
                  Paciente de 62a, IAM com SST em V2-V4, BAVT… faço marca-passo transcutâneo já?
                </ChatBubble>
                <ChatBubble who="Mentor" mine={false} highlight>
                  Sim. Sedação leve, MP transcutâneo enquanto chama hemodinâmica. Pressão estável?
                </ChatBubble>
                <ChatBubble who="Dra. Marina" mine>
                  Acabei de intubar pela 1ª vez sozinha. Plano A, 1ª tentativa. 🔥
                </ChatBubble>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 h-10 rounded-full border border-border bg-surface/60 px-4 flex items-center text-xs text-muted-foreground">
                    Compartilhe seu caso…
                  </div>
                  <button className="size-10 rounded-full bg-gradient-red flex items-center justify-center shadow-glow-soft">
                    <MessageSquare className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChatBubble({
  children, who, mine, highlight,
}: { children: React.ReactNode; who: string; mine?: boolean; highlight?: boolean }) {
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
          mine
            ? "bg-gradient-red text-primary-foreground rounded-br-sm"
            : highlight
            ? "glass-red rounded-bl-sm"
            : "bg-surface-elevated border border-border rounded-bl-sm"
        }`}
      >
        <div className={`text-[10px] uppercase tracking-wider mb-0.5 ${mine ? "text-white/70" : "text-primary"}`}>
          {who}
        </div>
        <div className="leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
