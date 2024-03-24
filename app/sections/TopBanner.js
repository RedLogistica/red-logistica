import Carrusel from "@/app/ui/Carrusel";
export default function TopBanner() {
  const contenido = [
    {
      
      /* SETUPS */
      id: 1,
      titulo: "RADIO RED LOGÍSTICA",
      subtitulo:
        "| Sábados 14:00 -15:00 hs. | Acompañános por YouTube, Twitch y por Radio Online | ",
      accion: "Ver Más",
      accionHref: "#radio",
      imagen: "url(imgs/staff/staff.webp)",

      /* ESTILOS */
      clases: "bg-indigo-950 bg-opacity-80",
      clasesBtn: "btn btn-accent btn-lg",
      clasesSub: "text-cyan-100",
    },
/*     {
      id: 2,
      titulo: "INFORMACIÓN EN MOVIMIENTO",
      subtitulo:
        "Buscamos crear un espacio de conocimiento, debate y entretenimiento sobre el mundo de la logística",
      imagen:
        "url(https://images.unsplash.com/photo-1625662171891-9a3348f961f4)",
      clases: "bg-slate-800 bg-opacity-80",
      clasesTitulo: "text-slate-50 text-opacity",
      clasesSub: "text-gray-200",
    }, */
  ];
  return <Carrusel duracion={5000} transicion={4000} contenido={contenido} />;
}
