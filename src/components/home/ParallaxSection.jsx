"use client";

export default function ParallaxSection() {
  return (
    <section
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center px-6 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/img/parallax.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-900/70" />

      {/* Conteúdo */}
      <div className="relative max-w-3xl">

        <h2 className="text-3xl md:text-5xl font-bold text-slate-50 leading-tight">
          Construímos com rigor, segurança e excelência
        </h2>

        <p className="text-slate-200 mt-5 text-base md:text-lg">
          Cada projeto é executado com engenharia de precisão e compromisso total com a qualidade.
        </p>

        <a
          href="#orcamento"
          className="inline-block mt-8 bg-orange-400 text-slate-50 px-7 py-3 rounded-md font-bold hover:bg-amber-700 transition"
        >
          Solicitar Orçamento
        </a>

      </div>
    </section>
  );
}
