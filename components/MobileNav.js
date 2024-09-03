"use client"

import Link from "next/link"
import { useEffect, useState } from "react";

export default function MobileNav() {

    useEffect(() => (
        document.addEventListener("click", () => {
            dropdownMobileHandler();
            return (
                document.removeEventListener("click", () => null)
            )
        })
    ), [])

    function closeNav() {
        const nav = document.getElementById("mobile-nav");
        nav.classList.remove("open")
    };

    function dropdownMobileHandler() {
        const dropdowns = document.querySelectorAll("details")
        dropdowns.forEach((dropdown) => {
            dropdown.removeAttribute("open")
            closeNav();
        })

    }
    return (

        <aside
            id="mobile-nav" className={`w-[85%] fixed top-28 py-20 right-0 z-[49] sidenav bg-emerald-500 glass bg-opacity-95 text-black min-h-screen max-w-xs  hidden`} // Apply open class dynamically
        >
            <section className="px-5">
                <ul className="menu menu-vertical text-lg menu-lg ">
                    <li><Link href="/">Inicio</Link></li>
                    <li className="">
                        <details className="dropwdown redlogistica">
                            <summary className=" ">Red Logística</summary>
                            <ul className="dropdown-content z-[1] menu menu-vertical shadow bg-emerald-400 rounded-box w-full">
                                <li><Link href="/proyecto" className="nav-link" onClick={dropdownMobileHandler}>Sobre el proyecto</Link></li>
                                <li><Link href="/team" className="nav-link" onClick={dropdownMobileHandler}>Nuestro Equipo</Link></li>
                                <li><Link href="/sponsors" className="nav-link " onClick={dropdownMobileHandler}>Sé Nuestro Sponsor</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li className="">
                        <details className="dropdown">
                            <summary className="cursor-pointer novedades" >Novedades</summary>
                            <ul
                                className="dropdown-content z-[1] menu  bg-emerald-400 rounded-box lg:min-w-lg p-2 shadow w-60">
                                <li><Link href={"/eventos"} className="nav-link" onClick={dropdownMobileHandler}>Eventos</Link></li>
                                <li><Link href={"/team"} className="nav-link" onClick={dropdownMobileHandler}>Noticias</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li className="">
                        <details className="dropdown">
                            <summary className="cursor-pointer servicios">Servicios</summary>
                            <ul
                                className="dropdown-content z-[1] menu xl:menu-horizontal bg-emerald-400 rounded-box lg:min-w-lg p-2 shadow w-60">
                                <li>
                                    <h2 className="menu-title">Profesionales</h2>
                                    <ul>
                                        <li><Link href={"/servicios/talleres/"} className="nav-link">Talleres</Link></li>
                                        <li><Link href={"/servicios/asesoramiento/"} className="nav-link">Asesoramiento</Link></li>
                                        <li><Link href={"/servicios/capacitaciones/"} className="nav-link">Capacitaciones</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <h2 className="menu-title">Multimedia</h2>
                                    <ul>
                                        <li><Link href={"/servicios/publicitar/"} className="nav-link">Publicidad en el programa</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li className=""><Link href="/media" className="">Radio/Streaming</Link></li>
                </ul>
                <Link
                    href="https://www.instagram.com/redlogistica23/"
                    target="_blank"
                    className="btn btn-ghost text-2xl text-pink-700"
                    aria-label="Ir a perfil de instagram de Red Logística"
                >
                    <span className="text-sm text-slate-400">Instagram</span>
                </Link>
            </section>
        </aside>
    )
}
