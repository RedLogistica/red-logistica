import Link from "next/link"
export default function TheShow() {
    const content = {
        // Título:
        title: "ACOMPÁÑANOS EN VIVO",
        // Subtítulo:
        subtitle: "",
        // Texto principal:
        text: "Entrevistas, novedades, discusiones y más. Todo sobre el mundo de la logística y la cadena de suministro.",
        // Llamado a la acción:
        text2:
          "Buscamos crear un espacio que acerque información clave y análisis profundos para cualquiera que le interese. ",
        text3:
          "Uníte a nosotros cada sábado para mantenerte al tanto de todo lo que acontece en este apasionante universo.",
    
        cta: "Ver Radio/Streaming Logístico",
        cta2: "Nuestro Proyecto",
        // Texto secundario (opcional):
        texto2:
          "Sumate a la comunidad y participá de sorteos, concursos y actividades exclusivas.",
      };
    
      return (
        <section className="py-20  max-w-7xl px-5 mx-auto" id="radio" key="radio">
          <div
          className="w-full"
          >
            <section className="w-full flex flex-col items-center">
              {/* ==============*/}
              <hgroup className="mb-10">
                {/* titulo */}
                <h2 className="content-title">ACOMPÁÑANOS <span className="text-emerald-500">EN VIVO</span></h2>
              </hgroup>
              <div className="divider"></div>
              {/* ============== */}
              <div className="text-content  text-left grid  grid-cols-1 md:grid-cols-3 gap-3">
                {/* tecto */}
                <div className="p-3 ">
                  <p>{content.text}</p>
                </div>
                <div className="p-3 ">
                  <p>{content.text2}</p>
                </div>
                <div className="p-3 ">
                  <p>{content.text3}</p>
                </div>
              </div>
              <div className="w-full md:text-center py-10">
                <Link className="btn btn-ghost bg-emerald-400 mx-1" href={"/media"}>
                  {content.cta}
                </Link>
              </div>
            </section>
          </div>
        </section>
      );

}