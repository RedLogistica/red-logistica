import { teamMetadata } from "../utils/metadata/metaTeam";
import Section from "@/components/SectionLayout";

function getImgPath(imgName) {
  const imgPath = `/imgs/staff/${imgName}`;
  return imgPath;
}

export const metadata = { ...teamMetadata }

export default function StaffSection() {
  const teamList = [
    { nombre: "Antonio Martino", rol: "Panelista Experto en Logística", titulo: "Lic. en Planificación Logística", img: "martino.webp" },
    { nombre: "Pablo Jaquet", rol: "Panelista Experto en Logística", titulo: "Lic. en Planificación Logística", img: "jacket.webp" },
    { nombre: "Hernán Disanto", rol: "Panelista Experto en Logística", titulo: "Lic. en Planificación Logística", img: "disanto.jpg" },
    { nombre: "J. Esparza", rol: "Back Office Gráfico y Tecnológico", titulo: "Técnico U. en Logística", img: "esparza.jpeg" },
  ];

  return (
    <Section id="staff">
      <header
        className="rounded-lg py-20 text-center"
        style={{
          backgroundImage: `url(${getImgPath("staffbackground.webp")})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "color",
        }}
      >
        <hgroup className="">
          <h1 className="main-title text-white">
            NUESTRO <span className="text-emerald-400">EQUIPO</span>
          </h1>
        </hgroup>
      </header>


      <section className="min-h-screen w-full  py-10 ">
        <h2 className="w-full text-content text-center">
          Somos un grupo de compañeros profesionales apasionados por la divulgación y el impulso del arte logístico en la sociedad Argentina.
          </h2>
        <section className="max-w-5xl mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
            {teamList.map((member) => (
              < div key={`id-${member.nombre.slice(0, 3)}`} className="flex gap-4 px-3 py-5 rounded-lg">
                <div className="avatar size-28">
                  <img alt={`imagen de miembro ${member.nombre}`} src={getImgPath(member.img)} className="w-full rounded-full" loading="eager"/>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">{member.nombre}</h3>
                  <span className="text-sm">{member.titulo}</span>
                  <span className="text-sm">{member.rol}</span>
                  <div className="flex text-accent text-xs">
                    <a className="btn btn-ghost btn-sm btn-circle">
                      <i className="fa-brands fa-github text-lg"></i>
                    </a>
                    <a className="btn btn-ghost btn-sm btn-circle">
                      <i className="fa-brands fa-twitter text-lg"></i>
                    </a>
                    <a className="btn btn-ghost btn-sm btn-circle">
                      <i className="fa-brands fa-facebook text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </Section>
  );
}