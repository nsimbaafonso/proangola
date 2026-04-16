import Link from "next/link";

export const metadata = {
  title: "Página não encontrada | Pro Angola",
  description:
    "A página que procura não foi encontrada. Volte à Pro Angola e descubra nossos serviços de construção civil, obras e engenharia em Luanda.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Página não encontrada | Pro Angola",
    description:
      "Esta página não existe. Conheça a Pro Angola e solicite um orçamento para sua obra em Luanda.",
    url: "https://proangola.vercel.app",
    siteName: "Pro Angola",
    locale: "pt_AO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Página não encontrada | Pro Angola",
    description:
      "Página não encontrada. Volte à Pro Angola e peça seu orçamento.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-900 px-6">

      {/* leve glow decorativo */}
      <div className="absolute inset-0 bg-linear-to-b from-orange-400/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative text-center max-w-xl">

        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-bold text-orange-400">
          404
        </h1>

        {/* título */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mt-4">
          Página não encontrada
        </h2>

        {/* texto */}
        <p className="text-slate-300 mt-4 leading-relaxed">
          A página que procura não existe ou foi movida.
          Volte à ProAngola e descubra os nossos serviços de construção civil, engenharia e obras em Angola.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="bg-orange-400 text-slate-50 px-6 py-3 rounded-md font-bold hover:bg-amber-700 transition"
          >
            Voltar ao Início
          </Link>

          <Link
            href="/#orcamento"
            className="border border-orange-200 text-slate-50 px-6 py-3 rounded-md font-bold hover:bg-orange-400 hover:text-slate-50 transition"
          >
            Solicitar Orçamento
          </Link>

        </div>

      </div>

    </section>
  );
}
