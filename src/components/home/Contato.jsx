"use client";

export default function Contato() {
  return (
    <section id="contato" className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Contactos e <span className="text-orange-400">Localização</span>
          </h2>

          <p className="text-neutral-600 mt-4">
            Entre em contacto connosco ou visite-nos. Estamos disponíveis para ajudar no seu projeto.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">

          {/* Informações */}
          <div className="space-y-6">

            {/* Endereço */}
            <div className="flex items-start gap-4">
              <i className="fa-solid fa-location-dot text-orange-400 text-xl mt-1"></i>
              <div>
                <h3 className="font-bold text-neutral-900">Endereço</h3>
                <p className="text-neutral-600">
                  Luanda, Angola — Rua exemplo, nº 123
                </p>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start gap-4">
              <i className="fa-solid fa-phone text-orange-400 text-xl mt-1"></i>
              <div>
                <h3 className="font-bold text-neutral-900">Telefone</h3>
                <a href="tel:+244000000000" className="text-neutral-600 hover:text-orange-400 transition">
                  +244 000 000 000
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <i className="fa-brands fa-whatsapp text-orange-400 text-xl mt-1"></i>
              <div>
                <h3 className="font-bold text-neutral-900">WhatsApp</h3>
                <a
                  href="https://wa.me/244000000000"
                  target="_blank"
                  className="text-neutral-600 hover:text-orange-400 transition"
                >
                  Conversar no WhatsApp
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <i className="fa-solid fa-envelope text-orange-400 text-xl mt-1"></i>
              <div>
                <h3 className="font-bold text-neutral-900">Email</h3>
                <a
                  href="mailto:contacto@proangola.co.ao"
                  className="text-neutral-600 hover:text-orange-400 transition"
                >
                  contacto@proangola.co.ao
                </a>
              </div>
            </div>

          </div>

          {/* Mapa */}
          <div className="w-full h-87.5 md:h-112.5 rounded-lg overflow-hidden border border-orange-200 shadow-sm">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105291.77111161467!2d13.20170168145374!3d-8.853353711556109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d2c7d%3A0x850c1c5c5ecc5a92!2sLuanda!5e1!3m2!1spt-PT!2sao!4v1776298380106!5m2!1spt-PT!2sao"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}
