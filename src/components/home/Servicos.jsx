"use client";

import Link from "next/link";

export default function Servicos() {
  return (
    <section id="servicos" className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Os nossos <span className="text-orange-400">Serviços</span>
          </h2>

          <p className="text-neutral-600 mt-4">
            Soluções completas em construção civil com qualidade, segurança e rigor técnico em cada etapa do projeto.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

          {/* Serviço 1 */}
          <div className="bg-white border border-orange-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <div className="text-orange-400 text-3xl mb-4">
              <i className="fa-solid fa-building"></i>
            </div>

            <h3 className="text-xl font-bold text-neutral-900">
              Construção de Edifícios
            </h3>

            <p className="text-neutral-600 mt-3 text-sm leading-relaxed">
              Execução de edifícios residenciais e comerciais com padrões modernos de engenharia.
            </p>
          </div>

          {/* Serviço 2 */}
          <div className="bg-white border border-orange-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <div className="text-orange-400 text-3xl mb-4">
              <i className="fa-solid fa-hammer"></i>
            </div>

            <h3 className="text-xl font-bold text-neutral-900">
              Obras e Reabilitação
            </h3>

            <p className="text-neutral-600 mt-3 text-sm leading-relaxed">
              Renovação, ampliação e recuperação de estruturas com foco em durabilidade e segurança.
            </p>
          </div>

          {/* Serviço 3 */}
          <div className="bg-white border border-orange-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <div className="text-orange-400 text-3xl mb-4">
              <i className="fa-solid fa-road"></i>
            </div>

            <h3 className="text-xl font-bold text-neutral-900">
              Infraestruturas
            </h3>

            <p className="text-neutral-600 mt-3 text-sm leading-relaxed">
              Construção de estradas, urbanização e obras de engenharia civil pesada.
            </p>
          </div>

          {/* Serviço 4 */}
          <div className="bg-white border border-orange-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <div className="text-orange-400 text-3xl mb-4">
              <i className="fa-solid fa-drafting-compass"></i>
            </div>

            <h3 className="text-xl font-bold text-neutral-900">
              Projetos de Engenharia
            </h3>

            <p className="text-neutral-600 mt-3 text-sm leading-relaxed">
              Planeamento e desenvolvimento de projetos estruturais e arquitetónicos.
            </p>
          </div>

          {/* Serviço 5 */}
          <div className="bg-white border border-orange-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <div className="text-orange-400 text-3xl mb-4">
              <i className="fa-solid fa-helmet-safety"></i>
            </div>

            <h3 className="text-xl font-bold text-neutral-900">
              Fiscalização de Obras
            </h3>

            <p className="text-neutral-600 mt-3 text-sm leading-relaxed">
              Supervisão técnica para garantir qualidade, segurança e cumprimento de prazos.
            </p>
          </div>

          {/* Serviço 6 */}
          <div className="bg-white border border-orange-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
            <div className="text-orange-400 text-3xl mb-4">
              <i className="fa-solid fa-pen-ruler"></i>
            </div>

            <h3 className="text-xl font-bold text-neutral-900">
              Consultoria Técnica
            </h3>

            <p className="text-neutral-600 mt-3 text-sm leading-relaxed">
              Apoio especializado em engenharia e construção para decisões mais seguras.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="#orcamento"
            className="bg-orange-400 text-slate-50 px-7 py-3 rounded-md font-bold hover:bg-amber-700 transition"
          >
            Solicitar Orçamento
          </Link>
        </div>

      </div>

    </section>
  );
}
