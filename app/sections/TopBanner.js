import Carrusel from "@/app/ui/Carrusel";
export default function TopBanner() {

  const dev_url = process.env.DEV_URL+"imgs/bannerimg.webp";
  const prod_url = "imgs/bannerimg.webp";
  const image_path = dev_url ? dev_url : prod_url;

  const contenido = [
    {
      /* SETUPS */
      id: 1,
      titulo: "RED LOGÍSTICA RADIO",
      subtitulo:
        "Sábados 14:00 -15:00 hs. | Acompañános por YouTube, Twitch y por Radio Online",
      accion: "Ver Más",
      accionHref: "#radio",
      imagen: `url(${image_path})`,
      /* ESTILOS */
      clases: "bg-black bg-opacity-80",
      clasesBtn: "btn btn-accent",
      clasesSub: "text-cyan-100",
    },
  ];
  return <Carrusel duracion={5000} transicion={4000} contenido={contenido} />;
}
