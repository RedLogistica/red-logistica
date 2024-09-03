import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center">
            <div className="text-center py-40">
                <h2 className="text-9xl font-bold">404</h2>
                <p className="text-base">Página no enocontrada</p>
                <p className="text-xl max-w-lg mx-auto my-2">
                    Ups {":("}, parece que la ruta hacia esta página tuvo un pequeño desvío. ¡Vamos a reenviar el pedido! Haz clic abajo para volver a casa."
                </p>
                <Link href="/" className="btn btn-ghost bg-emerald-500 mt-5">
                    Volver a inicio
                </Link>
            </div>
        </section>
    );
}
