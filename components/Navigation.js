"use client";
import Link from "next/link";
import Logo from "@/app/ui/Logo";
import { IoLogoInstagram, IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const toggleNav = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  const closeNav = () => {
    setIsAsideOpen(false);
  };

  return (
    <section className="sticky w-full top-0 z-[9999999999]">
      <header className="navbar px-14 py-3 bg-teal-50 bg-opacity-100 nav">
        <div className="navbar-start">
          <Logo medida={80} clases={"rounded-full"} />
        </div>
        <nav className="navbar-center hidden lg:block">
          <ul className="menu menu-horizontal">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/media">Medios</Link>
            </li>
            <li>
              <Link href="/team">Nuestro Team</Link>
            </li>
            <li>
              <Link href="/eventos">Eventos</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-end">
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
                checked={isAsideOpen}
                onChange={toggleNav}
              />
              <IoMenu className="swap-off fill-current text-2xl" />
              <IoClose className="swap-on fill-current text-2xl" />
            </label>
          </div>
        </div>
      </header>
      <div className="sidenav-wrapper" onClick={closeNav}>
        <aside
          className={`sidenav bg-cyan-50 min-h-screen max-w-xs ${
            isAsideOpen ? "open block" : "hidden"
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
              <IoLogoInstagram /> <span className="text-sm text-slate-400">Instagram</span>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
