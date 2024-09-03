import StreamPlayer from "@/components/media/StreamPlayer";
import Link from "next/link";

export const metadata = {
  keywords: [
    "Red Logística",
    "Radio Red Logística",
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
    "Streaming",
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
  title: "Sintonizá Red logística",
  description:
    "Sintonizános o mirános en vivo por YouTube o Twitch en el canal de Conurbania Radio.",
};

export default function MediaSection() {
  return (
    <section
      className="bg-media  flex flex-col items-center"
      id="media"
      key="media"
    >
      <article
        className="w-full"
      >
        <div className="w-full min-h-screen max-w-5xl mx-auto px-5  py-20">

          <hgroup className="md:text-center mb-2 z-10">
            <h2 className="content-title">
              ESCÚCHANOS EN <span className="text-emerald-500">VIVO</span>
            </h2>
            <span className="badge badge-ghost bg-black text-white badge-lg border-none">
              Todos los sábados de 14-15:30 hs
            </span>
          </hgroup>

          <div className="md:text-center flex flex-col items-center justify-center py-5  z-10 ">
            <p className="text-content">
              Escuchá nuestra transmisión en vivo por
              <Link
                href="https://conurbaniaparque.com/index.php/radio-2/"
                target="_blank"
                className="text-base link"
              >
                {" "}
                Radio Conurbania
              </Link>{" "}
              o mirála por{" "}
              <Link
                href="https://www.youtube.com/@conurbania"
                target="_blank"
                className="text-base link"
              >
                {" "}
                YouTube
              </Link>{" "}
              y{" "}
              <Link
                href="https://www.twitch.tv/radioconurbania"
                target="_blank"
                className="text-base link"
              >
                {" "}
                Twitch
              </Link>
            </p>
          </div>


          <StreamPlayer />


        </div>
      </article>
    </section>
  );
}
