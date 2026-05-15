import { MessageCircle, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export const WHATSAPP_URL = "https://wa.link/0jk0dh";

export function CTAButton({
  children,
  size = "lg",
  variant = "primary",
  pulse = false,
  className = "",
}: {
  children: ReactNode;
  size?: "md" | "lg" | "xl";
  variant?: "primary" | "ghost";
  pulse?: boolean;
  className?: string;
}) {
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };
  const base =
    "group relative inline-flex items-center justify-center gap-3 rounded-full font-semibold tracking-wide uppercase transition-all duration-300 ease-out overflow-hidden";

  if (variant === "ghost") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${sizes[size]} border border-border text-foreground hover:bg-white/5 hover:border-primary/40 ${className}`}
      >
        <MessageCircle className="size-5" />
        {children}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} bg-gradient-red text-primary-foreground shadow-glow hover:scale-[1.03] hover:shadow-[0_0_80px_-5px_oklch(0.62_0.27_25/0.8)] active:scale-[0.99] ${
        pulse ? "animate-pulse-red" : ""
      } ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <MessageCircle className="size-5 relative z-10" />
      <span className="relative z-10">{children}</span>
      <ArrowRight className="size-5 relative z-10 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
