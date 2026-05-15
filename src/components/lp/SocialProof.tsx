import * as React from "react";
import { Users, Calendar, Activity } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

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
  { icon: Activity, value: "100%", label: "Casos reais de sala vermelha" },
];

export function SocialProof() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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

        {/* Images carousel with fade out edges */}
        <div className="mt-12 w-full max-w-[90vw] sm:max-w-6xl mx-auto relative px-4 sm:px-0">
          <div
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 1,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full pointer-events-auto"
            >
              <CarouselContent className="-ml-4 sm:-ml-6 py-4">
                {carouselImages.map((src, index) => (
                  <CarouselItem key={index} className="pl-4 sm:pl-6 basis-[85%] md:basis-1/2 lg:basis-1/3">
                    <Reveal delay={index * 100} className="h-full">
                      <img 
                        src={src} 
                        alt={`Depoimento ${index + 1}`} 
                        className="w-full h-[500px] sm:h-[600px] object-cover object-top rounded-2xl border border-primary/20 shadow-glow-soft hover:-translate-y-1 hover:shadow-glow-soft transition-all duration-500"
                      />
                    </Reveal>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 pb-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current - 1 ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Ir para a página ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
