import { sponsorsMetadata } from "../utils/metadata/metaSponsors";
import Section from "@/components/SectionLayout";

export const metadata = { ...sponsorsMetadata }

export default function Sponsors() {

    const headerContent = {
        title: "RED LOGÍSTICA",
        subtitle: `
        Un Espacio Dedicado a la divulgación, el crecimiento y la innovación en logística
        `
    }

    const sectionContent = [
        {
            title: "¿Qué es Red Logística?",
            text: `
                Red Logística es más que un proyecto; es un punto de encuentro para la divulgación, el debate y la promoción del mundo logístico. 
                A través de nuestra radio y streaming, ofrecemos un espacio dedicado a explorar y compartir innovaciones, novedades y buenas prácticas en logística. 
                Buscamos ser el recurso principal para aquellos interesados en el sector, desde profesionales y emprendedores hasta estudiantes y empresas.
            `
        },
        {
            title: "Nuestra Misión",
            text: `
                En Red Logística, nuestro objetivo es poner en la mesa temas cruciales para el desarrollo de la logística en Argentina y contribuir a su crecimiento. 
                Promovemos el conocimiento y la excelencia en la práctica logística, y ofrecemos un espacio para la discusión abierta sobre los desafíos y oportunidades en el sector. 
                Además, facilitamos el acceso a talleres y asesoramiento especializado, adaptados a las necesidades de nuestros oyentes y seguidores.
            `
        },
        {
            title: "¿Qué Queremos Lograr?",
            text: `
                Queremos apoyar el avance de la logística mediante la difusión de información relevante y la generación de un diálogo constructivo. 
                Buscamos fomentar la adopción de mejores prácticas y la integración de nuevas tecnologías, ayudando a empresas y profesionales a alcanzar sus objetivos con mayor eficacia. 
                En Red Logística, estamos comprometidos a ser un motor de cambio y un recurso esencial para el crecimiento del sector logístico.
            `
        }
    ];


    return (
        <Section className="" id="sponsors">
            <article className="py-5 px-3 md:px-0 lg:py-16">

                <header className="lg:text-center">
                    <h2 className="main-title">RED <span className="text-emerald-500">LOGÍSTICA</span></h2>
                    <div className=""><p className="mt-4 max-w-5xl mx-auto">{headerContent.subtitle}</p></div>
                </header>

                <section
                    className="mt-8 grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                    {sectionContent.map((pagraph, index) => (
                        <div className="flex items-start gap-4" key={`id-${index}`}>
                            <div>
                                <h2 className="content-subtitle">{pagraph.title}</h2>
                                <p className="mt-1 text-content">{pagraph.text}</p>
                            </div>
                        </div>
                    ))}
                </section>

            </article>
        </Section>
    )
}