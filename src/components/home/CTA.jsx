"use client";

export default function CTA() {
  return (
    <section className="bg-neutral-900 py-20">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-slate-50 leading-tight">
          Tem um projeto em mente?
        </h2>

        <p className="text-slate-300 mt-5 text-base md:text-lg">
          Fale connosco e receba uma proposta personalizada para a sua obra com rapidez e total transparência.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

          {/* WhatsApp */}
          <a
            href="https://wa.me/244923000000"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-amber-700 text-slate-50 px-7 py-3 rounded-md font-bold hover:bg-orange-400 transition"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            Falar no WhatsApp
          </a>

          {/* Orçamento */}
          <a
            href="#orcamento"
            className="bg-orange-400 text-slate-50 px-7 py-3 rounded-md font-bold hover:bg-amber-700 transition"
          >
            Solicitar Orçamento
          </a>

        </div>

      </div>

    </section>
  );
}
