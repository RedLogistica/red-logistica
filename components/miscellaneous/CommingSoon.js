import Link from "next/link"

export default function CommingSoon({ page = "" }) {
    return (
        <section className="min-h-screen">
            <div class="items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24">
                <div class="justify-center w-full text-center lg:p-10 max-auto">
                    <div class="justify-center w-full mx-auto">
                        <hgroup class="text-4xl md:text-6xl lg:text-8xl font-bold">
                            <h1 className="flex flex-col ">
                                <span className="text-emerald-600">
                                    - {page} -
                                </span>
                                PROXIMAMENTE
                            </h1>

                        </hgroup>
                        <p class="max-w-xl mx-auto mt-4 text-lg tracking-tight">
                            Algo grande está en proceso de carga.
                            Nuestros nuevos servicios están a punto de zarpar y pronto estarán en tus manos.
                            ¡Permanece atento, que el conteo regresivo ya comenzó!
                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto mt-10 lg:flex-row">
                        <Link href="/" class="btn btn-ghost bg-emerald-400">
                            Ir a inicio
                        </Link>
                        <Link href="" class="inline-flex items-center justify-center text-sm font-semibold text-emerald-600 duration-200 link link-hover focus:outline-none focus-visible:outline-gray-600">
                            Contactar &nbsp; →
                        </Link> </div>
                </div>
            </div>
        </section>
    )
}