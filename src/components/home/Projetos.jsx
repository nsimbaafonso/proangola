"use client";

import Image from "next/image";

import LightGallery from "lightgallery/react";

// plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import projeto1 from "@/assets/img/projeto1.jpg";
import projeto2 from "@/assets/img/projeto2.jpg";
import projeto3 from "@/assets/img/projeto3.jpg";
import projeto4 from "@/assets/img/projeto4.jpg";
import projeto5 from "@/assets/img/projeto5.jpg";
import projeto6 from "@/assets/img/projeto5.jpg";

const projetos = [
  { src: projeto1, title: "Edifício Residencial Luanda" },
  { src: projeto2, title: "Centro Comercial" },
  { src: projeto3, title: "Moradias Modernas" },
  { src: projeto4, title: "Infraestrutura Urbana" },
  { src: projeto5, title: "Reabilitação de Estruturas" },
  { src: projeto6, title: "Projeto Industrial" },
];

export default function Projetos() {
  return (
    <section id="projetos" className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Os nossos <span className="text-orange-400">Projetos</span>
          </h2>

          <p className="text-neutral-600 mt-4">
            Alguns dos nossos trabalhos mais recentes em construção civil, engenharia e reabilitação.
          </p>
        </div>

        {/* LightGallery */}
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
        >
          {projetos.map((projeto, index) => (
            <a
              key={index}
              href={projeto.src.src}
              className="group relative overflow-hidden rounded-lg shadow-sm border border-orange-200"
            >
              {/* imagem */}
              <Image
                src={projeto.src}
                alt={projeto.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/60 transition" />

              {/* texto */}
              <div className="absolute bottom-0 p-5">
                <h3 className="text-slate-50 font-semibold text-lg">
                  {projeto.title}
                </h3>

                <p className="text-orange-400 text-sm mt-1 opacity-90">
                  Ver projeto
                </p>
              </div>
            </a>
          ))}
        </LightGallery>

      </div>

    </section>
  );
}
