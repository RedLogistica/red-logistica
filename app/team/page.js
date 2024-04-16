function getImgPath(imgName) {
  const imgPath = `/red-logistica/imgs/staff/${imgName}`;
  return imgPath;
}

export const metadata = {
  keywords: [
    "Red Logística",
    "Radio Red Logística",
    "logística argentina",
    "transporte argentina",
    "cadena de suministro argentina",
    "radio argentina",
    "programas de radio argentina",
    "podcast argentina",
    "comercio exterior argentina",
    "aduanas argentina",
    "puertos argentina",
    "aeropuertos argentina",
    "transporte terrestre argentina",
    "almacenamiento argentina",
    "distribución argentina",
    "tecnología logística argentina",
    "innovación logística argentina",
    "sostenibilidad logística argentina",
    "últimas noticias logística argentina",
    "tendencias logística argentina",
    "casos de éxito logística argentina",
    "entrevistas a expertos logística argentina",
    "análisis del mercado logístico argentino",
    "desafíos y oportunidades logística argentina",
    "logística Buenos Aires",
    "logística Córdoba",
    "logística Santa Fe",
    "logística Mendoza",
    "logística Rosario",
    "logística automotriz",
    "logística agropecuaria",
    "logística minera",
    "logística farmacéutica",
    "logística e-commerce",
  ],
  title: "Equipo de Radio Red Logística",
  description:
    "Conocé a nuestro equipo de Red Logística, tu pograma de Radio dónde encontrás entrevistas, noticias y más sobre logística.",
};

export default function StaffSection() {
  const teamList = [
    { nombre: "Antonio Martino", img: "martino.webp" },
    { nombre: "Pablo Jacket", img: "jacket.webp" },
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center py-20 px-5 bg-neutral bg-opacity-80 "
      id="staff"
      key="staff"
      style={{
        backgroundImage: `url(${getImgPath("staffbackground.webp")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "color",
      }}
    >
      <div
        data-aos="fade-in"
        data-aos-duration="300"
        data-aos-anchor-placement="top"
        data-aos-easing="linear"
        className=""
      >
        <h2 className="text-center mb-5 text-5xl md:text-5xl lg:text-7xl font-bold text-white">
          TEAM RED LOGÍSTICA
        </h2>

        <div className="flex flex-wrap items-center gap-3 lg:gap-5 justify-center mt-14">


          {teamList.map((miembro, index) => (
            <div
              key={index}
              className={`w-full flex ${
                index % 2 != 0 ? "flex-row" : "flex-row-reverse"
              } flex-nowrap items-center justify-center text-center rounded-lg`}
            >
              <figure>
                <div className="avatar">
                  <div className="w-28 md:w-40 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                    <img
                      src={getImgPath(miembro.img)}
                      alt="Tony Martino. Equipo red logística"
                      loading="lazy"
                    />
                  </div>
                </div>
              </figure>
              <div className="items-center">
                <h3 className="text-white text-2xl mx-2">{miembro.nombre}</h3>
                <span className="badge badge-accent badge-sm p-2 mx-2">
                  Lic. En Planificación Logística
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
