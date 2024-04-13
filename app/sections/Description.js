import Link from "next/link";

export default function Description() {
  return (
    <section
      className="min-h-screen bg-black text-white py-40 px-10"
      id="nosotros"
      key="nosotros"
    >
      <div
        className="w-full aos-init"
        data-aos="fade-in"
        data-aos-duration="300"
        data-aos-anchor-placement="center"
        data-aos-easing="linear"
      >
        <h1 className="text-center text-4xl md:text-6xl font-bold">
          NUESTRO PROYECTO
        </h1>
        <div className="flex items-center w-full justify-center py-10 flex-col flex-nowrap">
          <div className="max-w-md text-lg">
            <p className="py-2 leading-tight">
              Somos un espacio dedicado a la divulgación, promoción y fomento de
              la logística en todas sus dimensiones.
            </p>

            <p className="py-2 leading-tight">
              Nuestra misión es promover el conocimiento logístico en la
              sociedad, fomentar prácticas óptimas en las empresas y apoyar el
              crecimiento profesional de los expertos en logística.
            </p>
            <p className="py-2 leading-tight">
              Buscamos difundir información relevante, generar
              espacios de discusión y debate, vincular a los actores de la
              cadena logística y contribuir al desarrollo de una cultura
              logística en el país.
            </p>
          </div>
          <div className="py-10">
            <Link className="btn btn-accent mx-1" href={"/team"}>
              Nuestro Team
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
