import Link from "next/link";

export default function InfoSection() {
  const content = {
    // Título:
    title: "Sintonizá nuestra transmisión en vivo",
    // Subtítulo:
    subtitle: "Los sábados de 14 a 15 hs.",
    // Texto principal:
    text: "Entrevistas, novedades, discusiones y más. Todo sobre el mundo de la logística y la cadena de suministro.",
    // Llamado a la acción:
    text2:
      "Un espacio que busca hacer logística para el pueblo, acercando información clave y análisis profundos. ",
    text3:
      "Uníte a nosotros cada sábado para mantenerte al tanto de todo lo que acontece en este apasionante universo.",

    cta: "Ver Medios",
    // Texto secundario (opcional):
    texto2:
      "Sumate a la comunidad y participá de sorteos, concursos y actividades exclusivas.",
  };

  return (
    <section className="min-h-screen py-40 px-10" id="radio" key="radio">
      <div
        className="w-full aos-init"
        data-aos="fade-in"
        data-aos-duration="300"
        data-aos-anchor-placement="center"
        data-aos-easing="linear"
      >
        <section className="flex flex-col items-center">
          {/* ==============*/}
          <hgroup className="text-center mb-10">
            {/* titulo */}
            <h2 className=" text-3xl md:text-5xl font-bold">{content.title}</h2>
            {/* badge */}
            <span className="badge badge-neutral badge-lg">
              {content.subtitle}
            </span>
          </hgroup>
          {/* ============== */}
          <div className="text-2xl max-w-5xl text-center grid  grid-cols-1 md:grid-cols-3 gap-3">
            {/* tecto */}
            <div className="p-3 shadow">
              <p>{content.text}</p>
            </div>
            <div className="p-3 shadow">
              <p>{content.text2}</p>
            </div>
            <div className="p-3 shadow">
              <p>{content.text3}</p>
            </div>
          </div>
          <div className="py-10">
            <Link className="btn btn-primary mx-1" href={"/media"}>
              {content.cta}
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
