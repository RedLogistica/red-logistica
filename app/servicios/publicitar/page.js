import ContactWhatsappBtn from "@/components/button/ContactWhatsappBtn";

export default function Publicidad() {
    return (
        <section className="min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img
                            alt="imagen"
                            src="/red-logistica/imgs/project.webp"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="content-title" style={{ textAlign: "left" }}>LLEGA AL <span className="text-emerald-500">PÚBLICO</span> INDICADO</h2>

                        <p className="mt-4 text-gray-600">
                            En Red Logística, conectamos a las empresas con un público especializado en logística y negocios. 
                            Nuestro programa ofrece un espacio ideal para quienes buscan posicionar sus servicios o productos en el sector. 
                            Sin promesas exageradas, simplemente te brindamos la oportunidad de estar presente donde tu mensaje 
                            será escuchado por quienes realmente importan.
                        </p>

                        <ContactWhatsappBtn
                            href="/"
                            className="mt-8 btn btn-ghost bg-emerald-500"
                            msg="Hola,  me contacto desde la página porque me interesa publicitar mi negocio en su programa."
                        >
                            Me interesa
                        </ContactWhatsappBtn>
                    </div>
                </div>
            </div>
        </section>
    )
}