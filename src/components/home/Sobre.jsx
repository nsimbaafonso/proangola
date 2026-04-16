"use client";

import Link from "next/link";
import Image from "next/image";

import SobreImg from "@/assets/img/sobre.jpg";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGEM */}
        <div className="relative w-full h-112.5 md:h-137.5 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={SobreImg}
            alt="Equipa ProAngola em obra"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* TEXTO */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            Sobre a <span className="text-orange-400">ProAngola</span>
          </h2>

          <p className="text-neutral-700 mt-6 leading-relaxed">
            Somos uma empresa de construção civil focada em entregar obras com
            qualidade, segurança e rigor técnico em Angola. Atuamos em projetos
            residenciais, comerciais e industriais.
          </p>

          <p className="text-neutral-700 mt-4 leading-relaxed">
            A nossa equipa combina experiência no terreno com soluções modernas
            de engenharia, garantindo resultados duradouros e eficientes em cada projeto.
          </p>

          {/* Destaques */}
          <div className="grid grid-cols-2 gap-6 mt-8">

            <div>
              <h3 className="text-2xl font-bold text-orange-400">10+</h3>
              <p className="text-sm text-neutral-600">Anos de experiência</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-400">100+</h3>
              <p className="text-sm text-neutral-600">Projetos concluídos</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-400">50+</h3>
              <p className="text-sm text-neutral-600">Profissionais qualificados</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-400">100%</h3>
              <p className="text-sm text-neutral-600">Compromisso com qualidade</p>
            </div>

          </div>

          {/* CTA */}
          <Link
            href="#servicos"
            className="inline-block mt-10 bg-orange-400 text-slate-50 px-6 py-3 rounded-md font-bold hover:bg-amber-700 transition"
          >
            Conhecer Serviços
          </Link>

        </div>

      </div>

    </section>
  );
}
