import Link from "next/link";
import Section from "../SectionLayout";

function getImgPath(imgName) {
  const imgPath = `/imgs/sponsors/${imgName}`;
  return imgPath;
}

export default function SponsorsGrid({ ...props }) {

  const sponsorsList = [
    { sponsor: "Conurbania", img: "conurbania.webp" },
    { sponsor: "Hub Logístico", img: "hublogisticologo.webp" },
    { sponsor: "Consultora Si", img: "consultorasi.webp" },
    { sponsor: "HLC Seguros", img: "hlcseguros.webp" },
    { sponsor: "Transporte Moretti", img: "moretti.webp" },
  ];

  return (
    <section className="w-full py-20 pb-52 px-5">
      <article className="flex flex-col flex-nowrap  items-center  w-full">
        <header className="text-center">
          <h2 className="content-title">SPONSORS</h2>
          <p className="text-content">Gracias por hacer posible Red Logística Radio</p>
        </header>
        <section className="flex flex-row flex-wrap gap-3 items-center my-5 justify-center">
          {
            sponsorsList.map((sponsor, index) => (
              <div className="avatar" key={index}>
                <div className="w-16 md:w-32 rounded-xl shadow">
                  <img src={getImgPath(sponsor.img)} alt={sponsor.sponsor + " logo"} />
                </div>
              </div>
            ))
          }
        </section>
        {
          props.index ?
            <section className="w-full md:text-center my-12">
              <Link href={"/sponsors"} className='btn btn-ghost bg-emerald-400'>Quiero ser sponsor</Link>
            </section>
            : null
        }
      </article>
    </section>
  );
}
