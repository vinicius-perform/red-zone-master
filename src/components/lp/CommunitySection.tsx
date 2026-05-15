import { MessageSquare, Users, BookOpen, Headphones, Brain, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const items = [
  { icon: MessageSquare, title: "Discussão de casos reais" },
  { icon: BookOpen, title: "Troca de conhecimento" },
  { icon: Brain, title: "Raciocínio clínico contínuo" },
  { icon: Rocket, title: "Evolução constante" },
];

const communityImages = [
  "https://emergpapers.com/wp-content/uploads/2026/05/DSV.png",
  "https://emergpapers.com/wp-content/uploads/2026/04/ChatGPT-Image-4-de-abr.-de-2026-00_04_24.png",
  "https://emergpapers.com/wp-content/uploads/2026/04/ChatGPT-Image-4-de-abr.-de-2026-00_04_20.png",
  "https://emergpapers.com/wp-content/uploads/2026/04/ChatGPT-Image-4-de-abr.-de-2026-00_04_12.png",
  "https://emergpapers.com/wp-content/uploads/2026/04/ChatGPT-Image-17-de-mar.-de-2026-17_39_40.png"
];

export function CommunitySection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-surface/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/15 blur-[160px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Comunidade Exclusiva</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]">
            Você não vai aprender sozinho.<br className="hidden sm:block" />
            Vai fazer parte de uma <span className="text-primary text-glow-red">comunidade de médicos</span>
          </h2>
        </Reveal>

        <Reveal className="mt-12 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map(({ icon: Icon, title }) => (
              <div key={title} className="rounded-xl glass p-6 hover:border-primary/40 transition flex items-center justify-center flex-col gap-3 text-center">
                <span className="flex size-10 items-center justify-center text-primary">
                  <Icon className="size-6" />
                </span>
                <div className="font-bold text-lg">{title}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Carousel */}
        <Reveal className="mt-16">
          <div className="w-full max-w-[100vw] sm:max-w-7xl mx-auto relative -mx-4 sm:mx-0 px-4 sm:px-0">
            <div
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <Carousel
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
                <CarouselContent className="-ml-4 py-4">
                  {communityImages.map((src, index) => (
                    <CarouselItem key={index} className="pl-4 basis-[60%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <article className="group relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow hover:border-primary/40 cursor-grab active:cursor-grabbing">
                        <img 
                          src={src} 
                          alt={`Comunidade ${index + 1}`} 
                          className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        />
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
