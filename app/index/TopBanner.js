import Carrusel from "@/app/ui/Carrusel";
export default function TopBanner() {

  function getImgPath( imgName ) {
    const imgPath = `/red-logistica/imgs/${imgName}`;
    return imgPath;
  }
  

  const contenido = [
    {
      /* SETUPS */
      id: 1,
      titulo: "PROYECTO RED LOGÍSTICA",
      subtitulo:
        "Sábados 14:00 -15:00 hs. | Acompañános por YouTube, Twitch y por Radio Online",
      accion: "Ver Más",
      accionHref: "#radio",
      imagen: `url(${getImgPath("bannerimg.webp")})`,
      /* ESTILOS */
      clases: "bg-emerald-600 bg-opacity-75",
      clasesBtn: "btn btn-accent",
      clasesSub: "text-cyan-100",
    },
  ];
  return <Carrusel duracion={5000} transicion={4000} contenido={contenido} />;
}
