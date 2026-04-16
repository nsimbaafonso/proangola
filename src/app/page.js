import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import Servicos from "@/components/home/Servicos";
import Projetos from "@/components/home/Projetos";
import ParallaxSection from "@/components/home/ParallaxSection";
import Orcamento from "@/components/home/Orcamento";
import Contato from "@/components/home/Contato";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Pro Angola | Construção Civil e Engenharia em Luanda",
  description:
    "A Pro Angola é especialista em construção civil, obras, reformas e engenharia em Luanda. Projetos modernos, qualidade garantida e cumprimento de prazos. Solicite um orçamento!",
  keywords: [
    "construção civil em Luanda",
    "empresa de construção Angola",
    "engenharia civil",
    "obras e reformas",
    "construtora Pro Angola",
    "empreiteira em Luanda",
    "projetos de construção",
  ],
  authors: [{ name: "Pro Angola" }],
  creator: "Pro Angola",
  openGraph: {
    title: "Pro Angola | Construção Civil em Luanda",
    description:
      "Projetos de construção e engenharia com qualidade e confiança. Conheça a Pro Angola e peça já o seu orçamento.",
    url: "https://proangola.vercel.app",
    siteName: "Pro Angola",
    locale: "pt_AO",
    type: "website",
    images: [
      {
        url: "https://proangola.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pro Angola Construção Civil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Angola | Engenharia e Construção",
    description:
      "Construa com segurança e qualidade. A Pro Angola é referência em obras e engenharia em Luanda.",
    images: ["https://seudominio.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "construction",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  
  return (
    <>
      <Hero />
      <Sobre />
      <Servicos />
      <Projetos />
      <ParallaxSection />
      <Orcamento />
      <Contato />
      <CTA />
    </>
  );
}
