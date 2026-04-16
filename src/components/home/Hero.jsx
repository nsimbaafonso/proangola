"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import hero1 from "@/assets/img/hero1.jpg";
import hero2 from "@/assets/img/hero2.jpg";
import hero3 from "@/assets/img/hero3.jpg";

export default function Hero() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const slides = [
    {
      src: hero1,
      title: "Construímos com qualidade e segurança",
      description:
        "Executamos obras residenciais, comerciais e industriais com rigor técnico e excelência em Angola.",
      cta: true,
    },
    {
      src: hero2,
      title: "Soluções sólidas para cada projeto",
      description:
        "Uma equipa especializada que garante eficiência, durabilidade e padrões internacionais de construção.",
    },
    {
      src: hero3,
      title: "Transformamos ideias em estruturas reais",
      description:
        "Do planeamento à execução, entregamos obras completas com qualidade e precisão.",
    },
  ];

  if (!domLoaded) return <section className="h-screen bg-neutral-900" />;

  return (
    <section id="inicio" className="relative w-full h-screen bg-neutral-900">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        grabCursor
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* O segredo da animação por slide está em resetar a classe na troca */}
            <div className="relative w-full h-screen swiper-slide-content">
              {/* Imagem com Zoom Suave (Ken Burns) */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={slide.src}
                  alt="ProAngola construção civil"
                  fill
                  className="object-cover transform animate-slow-zoom"
                  priority={index === 0}
                />
              </div>

              {/* Overlay Gradiente Premium */}
              <div className="absolute inset-0 bg-linear-to-b from-neutral-900/30 via-neutral-900/60 to-neutral-900/80" />

              {/* Conteúdo Central - Tamanhos de fonte ORIGINAIS mantidos */}
              <div className="absolute inset-0 flex items-center justify-center text-center z-10">
                <div className="max-w-4xl px-6">
                  {/* Animação: Sobe 20px e faz fade-in (0.8s) */}
                  <h1 className="text-4xl md:text-6xl font-bold text-slate-50 leading-[1.15] tracking-tight opacity-0 animate-premium-slide-up">
                    {slide.title}
                  </h1>

                  {/* Animação: Sobe 20px, faz fade-in e tem DELAY (0.3s) */}
                  <p className="text-slate-200 mt-6 text-base md:text-lg max-w-2xl mx-auto opacity-0 animate-premium-slide-up animation-delay-300">
                    {slide.description}
                  </p>

                  {slide.cta && (
                    /* Animação: Faz fade-in e tem DELAY (0.6s) */
                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-10 opacity-0 animate-premium-fade-in animation-delay-600">
                      <Link
                        href="#orcamento"
                        className="bg-orange-400 text-slate-50 px-8 py-3.5 rounded-md font-bold hover:bg-amber-700 shadow-xl shadow-orange-400/20 transform hover:-translate-y-0.5 active:scale-95 transition-all text-sm uppercase tracking-wider"
                      >
                        Solicitar Orçamento
                      </Link>

                      <Link
                        href="#servicos"
                        className="backdrop-blur-sm bg-slate-50/5 border border-orange-200/50 text-slate-50 px-8 py-3.5 rounded-md font-bold hover:bg-orange-400 hover:border-orange-400 transition-all text-sm uppercase tracking-wider"
                      >
                        Nossos Serviços
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos CSS para as Animações Premium e Paginação */}
      <style jsx global>{`
        /* Animação Principal de Entrada (Slide Up + Fade) */
        @keyframes premiumSlideUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Animação Simples de Fade */
        @keyframes premiumFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Efeito Zoom Ken Burns para a Imagem */
        @keyframes slow-zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 8s linear infinite alternate;
        }

        /* Classes Utilitárias de Animação do Tailwind */
        .animate-premium-slide-up {
          animation: premiumSlideUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-premium-fade-in {
          animation: premiumFadeIn 0.8s ease forwards;
        }

        /* Classes de Delay (Atraso) */
        .animation-delay-300 {
          animation-delay: 0.35s !important;
        }
        .animation-delay-600 {
          animation-delay: 0.7s !important;
        }

        /* Faz as animações rodarem toda vez que o slide mudar (Swiper class) */
        .swiper-slide-active .swiper-slide-content h1,
        .swiper-slide-active .swiper-slide-content p,
        .swiper-slide-active .swiper-slide-content div {
          animation-play-state: running;
        }

        /* Customização da Paginação (Bolinhas) */
        .swiper-pagination-bullet {
          background: #f8fafc !important; /* slate-50 */
          opacity: 0.4;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #fb923c !important; /* orange-400 */
          opacity: 1;
          width: 26px;
          border-radius: 5px;
          transition: all 0.4s ease;
        }
      `}</style>
    </section>
  );
}
