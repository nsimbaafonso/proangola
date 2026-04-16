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
    url: "https://seudominio.com",
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
    <section>
    </section>
  );
}
