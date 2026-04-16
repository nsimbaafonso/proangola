"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-slate-50 border-t-4 border-orange-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Coluna 1: Marca & Descrição */}
        <div className="md:col-span-5">
          <Link href="#inicio" className="text-3xl font-bold tracking-tight">
            <span className="text-orange-400">Pro</span>Angola
          </Link>

          <p className="text-base text-slate-300 mt-6 leading-relaxed max-w-sm">
            Referência em construção civil com rigor técnico e segurança. 
            Erguemos estruturas sólidas que impulsionam o progresso de Angola, 
            do projeto à entrega final.
          </p>

          {/* Redes Sociais Premium (Cantos arredondados md) */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-neutral-700 text-slate-300 hover:bg-orange-400 hover:text-slate-50 hover:border-orange-400 transition-all duration-300">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-neutral-700 text-slate-300 hover:bg-orange-400 hover:text-slate-50 hover:border-orange-400 transition-all duration-300">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-neutral-700 text-slate-300 hover:bg-orange-400 hover:text-slate-50 hover:border-orange-400 transition-all duration-300">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md border border-neutral-700 text-slate-300 hover:bg-orange-400 hover:text-slate-50 hover:border-orange-400 transition-all duration-300">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Coluna 2: Navegação Rápida (Sem listas) */}
        <div className="md:col-span-3">
          <h3 className="text-sm font-bold text-orange-400 mb-6 uppercase tracking-wider">
            Navegação
          </h3>

          <div className="flex flex-col gap-4 text-[15px] text-slate-300">
            <Link href="#inicio" className="hover:text-orange-400 hover:translate-x-1 transition-all w-fit">
              Início
            </Link>
            <Link href="#sobre" className="hover:text-orange-400 hover:translate-x-1 transition-all w-fit">
              Sobre Nós
            </Link>
            <Link href="#servicos" className="hover:text-orange-400 hover:translate-x-1 transition-all w-fit">
              Nossos Serviços
            </Link>
            <Link href="#projetos" className="hover:text-orange-400 hover:translate-x-1 transition-all w-fit">
              Portfólio
            </Link>
            <Link href="#contato" className="hover:text-orange-400 hover:translate-x-1 transition-all w-fit">
              Contacto
            </Link>
          </div>
        </div>

        {/* Coluna 3: Contacto & CTA */}
        <div className="md:col-span-4">
          <h3 className="text-sm font-bold text-orange-400 mb-6 uppercase tracking-wider">
            Escritório
          </h3>

          <div className="flex flex-col gap-5 text-[15px] text-slate-300">
            <div className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot mt-1 text-orange-400"></i>
              <span>Luanda, Angola</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-orange-400"></i>
              <a href="mailto:geral@proangola.co.ao" className="hover:text-orange-400 transition">
                geral@proangola.co.ao
              </a>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-orange-400"></i>
              <a href="tel:+244923000000" className="hover:text-orange-400 transition">
                +244 923 000 000
              </a>
            </div>
          </div>

          <Link
            href="#orcamento"
            className="inline-flex items-center justify-center mt-8 bg-orange-400 text-slate-50 px-6 py-3 rounded-md font-bold hover:bg-amber-700 shadow-lg shadow-orange-900/20 transition-all active:scale-95"
          >
            Solicitar Orçamento
          </Link>
        </div>

      </div>

      {/* Barra Inferior */}
      <div className="border-t border-neutral-800 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 uppercase tracking-[0.2em]">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-orange-300">ProAngola</span>. 
            Todos os direitos reservados.
          </p>
          <p className="mt-4 md:mt-0">
            Engenharia · Consultoria · Infraestrutura
          </p>
        </div>
      </div>
    </footer>
  );
}
