import Link from "next/link"

export default function TheProject() {
    return (
        <section className="py-16 px-1">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:h-screen md:grid-cols-2">
                    <div className="relative z-10 lg:py-16 px-2">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="https://images.pexels.com/photos/7203788/pexels-photo-7203788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="absolute object-fill inset-0 h-full w-full  rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="relative flex text-left items-center bg-accent/30 text-base-content md:rounded-e-lg px-4">
                        <span
                            className="hidden md:absolute md:inset-y-0 md:-start-16 md:block md:w-16 bg-accent/30  md:rounded-s-lg"
                        ></span>

                        <div className="p-2 py-16  max-w-lg">
                            <h2 className="content-title " style={{textAlign:"left"}}>
                                UN PROYECTO, <span className="text-emerald-500">UNA VISIÓN</span>
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Buscamos promover el conocimiento logístico en la sociedad,
                                fomentar prácticas óptimas en las empresas y apoyar el crecimiento profesional de los expertos en logística.
                            </p>

                            <Link
                                href="/proyecto"
                                className="mt-8  btn btn-ghost bg-emerald-400"
                            >
                                Más acerca del proyecto
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}