import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./CTAButton";

export function FloatingWhats() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl group-hover:bg-primary/60 transition" />
      <span className="relative flex size-14 items-center justify-center rounded-full bg-gradient-red shadow-glow animate-pulse-red">
        <MessageCircle className="size-6 text-white" />
      </span>
    </a>
  );
}
