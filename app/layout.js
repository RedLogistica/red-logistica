import { titleFont, textFont, buttonFont } from "./fonts/font";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimateContent from "./ui/AnimateContent";
import ToTopButton from "@/components/button/ToTopButton";
import "./styles/globals.css";

export const metadata = {
  generator: "Next.js",
  applicationName: "Red Logística",
  keywords: [
    "logística argentina",
    "transporte argentina",
    "cadena de suministro argentina",
    "radio argentina",
    "programas de radio argentina",
    "podcast argentina",
    "comercio exterior argentina",
    "aduanas argentina",
    "puertos argentina",
    "aeropuertos argentina",
    "transporte terrestre argentina",
    "almacenamiento argentina",
    "distribución argentina",
    "tecnología logística argentina",
    "innovación logística argentina",
    "sostenibilidad logística argentina",
    "últimas noticias logística argentina",
    "tendencias logística argentina",
    "casos de éxito logística argentina",
    "entrevistas a expertos logística argentina",
    "análisis del mercado logístico argentino",
    "desafíos y oportunidades logística argentina",
    "logística Buenos Aires",
    "logística Córdoba",
    "logística Santa Fe",
    "logística Mendoza",
    "logística Rosario",
    "logística automotriz",
    "logística agropecuaria",
    "logística minera",
    "logística farmacéutica",
    "logística e-commerce",
  ],
  creator: "Red Logística",
  metadataBase: new URL("https://redlogistica.github.io/red-logistica/"),
  title: { template: "%s | Red Logística", default: "Red Logística" },
  description:
    "Red Logística: Radio, entrevistas, noticias y más sobre logística. Tu fuente de información y entretenimiento sobre el mundo logístico",
  openGraph: {
    title: "Red Logística: Radio, entrevistas, noticias y más sobre logística",
    description:
      "Tu fuente de información y entretenimiento sobre el mundo logístico.",
    url: "https://redlogistica.github.io/red-logistica/",
    siteName: "Red Logística",
    locale: "es-es",
    type: "website",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        data-theme="light"
        className={`${titleFont.variable} ${textFont.variable} ${buttonFont.variable}
        bg-gradient-to-tr from-purple-200 to-slate-100
        `}
      >
        <Navigation />
        <AnimateContent content={children} />
        <ToTopButton />
        <Footer />
      </body>
    </html>
  );
}
