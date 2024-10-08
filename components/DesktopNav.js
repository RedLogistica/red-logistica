"use client";
import Link from "next/link";
import Logo from "@/app/ui/Logo";
import { IoLogoInstagram, IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function DesktopNav({ toggleAside, isOpen }) {

  useEffect(() => {
    function handleClick() {
      dropdownHandler();
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  function dropdownHandler() {
    const dropdowns = document.querySelectorAll("details")
    dropdowns.forEach((dropdown) => dropdown.removeAttribute("open"))
  }
  return (
    <>
      <div className="bg-black px-4 py-3 text-white z-50">
        <p className="text-center text-xs font-medium opacity-85">
          Mira nuestro programa todos los sábados de 14 a 15:30. ¡No te lo pierdas!{" "}
          <a href="/media" className="inline-block underline">Ver más</a>
        </p>
      </div>
      <header
        className="sticky w-full top-0 bg-base-100  z-50 shadow-2xl">
        <nav className="navbar px-5 md:px-14 py-4 nav">
          <section className="navbar-start">
            <Link href="/">
              <Logo medida={80} clases={"rounded-full"} />
            </Link>
          </section>
          <section className="navbar-center hidden lg:block">
            <ul className="menu menu-horizontal text-lg">
              <li><Link href="/">Inicio</Link></li>
              <li className="">
                <details className="dropwdown redlogistica">
                  <summary className=" " onClick={dropdownHandler}>Red Logística</summary>
                  <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/proyecto" className="nav-link" onClick={dropdownHandler}>Sobre el proyecto</Link></li>
                    <li><Link href="/team" className="nav-link" onClick={dropdownHandler}>Nuestro Equipo</Link></li>
                    <li><Link href="/sponsors" className="nav-link active" onClick={dropdownHandler}>Sé Nuestro Sponsor</Link></li>
                  </ul>
                </details>
              </li>
              <li className="">
                <details className="dropdown">
                  <summary className="cursor-pointer novedades" onClick={dropdownHandler}>Novedades</summary>
                  <ul
                    className="dropdown-content z-[1] menu  bg-base-200 rounded-box lg:min-w-lg p-2 shadow w-60">
                    <li><Link href={"/novedades"} className="nav-link" onClick={dropdownHandler}>Eventos</Link></li>
                    <li><Link href={"/novedades"} className="nav-link" onClick={dropdownHandler}>Noticias</Link></li>
                  </ul>
                </details>
              </li>
              <li className="">
                <details className="dropdown">
                  <summary className="cursor-pointer servicios">Servicios</summary>
                  <ul
                    className="dropdown-content z-[1] menu xl:menu-horizontal bg-base-200 rounded-box lg:min-w-lg p-2 shadow w-60">
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
              <li className=""><Link href="/media" className="bg-emerald-500 text-white">Radio/Streaming</Link></li>
            </ul>
          </section>
          <section className="navbar-end">
            <Link
              href="https://www.instagram.com/redlogistica23/"
              target="_blank"
              className="btn btn-ghost text-2xl text-pink-700 hidden lg:inline-flex"
              aria-label="Ir a perfil de instagram de Red Logística"
            >
              <IoLogoInstagram />
            </Link>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="menu-toggle"
                className="btn btn-circle swap swap-rotate"
              >
                {" "}
                {/* Corrected ID usage */}
                <input
                  type="checkbox"
                  id="menu-toggle"
                  onChange={toggleAside}
                />
                {isOpen ? (
                  <IoClose className={`fill-current text-2xl`} />
                )
                : (
                    <IoMenu className={`fill-current text-2xl `} />
                  )}
              </label>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
}
