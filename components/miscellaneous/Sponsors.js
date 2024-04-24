function getImgPath( imgName ) {
  const imgPath = `/red-logistica/imgs/sponsors/${imgName}`;
  return imgPath;
}

export default function Sponsors() {

  const sponsorsList = [
    { sponsor: "Conurbania", img: "conurbania.webp" },
    { sponsor: "Hub Logístico", img: "hublogisticologo.webp" },
    { sponsor: "Consultora Si", img: "consultorasi.webp" },
    { sponsor: "HLC Seguros", img: "hlcseguros.webp" },
  ];

  return (
    <div
    id="sponsors"
      className="w-full aos-init"
      data-aos="zoom-in-"
      data-aos-duration="800"
      data-aos-anchor-placement="center-bottom"
      data-aos-easing="linear"
    >
      <section className="flex flex-col flex-nowrap text-center items-center min-h-screen py-20">
        <hgroup className="py-5 text-center">
          <h2 className="text-4xl md:text-6xl font-bold">SPONSORS</h2>
          <p>Gracias por hacer posible Red Logística Radio</p>
        </hgroup>

        <div className="flex flex-row flex-wrap gap-3 items-center">
          {
            sponsorsList.map((sponsor, index) => (
              <div className="avatar" key={index}>
                <div className="w-20 rounded-full shadow">
                  <img src={getImgPath(sponsor.img)} alt={sponsor.sponsor + " logo"}/>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
}
