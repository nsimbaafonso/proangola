"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (open) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-slate-50 shadow-md py-3 border-b border-orange-200" 
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo - Muda de cor conforme o scroll */}
        <Link 
          href="#inicio" 
          onClick={closeMenu} 
          className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-neutral-900" : "text-slate-50"
          }`}
        >
          <span className="text-orange-400">Pro</span>Angola
        </Link>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl p-2 focus:outline-none transition-colors ${
            scrolled || open ? "text-neutral-900" : "text-slate-50"
          }`}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars-staggered"}`}></i>
        </button>

        {/* Navegação */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            flex flex-col md:flex-row items-center gap-8
            px-6 md:px-0 py-8 md:py-0
            transition-all duration-300 ease-in-out
            ${scrolled ? "bg-slate-50 md:bg-transparent" : "bg-neutral-900 md:bg-transparent"}
            ${open ? "translate-y-0 opacity-100 shadow-xl md:shadow-none" : "-translate-y-5 opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto"}
          `}
        >
          {/* Links - Mudam de cor conforme o scroll no Desktop */}
          <Link 
            href="#inicio" 
            onClick={closeMenu} 
            className={`text-[15px] font-medium transition-colors hover:text-orange-400 ${
              scrolled ? "text-neutral-900" : "text-slate-50 md:text-slate-50"
            }`}
          >
            Início
          </Link>

          <Link 
            href="#sobre" 
            onClick={closeMenu} 
            className={`text-[15px] font-medium  transition-colors hover:text-orange-400 ${
              scrolled ? "text-neutral-900" : "text-slate-50"
            }`}
          >
            Sobre
          </Link>

          <Link 
            href="#servicos" 
            onClick={closeMenu} 
            className={`text-[15px] font-medium  transition-colors hover:text-orange-400 ${
              scrolled ? "text-neutral-900" : "text-slate-50"
            }`}
          >
            Serviços
          </Link>

          <Link 
            href="#projetos" 
            onClick={closeMenu} 
            className={`text-[15px] font-medium transition-colors hover:text-orange-400 ${
              scrolled ? "text-neutral-900" : "text-slate-50"
            }`}
          >
            Projetos
          </Link>

          <Link 
            href="#contato" 
            onClick={closeMenu} 
            className={`text-[15px] font-medium transition-colors hover:text-orange-400 ${
              scrolled ? "text-neutral-900" : "text-slate-50"
            }`}
          >
            Contato
          </Link>

          {/* Botão CTA */}
          <Link
            href="#orcamento"
            onClick={closeMenu}
            className="
              md:ml-4
              bg-orange-400
              text-slate-50
              px-6 py-2.5
              rounded-md
              font-bold
              hover:bg-amber-700
              shadow-lg shadow-orange-400/20
              transition-all
              duration-300
            "
          >
            Solicitar Orçamento
          </Link>
        </nav>

      </div>
    </header>
  );
}
