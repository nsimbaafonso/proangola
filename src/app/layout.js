import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

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
    url: "https://seudominio.com",
    siteName: "Pro Angola",
    locale: "pt_AO",
    type: "website",
    images: [
      {
        url: "https://seudominio.com/og-image.jpg",
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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Ao">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {/* Header */}
        <Header />

        <main>
          {children}
        </main>

        {/* Botão WhatsApp fixo do site */}
        <WhatsAppButton phone="24492300000" size={64} />
        <Toaster
          position="top-right"
          containerStyle={{
            zIndex: 10000,
          }}
        />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
