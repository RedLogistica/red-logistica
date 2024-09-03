import Link from "next/link"
export default function Hero() {
    return (
        <section className="h-screen relative w-full index-hero-img">
            <div className="absolute inset-0 z-[0]  from-blue-300 to-emerald-400/75 bg-gradient-to-r w-full"></div>
            <article className="relative flex flex-col items-center justify-center h-full px-5 w-full max-w-5xl mx-auto">
                <header className="w-full md:text-center  mx-auto">
                    <h1 className="main-title">UN UNIVERSO LOGÍSTICO. . .</h1>
                    <p className="my-5 md:max-w-4xl md:text-center mx-auto leading-none text-lg opacity-80">
                        Sumérgete en nuestra radio en vivo y eventos exclusivos, diseñados para estudiantes, profesionales y empresas. 
                        En Red Logística, promovemos las mejores prácticas y la eficiencia en logística para impulsar tu desarrollo y crecimiento. 
                        Únete a nosotros y transforma tu comprensión del sector.
                    </p>
                </header>
                <div className="mt-8 w-full md:justify-center flex flex-row  gap-2">
                    <Link href="/media" className='btn btn-ghost bg-emerald-400 shadow-lg'>Radio/Streaming</Link>
                    <Link href="/proyecto" className='btn btn-ghost bg-emerald-300 shadow-lg'>Sobre Red Logística</Link>
                </div>
            </article>
        </section>
    )
}