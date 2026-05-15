import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { A as AutoScroll } from "../_libs/embla-carousel-auto-scroll.mjs";
import { A as Activity, n as Stethoscope, j as HeartPulse, Z as Zap, S as ShieldCheck, O as OctagonAlert, l as ShieldOff, L as Lock, f as Brain, H as Heart, q as Wind, i as FlaskConical, T as TestTubeDiagonal, o as Syringe, h as Crosshair, D as Droplets, W as Waves, m as Slash, d as Award, a as Ambulance, p as Truck, X, g as Check, U as Users, C as Calendar, k as MessageSquare, e as BookOpen, R as Rocket, F as FileText, B as BookMarked, I as Instagram, M as MessageCircle, c as ArrowRight, b as ArrowLeft } from "../_libs/lucide-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
const WHATSAPP_URL = "https://wa.link/0jk0dh";
function CTAButton({
  children,
  size = "lg",
  variant = "primary",
  pulse = false,
  className = ""
}) {
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg"
  };
  const base = "group relative inline-flex items-center justify-center gap-3 rounded-full font-semibold tracking-wide uppercase transition-all duration-300 ease-out overflow-hidden";
  if (variant === "ghost") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: WHATSAPP_URL,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `${base} ${sizes[size]} border border-border text-foreground hover:bg-white/5 hover:border-primary/40 ${className}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5" }),
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: WHATSAPP_URL,
      target: "_blank",
      rel: "noopener noreferrer",
      className: `${base} ${sizes[size]} bg-gradient-red text-primary-foreground shadow-glow hover:scale-[1.03] hover:shadow-[0_0_80px_-5px_oklch(0.62_0.27_25/0.8)] active:scale-[0.99] ${pulse ? "animate-pulse-red" : ""} ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5 relative z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-5 relative z-10 transition-transform group-hover:translate-x-1" })
      ]
    }
  );
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3 sm:mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex size-8 items-center justify-center rounded-full bg-gradient-red shadow-glow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4 text-white animate-heartbeat" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg tracking-wider", children: [
        "EMERG",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "PAPERS" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#dor", className: "hover:text-foreground transition", children: "O Plantão" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#modulos", className: "hover:text-foreground transition", children: "Módulos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#prova", className: "hover:text-foreground transition", children: "Resultados" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#bonus", className: "hover:text-foreground transition", children: "Bônus" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, { size: "md", className: "hidden sm:inline-flex", children: "Falar agora" })
  ] }) }) });
}
const heroDoctor = "/assets/hero-doctor-Dp0C0VeO.jpg";
const bullets = [
  { icon: Stethoscope, label: "Via aérea e intubação" },
  { icon: HeartPulse, label: "Emergências reais" },
  { icon: Zap, label: "Procedimentos críticos" },
  { icon: Activity, label: "Ventilação mecânica" },
  { icon: ShieldCheck, label: "Decisão sob pressão" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative isolate overflow-hidden min-h-screen flex items-center pt-32 pb-20 sm:pt-40 sm:pb-28",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-30 bg-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: heroDoctor,
            alt: "Dr. Rafael Alcântara — Sala Vermelha",
            className: "absolute inset-0 -z-20 size-full object-cover object-[70%_center] sm:object-[65%_center] scale-105"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 sm:via-background/70 md:via-background/55 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/30 to-background/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 -z-10 h-[50vh] bg-gradient-to-b from-primary/10 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -left-20 size-[420px] rounded-full bg-primary/20 blur-[140px] -z-10 animate-float" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 size-[500px] rounded-full bg-primary/15 blur-[160px] -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass-red px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary/90 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-primary animate-pulse" }),
            "Treinamento de elite • EmergPapers"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] uppercase", children: [
            "Pare de ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "sobreviver" }),
            " ao plantão.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-3 text-primary text-glow-red", children: "Domine a Sala Vermelha." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed", children: [
            "Treinamento prático para médicos que querem ganhar",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " segurança, técnica e controle " }),
            "diante de pacientes graves."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl", children: bullets.map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-center gap-3 rounded-xl glass px-4 py-3 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: label })
              ]
            },
            label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, { size: "xl", pulse: true, children: "Quero mais informações" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Fale agora com nossa equipe e tire suas dúvidas." })
        ] }) })
      ]
    }
  );
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: `reveal ${visible ? "in" : ""} ${className}`,
      children
    }
  );
}
const cards = [
  {
    icon: OctagonAlert,
    title: "Travou diante de um paciente grave?",
    desc: "Sabe o que fazer, mas o corpo congela quando a vida do paciente está em jogo."
  },
  {
    icon: ShieldOff,
    title: "Sente insegurança em sala vermelha?",
    desc: "Cada plantão vira uma roleta — e a próxima emergência pode ser hoje."
  },
  {
    icon: Lock,
    title: "Evita procedimentos por medo?",
    desc: "Deixa para o colega, espera o staff, perde a chance de aprender na prática."
  },
  {
    icon: Brain,
    title: "Sabe a teoria, mas falta confiança?",
    desc: "O conhecimento existe. O que falta é treino real para agir sob pressão."
  }
];
function PainSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "dor", className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-radial-red opacity-40 -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "A realidade do plantão" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]", children: [
          "A faculdade ensina teoria.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary text-glow-red", children: "O plantão exige decisão." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg max-w-2xl", children: "Você passou anos estudando — mas ninguém te ensinou a manter o sangue frio enquanto a saturação cai e a equipe te olha esperando uma ordem." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: cards.map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full rounded-2xl glass p-6 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 group-hover:shadow-glow-soft transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-semibold text-lg leading-snug", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: desc })
        ] })
      ] }) }, title)) })
    ] })
  ] });
}
const airway = "/assets/module-airway-BDGMBSqP.jpg";
const cardio = "/assets/module-cardio-BjS2QXpo.jpg";
const vent = "/assets/module-ventilation-P6yYOJMT.jpg";
const procImg = "/assets/module-procedures-yf2vMEFq.jpg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const posterModules = [
  "https://emergpapers.com/wp-content/uploads/2026/05/OB.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/Procedimentos.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/ECG.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/ATB.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/POCUS.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/Coracao.png",
  "https://emergpapers.com/wp-content/uploads/2026/05/VAB.png"
];
const featured = [
  { title: "Manejo de Via Aérea", subtitle: "Sequência rápida. Plano A, B, C, D.", img: airway },
  { title: "Emergências Cardiovasculares", subtitle: "IAM, arritmias, choque, parada.", img: cardio },
  { title: "Ventilação Mecânica", subtitle: "Modos, ajustes e desmame.", img: vent },
  { title: "Procedimentos Críticos", subtitle: "Acesso central, drenos, punções.", img: procImg }
];
const modules = [
  { icon: Heart, name: "Emergências Cardiovasculares" },
  { icon: Wind, name: "Emergências Respiratórias" },
  { icon: Brain, name: "Emergências Neurológicas" },
  { icon: FlaskConical, name: "Emergências Metabólicas" },
  { icon: Wind, name: "Manejo de Via Aérea" },
  { icon: Stethoscope, name: "Intubação Orotraqueal" },
  { icon: Activity, name: "Ventilação Mecânica" },
  { icon: TestTubeDiagonal, name: "Gasometria Arterial" },
  { icon: Syringe, name: "Acesso Venoso Central" },
  { icon: Crosshair, name: "Punção Intra-Arterial" },
  { icon: Droplets, name: "Pericardiocentese" },
  { icon: Waves, name: "Paracentese" },
  { icon: Slash, name: "Toracocentese" },
  { icon: Award, name: "ACLS" },
  { icon: ShieldCheck, name: "PALS" },
  { icon: Ambulance, name: "ATLS" },
  { icon: Truck, name: "PHTLS" }
];
function ModulesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "modulos", className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Arsenal de treinamento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]", children: [
          "Um treinamento completo para",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary text-glow-red", children: "dominar emergências reais." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: featured.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: f.img,
            alt: f.title,
            loading: "lazy",
            width: 800,
            height: 600,
            className: "absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.2em] uppercase text-primary/90", children: "Módulo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-2xl uppercase leading-tight", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: f.subtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 size-2 rounded-full bg-primary animate-pulse shadow-glow-soft" })
      ] }) }, f.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl glass p-6 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-8 flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl uppercase tracking-wide", children: "+17 módulos cinematográficos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: "Conteúdo vivo" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3", children: modules.map(({ icon: Icon, name }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-3.5 py-3 hover:border-primary/40 hover:bg-surface-elevated transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium leading-tight", children: name })
            ]
          },
          name
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl sm:text-3xl uppercase tracking-wide", children: "Módulos Exclusivos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline-block text-xs text-primary uppercase tracking-widest text-glow-red font-semibold", children: "Séries Premium" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Carousel,
          {
            opts: {
              align: "start",
              dragFree: true
            },
            className: "w-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-4 py-4", children: posterModules.map((src, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-4 basis-[55%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group relative w-full aspect-[2/3] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow hover:border-primary/40 cursor-grab active:cursor-grabbing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src,
                  alt: `Módulo Exclusivo ${index + 1}`,
                  loading: "lazy",
                  className: "absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                }
              ) }) }, index)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden xl:block", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "-left-14" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "-right-14" })
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, { size: "lg", children: "Quero acesso completo" }) })
    ] })
  ] });
}
const before = ["Insegurança", "Improviso", "Medo", "Dependência do staff"];
const after = ["Clareza", "Técnica", "Segurança", "Controle do plantão"];
function TransformationSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-radial-red opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Transformação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]", children: [
          "A diferença entre saber…",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary text-glow-red", children: "e conseguir agir." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 relative grid md:grid-cols-2 gap-8 md:gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_30px_oklch(0.62_0.27_25/0.6)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:pr-12 lg:pr-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6", children: "Antes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl uppercase mb-8 text-muted-foreground/80", children: "Médico inseguro" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: before.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-center gap-4 rounded-xl border border-border bg-surface/40 px-5 py-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex size-9 items-center justify-center rounded-lg bg-white/5 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg text-muted-foreground line-through decoration-muted-foreground/40", children: item })
              ]
            },
            item
          )) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:pl-12 lg:pl-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary mb-6", children: "Depois" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl uppercase mb-8 text-glow-red text-primary", children: "Médico resolutivo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: after.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-center gap-4 rounded-xl glass-red px-5 py-4 shadow-glow-soft",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold", children: item })
              ]
            },
            item
          )) })
        ] }) })
      ] })
    ] })
  ] });
}
const carouselImages = [
  "https://emergpapers.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-04-12-at-23.43.25.jpeg",
  "https://emergpapers.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-24-at-13.42.18-2.jpeg",
  "https://emergpapers.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-24-at-13.42.20-1.jpeg",
  "https://emergpapers.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-24-at-13.42.20.jpeg",
  "https://emergpapers.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-24-at-13.42.19.jpeg"
];
const stats = [
  { icon: Users, value: "+3.000", label: "Médicos treinados" },
  { icon: Calendar, value: "10+ anos", label: "Ensinando emergência" },
  { icon: Activity, value: "100%", label: "Casos reais de sala vermelha" }
];
function SocialProof() {
  const [api, setApi] = reactExports.useState();
  const [current, setCurrent] = reactExports.useState(0);
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "prova", className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/40 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Quem já entrou" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]", children: [
          "Médicos que decidiram",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary text-glow-red", children: "dominar o plantão." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: stats.map(({ icon: Icon, value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl glass p-6 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-glow-red text-primary", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: label })
        ] })
      ] }, label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 w-full max-w-[90vw] sm:max-w-6xl mx-auto relative px-4 sm:px-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: {
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Carousel,
              {
                setApi,
                opts: {
                  align: "start",
                  loop: true
                },
                plugins: [
                  AutoScroll({
                    speed: 1,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true
                  })
                ],
                className: "w-full pointer-events-auto",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-4 sm:-ml-6 py-4", children: carouselImages.map((src, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-4 sm:pl-6 basis-[85%] md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index * 100, className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src,
                    alt: `Depoimento ${index + 1}`,
                    className: "w-full h-[500px] sm:h-[600px] object-cover object-top rounded-2xl border border-primary/20 shadow-glow-soft hover:-translate-y-1 hover:shadow-glow-soft transition-all duration-500"
                  }
                ) }) }, index)) })
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mt-6 pb-2", children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `h-2 rounded-full transition-all duration-300 ${i === current - 1 ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"}`,
            onClick: () => api?.scrollTo(i),
            "aria-label": `Ir para a página ${i + 1}`
          },
          i
        )) })
      ] })
    ] })
  ] });
}
const items = [
  { icon: MessageSquare, title: "Discussão de casos reais" },
  { icon: BookOpen, title: "Troca de conhecimento" },
  { icon: Brain, title: "Raciocínio clínico contínuo" },
  { icon: Rocket, title: "Evolução constante" }
];
const communityImages = [
  "https://emergpapers.com/wp-content/uploads/2026/05/DSV.png",
  "https://emergpapers.com/wp-content/uploads/2026/04/ChatGPT-Image-4-de-abr.-de-2026-00_04_24.png",
  "https://emergpapers.com/wp-content/uploads/2026/04/ChatGPT-Image-4-de-abr.-de-2026-00_04_20.png",
  "https://emergpapers.com/wp-content/uploads/2026/04/ChatGPT-Image-4-de-abr.-de-2026-00_04_12.png",
  "https://emergpapers.com/wp-content/uploads/2026/04/ChatGPT-Image-17-de-mar.-de-2026-17_39_40.png"
];
function CommunitySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background to-surface/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/15 blur-[160px] -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Comunidade Exclusiva" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]", children: [
          "Você não vai aprender sozinho.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
          "Vai fazer parte de uma ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-glow-red", children: "comunidade de médicos" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-12 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: items.map(({ icon: Icon, title }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl glass p-6 hover:border-primary/40 transition flex items-center justify-center flex-col gap-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex size-10 items-center justify-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg", children: title })
      ] }, title)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-[100vw] sm:max-w-7xl mx-auto relative -mx-4 sm:mx-0 px-4 sm:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Carousel,
            {
              opts: {
                align: "start",
                loop: true
              },
              plugins: [
                AutoScroll({
                  speed: 1,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true
                })
              ],
              className: "w-full pointer-events-auto",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-4 py-4", children: communityImages.map((src, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-4 basis-[60%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow hover:border-primary/40 cursor-grab active:cursor-grabbing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src,
                  alt: `Comunidade ${index + 1}`,
                  className: "w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                }
              ) }) }, index)) })
            }
          )
        }
      ) }) })
    ] })
  ] });
}
const bonuses = [
  { icon: Activity, name: "ECG na Emergência", tag: "Bônus 01", desc: "Decifre traçados em segundos." },
  { icon: FileText, name: "Guia de Prescrições", tag: "Bônus 02", desc: "Doses, diluições, cuidados." },
  { icon: BookMarked, name: "Guia de Bolso", tag: "Bônus 03", desc: "Protocolos prontos para o plantão." },
  { icon: Heart, name: "Emergências Cardiovasculares", tag: "Bônus 04", desc: "Manual completo do plantonista." }
];
function BonusSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "bonus", className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-surface/40 via-background to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Materiais inclusos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]", children: [
          "Bônus que valem",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary text-glow-red", children: "o curso inteiro." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: bonuses.map(({ icon: Icon, name, tag, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative rounded-2xl glass p-6 h-full overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-glow-soft hover:border-primary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6 h-44 flex items-end justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-8 bottom-0 h-40 rounded-md bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative w-28 h-40 rounded-md bg-gradient-to-br from-surface-elevated to-surface border border-white/10 shadow-elevated transform rotate-[-6deg] group-hover:rotate-0 group-hover:-translate-y-2 transition-transform duration-500 flex flex-col",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-gradient-red" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-3 flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] tracking-widest text-primary/80 uppercase", children: "EmergPapers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-7 mt-2 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto text-[9px] font-semibold leading-tight", children: name })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.2em] uppercase text-primary mb-1", children: tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold leading-snug", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: desc })
      ] }) }, name)) })
    ] })
  ] });
}
const bgTexture = "/assets/bg-texture-WekEo-Bd.jpg";
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28 sm:py-36 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bgTexture, alt: "", "aria-hidden": true, className: "absolute inset-0 -z-20 size-full object-cover opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/40 to-background" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-radial-red opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/25 blur-[160px] -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass-red px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-primary animate-pulse" }),
        "Última chamada"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[1.02] text-glow-red", children: [
        "O próximo paciente grave",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary mt-2", children: "não vai esperar você se sentir pronto." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto", children: [
        "Aprenda a agir com segurança ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "antes do próximo plantão." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, { size: "xl", pulse: true, children: "Quero dominar a Sala Vermelha" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground", children: "Vagas limitadas • Atendimento direto pelo WhatsApp" })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-12 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex size-8 items-center justify-center rounded-full bg-gradient-red shadow-glow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg tracking-wider", children: [
            "EMERG",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "PAPERS" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-sm", children: "Treinamento médico de elite para quem decide dominar a sala vermelha." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://instagram.com",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Instagram",
            className: "flex size-10 items-center justify-center rounded-full glass hover:border-primary/40 hover:text-primary transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: WHATSAPP_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "WhatsApp",
            className: "flex size-10 items-center justify-center rounded-full glass hover:border-primary/40 hover:text-primary transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " EmergPapers. Todos os direitos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Política de privacidade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Termos" })
      ] })
    ] })
  ] }) });
}
function FloatingWhats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: WHATSAPP_URL,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Falar no WhatsApp",
      className: "fixed bottom-5 right-5 z-50 group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-primary/40 blur-xl group-hover:bg-primary/60 transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex size-14 items-center justify-center rounded-full bg-gradient-red shadow-glow animate-pulse-red", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-6 text-white" }) })
      ]
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PainSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ModulesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TransformationSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SocialProof, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CommunitySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BonusSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhats, {})
  ] });
}
export {
  Index as component
};
