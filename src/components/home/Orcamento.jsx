"use client";

export default function Orcamento() {
  return (
    <section id="orcamento" className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            Solicite o seu <span className="text-orange-400">Orçamento</span>
          </h2>

          <p className="text-neutral-600 mt-5 leading-relaxed">
            Preencha o formulário ou entre em contacto direto via WhatsApp para receber uma resposta rápida da nossa equipa.
          </p>

          <div className="mt-8 space-y-3 text-sm text-neutral-700">
            <p>Resposta em até 24 horas</p>
            <p>Orçamentos gratuitos e sem compromisso</p>
            <p>Soluções adaptadas ao seu projeto</p>
          </div>

          {/* WhatsApp CTA com ícone */}
          <a
            href="https://wa.me/244000000000"
            target="_blank"
            className="inline-flex items-center gap-2 mt-8 bg-amber-700 text-slate-50 px-6 py-3 rounded-md font-bold hover:bg-orange-400 transition"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            Solicitar via WhatsApp
          </a>

        </div>

        {/* FORMULÁRIO */}
        <form className="bg-white border border-orange-200 rounded-lg p-8 shadow-sm space-y-5">

          <div>
            <label className="text-sm text-neutral-700">Nome</label>
            <input
              type="text"
              placeholder="O seu nome"
              className="w-full mt-2 px-4 py-3 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="text-sm text-neutral-700">Email</label>
            <input
              type="email"
              placeholder="O seu email"
              className="w-full mt-2 px-4 py-3 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="text-sm text-neutral-700">Telefone</label>
            <input
              type="tel"
              placeholder="+244 xxx xxx xxx"
              className="w-full mt-2 px-4 py-3 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* NOVO CAMPO: ASSUNTO */}
          <div>
            <label className="text-sm text-neutral-700">Assunto</label>
            <input
              type="text"
              placeholder="Ex: Construção de moradia, reabilitação, etc."
              className="w-full mt-2 px-4 py-3 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="text-sm text-neutral-700">Mensagem</label>
            <textarea
              rows="4"
              placeholder="Descreva o seu projeto..."
              className="w-full mt-2 px-4 py-3 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-orange-400 text-slate-50 py-3 rounded-md font-bold hover:bg-amber-700 transition"
          >
            Enviar Pedido de Orçamento
          </button>

        </form>

      </div>

    </section>
  );
}
