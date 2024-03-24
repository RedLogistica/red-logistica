import Link from "next/link";

export default function notFound() {
  return (
    <section className="min-h-screen flex flex-col items-center">
      <div className="text-center py-40">
        <h2 className="text-9xl font-bold">404</h2>
        <p className="text-xl">Página no enocontrada</p>
        <Link href="/" className="btn btn-neutral mt-10">
          Volver a inicio
        </Link>
      </div>
    </section>
  );
}
