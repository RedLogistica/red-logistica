import Link from "next/link"

export default function MobileNav() {
    return (


        <div className="sidenav-wrapper" onClick={closeNav}>
            <aside
                className={`sidenav bg-neutral text-neutral-content min-h-screen max-w-xs ${isAsideOpen ? "open block" : "hidden"
                    }`} // Apply open class dynamically
            >
                <div>
                    <ul className="menu menu-vertical text-lg">
                        <li>
                            <Link onClick={toggleNav} href="/">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link onClick={toggleNav} href="/media">
                                Medios
                            </Link>
                        </li>
                        <li>
                            <Link onClick={toggleNav} href="/team">
                                Nuestro Team
                            </Link>
                        </li>
                        <li>
                            <Link onClick={toggleNav} href="/eventos">
                                Eventos
                            </Link>
                        </li>
                    </ul>
                    <Link
                        href="https://www.instagram.com/redlogistica23/"
                        target="_blank"
                        className="btn btn-ghost text-2xl text-pink-700"
                        aria-label="Ir a perfil de instagram de Red Logística"
                    >
                        <IoLogoInstagram />{" "}
                        <span className="text-sm text-slate-400">Instagram</span>
                    </Link>
                </div>
            </aside>
        </div>

    )
}