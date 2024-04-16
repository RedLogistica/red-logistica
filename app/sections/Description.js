import Link from "next/link";

function getImgPath(imgName) {
  const imgPath = `/red-logistica/imgs/${imgName}`;
  return imgPath;
}

export default function Description() {
  return (
    <section
      className="hero min-h-screen"
      id="proyecto"
      key="nosotros"
      style={{
        backgroundImage: `url(${getImgPath("project.webp")})`,
      }}
    >
      <div className={`hero-overlay w-full bg-cyan-950 bg-opacity-80`}></div>
      <div
        className="w-full aos-init"
        data-aos="fade-in"
        data-aos-duration="300"
        data-aos-anchor-placement="center"
        data-aos-easing="linear"
      >
        <article className="py-40 px-5 text-white">
          <h1 className="text-center text-4xl md:text-6xl font-bold">
            NUESTRO PROYECTO
          </h1>
          <div className="flex items-center w-full justify-center py-10 flex-col flex-nowrap">
            <div className="max-w-md text-lg md:text-xl">
              <p className="py-2 leading-tight">
                Somos un espacio dedicado a la divulgación, promoción y fomento
                de la logística en todas sus dimensiones.
              </p>

              <p className="py-2 leading-tight">
                Nuestra misión es promover el conocimiento logístico en la
                sociedad, fomentar prácticas óptimas en las empresas y apoyar el
                crecimiento profesional de los expertos en logística.
              </p>
              <p className="py-2 leading-tight">
                Buscamos difundir información relevante, generar espacios de
                discusión y debate, vincular a los actores de la cadena
                logística y contribuir al desarrollo de una cultura logística en
                el país.
              </p>
            </div>
            <div className="py-10">
              <Link className="btn btn-accent mx-1" href={"/team"}>
                Nuestro Team
              </Link>
              <Link className="btn btn-accent btn-outline mx-1" href={"#sponsors"}>
                Sponsors
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
