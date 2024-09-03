import SponsorsGrid from "@/components/miscellaneous/SponsorsGrid";
import { sponsorsMetadata } from "../utils/metadata/metaSponsors";
import Section from "@/components/SectionLayout";

export const metadata = { ...sponsorsMetadata }

export default function Sponsors() {
    return (
        <Section className="" id="sponsors">
            <article className="py-5 px-3 md:px-0 lg:py-16">
                <header className="lg:text-center">
                    <h2 className="main-title">SÉ NUESTRO <span className="text-emerald-500">SPONSOR</span></h2>
                    <div className="">
                        <p className="mt-4 text-content">
                            Conviértete en sponsor del programa de Red Logística y conecta con un público apasionado por la logística.
                            Cada sábado, llevamos las últimas tendencias y noticias del sector a nuestros oyentes.
                            Tu marca puede ser parte de este viaje.
                        </p>
                    </div>
                </header>

                <section
                    className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
                    <div className="flex items-start gap-4">
                        <div>
                            <h2 className="text-lg font-bold">Tu marca en el corazón de la logística</h2>
                            <p className="mt-1 text-sm opacity-80">
                                El lugar ideal para destacar tu negocio.
                                Coloca tu empresa en la mira de empresarios, emprendedores, expertos y profesionales de la logística.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h2 className="text-lg font-bold">Date a conocer con Red Logística</h2>
                            <p className="mt-1 text-sm opacity-80">
                                Cada sábado, Red Logística conecta con quienes hacen que la logística funcione.
                                Tu empresa puede estar en el centro de esta conversación.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h2 className="text-lg font-bold">Fortalece tu posicionamiento.</h2>
                            <p className="mt-1 text-sm opacity-80">
                                Demuestra el compromiso de tu empresa con el sector logístico.
                                Posiciona tu marca como experta en soluciones.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div>
                            <h2 className="text-lg font-bold">Contribuye a esta bella disciplina</h2>
                            <p className="mt-1 text-sm opacity-80">
                                Únete a Red Logística como patrocinador y contribuye a la innovación, mejoras y crecimiento de la logística en Argentina.
                            </p>
                        </div>
                    </div>
                </section>
            </article>

            <SponsorsGrid />

        </Section>
    )
}