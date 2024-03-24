import Link from "next/link";

export const metadata = {
  keywords: [
    "eventos logística argentina Expo Logisti-k",
    "feria logística argentina Expo Logisti-k",
    "congreso logística argentina Expo Logisti-k",
    "jornadas logística argentina Expo Logisti-k",
    "encuentro logística argentina Expo Logisti-k",
    "summit logística argentina Expo Logisti-k",
    "Red Logística",
    "Radio Red Logística",
    "logística argentina",
    "transporte argentina",
    "cadena de suministro argentina",
    "radio argentina",
    "programas de radio argentina",
    "podcast argentina",
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
  title: "Eventos Logísticos",
  description:
    "Proximamente encontrarás en esta página detalles sobre eventos emocionantes del mundo logístico.",
};

export default function PaginaEventos() {
  return (
    <main
      data-aos="fade-in"
      data-aos-duration="500"
      data-aos-anchor-placement="center"
      data-aos-easing="linear"
      className="flex min-h-screen flex-col items-center justify-between py-20 p-24 transition-all duration-500"
    >
      <hgroup className="text-center">
        <div role="alert" className="alert alert-info opacity-70 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span className="text-sm">PROXIMAMENTE</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">EVENTOS</h1>
        <p className="text-2xl max-w-md">
          <span>
            Mantenéte atento que proximamente informaremos de eventos logísticos
            organizados por nuestro espacio
          </span>
        </p>
        <Link href="/" className="btn btn-wide btn-accent mt-5">
          Volver a Inicio
        </Link>
      </hgroup>
    </main>
  );
}
