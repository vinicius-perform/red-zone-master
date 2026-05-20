import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  videoId: string;
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // URL para embed do YouTube que restringe fuga do usuário
  // Usamos youtube-nocookie para privacidade e adicionamos parâmetros restritivos
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=0&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&widget_referrer=${typeof window !== "undefined" ? encodeURIComponent(window.location.origin) : ""}`;

  const handlePlayClick = () => {
    setHasStarted(true);
    setIsPlaying(true);
    triggerControlsOverlay();
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;

    if (isPlaying) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
        "*"
      );
      setIsPlaying(false);
    } else {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: "" }),
        "*"
      );
      setIsPlaying(true);
    }
    triggerControlsOverlay();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;

    const command = isMuted ? "unMute" : "mute";
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: command, args: "" }),
      "*"
    );
    setIsMuted(!isMuted);
    triggerControlsOverlay();
  };

  // Mostra os controles customizados ao mover o mouse ou clicar, e oculta após 3s
  const triggerControlsOverlay = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div
      ref={containerRef}
      onMouseMove={triggerControlsOverlay}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className="relative w-full aspect-video rounded-2xl overflow-hidden glass-red shadow-glow-soft hover:shadow-glow transition-all duration-500 border border-primary/20 bg-background group"
    >
      {/* Borda decorativa brilhante */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none z-20 rounded-2xl" />

      {!hasStarted ? (
        // CAPA DE VÍDEO PERSONALIZADA (Thumbnail do YouTube + Efeitos Premium)
        <div className="absolute inset-0 z-30 flex items-center justify-center cursor-pointer overflow-hidden">
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Capa do Vídeo de Treinamento"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback caso a imagem maxresdefault falhe
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
          {/* Overlay gradiente escuro e vermelho */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-color-burn" />

          {/* Botão de Play Central com Efeito Ripple Pulsante */}
          <button
            onClick={handlePlayClick}
            className="relative flex items-center justify-center size-20 sm:size-24 rounded-full bg-primary/20 backdrop-blur-md border border-primary/50 text-primary transition-all duration-300 transform group-hover:scale-110 hover:bg-primary/30 active:scale-95 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            aria-label="Assistir ao vídeo"
          >
            {/* Ondas pulsantes no background */}
            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-75 pointer-events-none" />
            <span className="absolute -inset-2 rounded-full border border-primary/20 animate-pulse pointer-events-none" />
            
            <div className="flex items-center justify-center size-14 sm:size-16 rounded-full bg-primary text-white shadow-lg">
              <Play className="size-6 sm:size-8 fill-current translate-x-0.5 text-white" />
            </div>
          </button>

          {/* Chamada para ação sutil sobre o vídeo */}
          <div className="absolute bottom-6 left-6 right-6 text-left pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/95 text-[10px] font-semibold text-white uppercase tracking-wider mb-2">
              <span className="size-1.5 rounded-full bg-white animate-pulse" />
              Assista Agora
            </span>
            <p className="text-white font-medium text-sm sm:text-base drop-shadow-md line-clamp-1">
              Descubra como dominar a sala vermelha e ter total segurança.
            </p>
          </div>
        </div>
      ) : (
        // REPRODUTOR DE VÍDEO DO YOUTUBE TOTALMENTE PROTEGIDO
        <div className="relative w-full h-full">
          <iframe
            ref={iframeRef}
            src={embedUrl}
            title="Video Player"
            className="w-full h-full border-none pointer-events-none scale-102"
            allow="autoplay; encrypted-media; picture-in-picture"
            tabIndex={-1}
          />

          {/* CAMADA DE PROTEÇÃO ULTRA TRANSPARENTE: Bloqueia cliques para evitar saída para o YouTube */}
          <div
            onClick={togglePlay}
            className="absolute inset-0 z-10 bg-transparent cursor-pointer flex items-center justify-center"
          >
            {/* Ícone de Pause/Play Gigante Temporário no Centro (Estilo Netflix) */}
            <div
              className={`transition-all duration-300 size-16 sm:size-20 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white scale-100 ${
                showControls && !isPlaying ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
              }`}
            >
              <Play className="size-8 fill-current translate-x-0.5" />
            </div>
          </div>

          {/* CONTROLES CUSTOMIZADOS DO PLAYER: barra inferior flutuante */}
          <div
            className={`absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-center justify-between transition-all duration-300 ${
              showControls ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"
            }`}
          >
            {/* Botão Play/Pause */}
            <button
              onClick={togglePlay}
              className="flex size-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/5 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="size-5 fill-current" /> : <Play className="size-5 fill-current translate-x-0.5" />}
            </button>

            {/* Tag informativa sutil de VSL */}
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest hidden sm:inline bg-black/30 px-3 py-1.5 rounded-full border border-white/5">
              Treinamento Sala Vermelha • Aula Prática
            </span>

            {/* Botão de Áudio (Mutar/Desmutar) */}
            <button
              onClick={toggleMute}
              className="flex size-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/5 transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
