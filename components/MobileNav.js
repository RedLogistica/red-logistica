"use client"

import Link from "next/link"
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import ContactWhatsappBtn from "./button/ContactWhatsappBtn";

export default function MobileNav({ isOpen, closeAside }) {

    function dropdownMobileHandler() {
        const dropdowns = document.querySelectorAll(".mobileDetails")
        dropdowns.forEach((dropdown) => {
            dropdown.removeAttribute("open")
            closeAside();
        })

    }
    return (

        <aside
            id="mobile-nav"
            className={`
                  
                ${isOpen ? "open" : ""}`
            }
        >
            <section className="px-5">
                <ul className="menu menu-vertical text-lg menu-lg ">
                    <li><Link href="/">Inicio</Link></li>
                    <li className="">
                        <details className="dropdown mobileDetails">
                            <summary className=" ">Red Logística</summary>
                            <ul className="dropdown-content z-[1] menu menu-vertical shadow bg-base-200 rounded-box w-full">
                                <li><Link href="/proyecto" className="nav-link" onClick={dropdownMobileHandler}>Sobre el proyecto</Link></li>
                                <li><Link href="/team" className="nav-link" onClick={dropdownMobileHandler}>Nuestro Equipo</Link></li>
                                <li><Link href="/sponsors" className="nav-link " onClick={dropdownMobileHandler}>Sé Nuestro Sponsor</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li className="">
                        <details className="dropdown mobileDetails">
                            <summary className="cursor-pointer novedades" >Novedades</summary>
                            <ul
                                className="dropdown-content z-[1] menu  bg-base-200 rounded-box lg:min-w-lg p-2 shadow w-60">
                                <li><Link href={"/novedades"} className="nav-link" onClick={dropdownMobileHandler}>Eventos</Link></li>
                                <li><Link href={"/novedades"} className="nav-link" onClick={dropdownMobileHandler}>Noticias</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li className="">
                        <details className="dropdown mobileDetails">
                            <summary className="cursor-pointer servicios">Servicios</summary>
                            <ul
                                className="dropdown-content z-[1] menu xl:menu-horizontal bg-base-200 rounded-box lg:min-w-lg p-2 shadow w-60">
                                <li>
                                    <h2 className="menu-title">Profesionales</h2>
                                    <ul>
                                        <li><Link href={"/servicios/talleres/"} className="nav-link" onClick={dropdownMobileHandler}>Talleres</Link></li>
                                        <li><Link href={"/servicios/asesoramiento/"} className="nav-link" onClick={dropdownMobileHandler}>Asesoramiento</Link></li>
                                        <li><Link href={"/servicios/capacitaciones/"} className="nav-link" onClick={dropdownMobileHandler}>Capacitaciones</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <h2 className="menu-title">Multimedia</h2>
                                    <ul>
                                        <li><Link href={"/servicios/publicitar/"} className="nav-link" onClick={dropdownMobileHandler}>Publicidad en el programa</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li className=""><Link href="/media" className="" onClick={dropdownMobileHandler}>Radio/Streaming</Link></li>
                </ul>
                <div className="divider"></div>
                <section className="w-full text-center mt-16 flex flex-col gap-5 px-8">
                    <Link
                        href="https://www.instagram.com/redlogistica23/"
                        target="_blank"
                        className="btn btn-sm btn-ghost bg-rose-300 text-2xl text-white shadow"
                        aria-label="Ir a perfil de instagram de Red Logística"
                    >
                        <IoLogoInstagram/>
                        <span className="text-sm  text-slate-50">
                            Instagram
                        </span>
                    </Link>
                    <ContactWhatsappBtn  className={"w-full btn btn-sm btn-ghost bg-emerald-500 shadow text-white"}>
                        <IoLogoWhatsapp className="text-2xl"/>
                        Contactar
                    </ContactWhatsappBtn>
                </section>
            </section>
        </aside>
    )
}
