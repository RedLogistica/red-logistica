import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center">
            <div className="text-center py-40">
                <h2 className="text-9xl font-bold">404 </h2>
                <p className="text-base">Carga no encontrada {":("}</p>
                <p className="md:text-xl max-w-lg mx-auto my-2 p-5">
                    Ups... Algo salió mal y no pudimos encontrar lo que buscabas. Tal vez la dirección estaba mal escrita {"🫤"}. 
                </p>
                <Link href="/" className="btn btn-ghost bg-emerald-500 mt-5">
                    Volver a inicio
                </Link>
            </div>
        </section>
    );
}
