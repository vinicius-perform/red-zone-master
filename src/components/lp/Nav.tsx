import { Activity } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3 sm:mt-5">
        <div className="glass rounded-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative flex size-8 items-center justify-center rounded-full bg-gradient-red shadow-glow-soft">
              <Activity className="size-4 text-white animate-heartbeat" />
            </span>
            <span className="font-display text-lg tracking-wider">
              EMERG<span className="text-primary">PAPERS</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#dor" className="hover:text-foreground transition">O Plantão</a>
            <a href="#modulos" className="hover:text-foreground transition">Módulos</a>
            <a href="#prova" className="hover:text-foreground transition">Resultados</a>
            <a href="#bonus" className="hover:text-foreground transition">Bônus</a>
          </nav>
          <CTAButton size="md" className="hidden sm:inline-flex">Falar agora</CTAButton>
        </div>
      </div>
    </header>
  );
}
