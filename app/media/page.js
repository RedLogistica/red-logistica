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
      className="min-h-screen flex flex-col items-center py-32 md:py-40 px-10"
      id="media"
      key="media"
    >
      <div
        className="w-full"
        data-aos="fade-in"
        data-aos-duration="300"
        data-aos-anchor-placement="center"
        data-aos-easing="linear"
      >
        <hgroup className="text-center mb-2">
          <h2 className=" text-4xl md:text-5xl font-bold">
            ESCUCHÁNOS EN VIVO
          </h2>
          <span className="badge badge-neutral badge-lg">
            Todos los sábados de 14-15 hs
          </span>
        </hgroup>
        <div className="text-center">
          <p className="text-2xl text-neutral leading-none">
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
    </section>
  );
}
