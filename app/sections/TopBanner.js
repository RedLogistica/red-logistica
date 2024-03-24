import Carrusel from "@/app/ui/Carrusel";
export default function TopBanner() {
  const contenido = [
    {
      /* SETUPS */
      id: 1,
      titulo: "RADIO RED LOGÍSTICA",
      subtitulo:
        "Sábados 14:00 -15:00 hs. | Acompañános por YouTube, Twitch y por Radio Online",
      accion: "Ver Más",
      accionHref: "#radio",
      imagen: "url(imgs/staff/staff.webp)",
      /* ESTILOS */
      clases: "bg-indigo-950 bg-opacity-80",
      clasesBtn: "btn btn-accent btn-lg",
      clasesSub: "text-cyan-100",
    },
  ];
  return <Carrusel duracion={5000} transicion={4000} contenido={contenido} />;
}
