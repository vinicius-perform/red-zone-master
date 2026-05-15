import { Activity, Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./CTAButton";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-gradient-red shadow-glow-soft">
                <Activity className="size-4 text-white" />
              </span>
              <span className="font-display text-lg tracking-wider">
                EMERG<span className="text-primary">PAPERS</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Treinamento médico de elite para quem decide dominar a sala vermelha.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full glass hover:border-primary/40 hover:text-primary transition"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center rounded-full glass hover:border-primary/40 hover:text-primary transition"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} EmergPapers. Todos os direitos reservados.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground transition">Política de privacidade</a>
            <a href="#" className="hover:text-foreground transition">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
