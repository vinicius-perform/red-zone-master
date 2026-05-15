const fs = require('fs');

const rawHtml = fs.readFileSync('raw_html.html', 'utf8');
const styles = fs.readFileSync('src/styles.css', 'utf8');

// Extrair o conteúdo principal
const mainMatch = rawHtml.match(/<main[\s\S]*?<\/main>/);
let mainContent = mainMatch ? mainMatch[0] : '';

// Limpar as imagens locais para instruções claras
mainContent = mainContent.replace(/\/src\/assets\/hero-doctor\.jpg/g, 'LINK_DA_IMAGEM_HERO_AQUI.jpg');
mainContent = mainContent.replace(/\/src\/assets\/bg-texture\.jpg/g, 'LINK_DA_IMAGEM_TEXTURA_AQUI.jpg');
mainContent = mainContent.replace(/\/src\/assets\/module-airway\.jpg/g, 'LINK_DA_IMAGEM_MODULO1_AQUI.jpg');
mainContent = mainContent.replace(/\/src\/assets\/module-cardio\.jpg/g, 'LINK_DA_IMAGEM_MODULO2_AQUI.jpg');
mainContent = mainContent.replace(/\/src\/assets\/module-ventilation\.jpg/g, 'LINK_DA_IMAGEM_MODULO3_AQUI.jpg');
mainContent = mainContent.replace(/\/src\/assets\/module-procedures\.jpg/g, 'LINK_DA_IMAGEM_MODULO4_AQUI.jpg');

// O React usava o Embla Carousel. Para o HTML puro, usaremos um pequeno script JS sem dependências
// que faz o auto-scroll contínuo dos containeres flex que têm overflow-hidden.

// A estrutura base
const finalHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Red Zone Elementor Export</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        background: "oklch(0.08 0 0)",
                        foreground: "oklch(0.985 0 0)",
                        surface: "oklch(0.12 0.005 20)",
                        "surface-elevated": "oklch(0.155 0.008 20)",
                        card: "oklch(0.11 0.005 20)",
                        "card-foreground": "oklch(0.98 0 0)",
                        primary: {
                            DEFAULT: "oklch(0.62 0.27 25)",
                            foreground: "oklch(0.985 0 0)"
                        },
                        muted: {
                            DEFAULT: "oklch(0.18 0.005 20)",
                            foreground: "oklch(0.78 0.005 20)"
                        },
                        border: "oklch(1 0 0 / 0.08)"
                    },
                    fontFamily: {
                        display: ["Anton", "Inter", "sans-serif"],
                        sans: ["Inter", "system-ui", "sans-serif"]
                    }
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer utilities {
            body {
                background: oklch(0.08 0 0);
                color: oklch(0.985 0 0);
                font-family: "Inter", system-ui, sans-serif;
                -webkit-font-smoothing: antialiased;
                overflow-x: hidden;
            }
            .text-glow-red { text-shadow: 0 0 30px oklch(0.62 0.27 25 / 0.6); }
            .bg-gradient-red { background: linear-gradient(135deg, oklch(0.62 0.27 25) 0%, oklch(0.55 0.25 22) 100%); }
            .bg-radial-red { background: radial-gradient(circle at 50% 50%, oklch(0.62 0.27 25 / 0.35), transparent 60%); }
            .shadow-glow { box-shadow: 0 0 60px -10px oklch(0.62 0.27 25 / 0.55); }
            .shadow-glow-soft { box-shadow: 0 0 30px -5px oklch(0.62 0.27 25 / 0.35); }
            .shadow-elevated { box-shadow: 0 24px 60px -20px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(1 0 0 / 0.06); }
            .shadow-card { box-shadow: 0 10px 30px -10px oklch(0 0 0 / 0.7); }

            .glass {
                background: linear-gradient(180deg, oklch(1 0 0 / 0.04), oklch(1 0 0 / 0.01));
                backdrop-filter: blur(12px);
                border: 1px solid oklch(1 0 0 / 0.08);
            }
            .glass-red {
                background: linear-gradient(180deg, oklch(0.62 0.27 25 / 0.08), oklch(0.62 0.27 25 / 0.02));
                border: 1px solid oklch(0.62 0.27 25 / 0.25);
            }

            .animate-pulse-red { animation: pulse-red 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite; }
            .animate-float { animation: float-slow 6s ease-in-out infinite; }
            .animate-fade-up { animation: fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
            .animate-heartbeat { animation: heartbeat 2s ease-in-out infinite; }
            
            .reveal { opacity: 1; transform: translateY(0); } /* Revela tudo direto no html estático */
        }
        
        @keyframes pulse-red {
            0%, 100% { box-shadow: 0 0 0 0 oklch(0.62 0.27 25 / 0.55), 0 0 40px -5px oklch(0.62 0.27 25 / 0.6); }
            50% { box-shadow: 0 0 0 18px oklch(0.62 0.27 25 / 0), 0 0 60px 0 oklch(0.62 0.27 25 / 0.8); }
        }
        @keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes heartbeat {
            0%, 70%, 100% { transform: scale(1); }
            10%, 30% { transform: scale(1.06); }
            20% { transform: scale(0.98); }
        }
    </style>
</head>
<body>
${mainContent}
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const carousels = document.querySelectorAll('.overflow-hidden');
        carousels.forEach(function(viewport) {
            const container = viewport.querySelector('.flex');
            if (!container) return;
            
            // Duplicar conteúdo para efeito infinito
            container.innerHTML += container.innerHTML;
            
            let scrollPos = 0;
            let isHovered = false;
            let isDragging = false;
            let startX = 0;
            let scrollLeftStart = 0;

            viewport.addEventListener('mouseenter', () => isHovered = true);
            viewport.addEventListener('mouseleave', () => {
                isHovered = false;
                isDragging = false;
            });

            // Suporte para Touch / Drag (Mouse)
            viewport.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.pageX - viewport.offsetLeft;
                scrollLeftStart = viewport.scrollLeft;
            });
            viewport.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                const x = e.pageX - viewport.offsetLeft;
                const walk = (x - startX) * 2; // Velocidade do arraste
                viewport.scrollLeft = scrollLeftStart - walk;
                scrollPos = viewport.scrollLeft;
            });
            viewport.addEventListener('mouseup', () => isDragging = false);
            
            // Touch em dispositivos móveis
            viewport.addEventListener('touchstart', (e) => {
                isDragging = true;
                startX = e.touches[0].pageX - viewport.offsetLeft;
                scrollLeftStart = viewport.scrollLeft;
            });
            viewport.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                const x = e.touches[0].pageX - viewport.offsetLeft;
                const walk = (x - startX) * 2;
                viewport.scrollLeft = scrollLeftStart - walk;
                scrollPos = viewport.scrollLeft;
            });
            viewport.addEventListener('touchend', () => isDragging = false);

            function scroll() {
                if (!isHovered && !isDragging) {
                    scrollPos += 0.7; // Velocidade do auto-scroll
                    if (scrollPos >= container.scrollWidth / 2) {
                        scrollPos = 0;
                    }
                    viewport.scrollLeft = scrollPos;
                }
                requestAnimationFrame(scroll);
            }
            scroll();
        });
    });
</script>
</body>
</html>`;

fs.writeFileSync('C:\\Users\\vinic\\.gemini\\antigravity\\scratch\\red-zone-master\\index-elementor.html', finalHtml);
console.log('Final HTML generated!');
