import Link from "next/link";
import Logo from "@/app/ui/Logo";
import {IoLogoInstagram} from "react-icons/io5"

export default function Footer() {
  return (
    <footer className="footer p-10 text-neutral-content bg-black">
      <aside>
        <Logo />
        <p>Red Logística | Radio y Novedades</p>
        <p>© 2024 Red Logística</p>
        <p><Link href="https://www.esparxdigital.com" target="_blank" className="text-xs">Design By Juan Esparza | EspaX Digital</Link></p>
      </aside>
      <nav>
        <h2 className="footer-title">Social</h2>
        <div className="grid grid-flow-col gap-4">
          <Link
            href={"https://www.instagram.com/redlogistica23/"}
            target="_blank"
            className="btn btn-ghost text-2xl text-pink-100"
            aria-label="Ir a perfil de instagram de Red Logística"
          >
            <IoLogoInstagram/>
          </Link>
        </div>
      </nav>
    </footer>
  );
}
