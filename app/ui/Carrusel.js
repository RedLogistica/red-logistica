"use client";
import React, { useEffect } from "react";
import Link from "next/link";

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

export default function Carrusel({
  //Duración de cada imagen
  duracion = 4000,
  // Duración de la transición
  transicion = 2000,
  // Contenido del carrusel
  contenido = [
    {
      id: 1,
      titulo: "TITULO",
      subtitulo: "Subtitulo",
      accion: "Acción",
      accionHref: "/",
      imagen: "url(https://placehold.co/1200x400)",
      clases: "bg-teal-950 bg-opacity-50",
      clasesBtn: "",
      clasesTitulo: "",
      clasesSub: "text-neutral-content",
    },
  ],
}) {
  // Configuración Glide.js
  const glide = new Glide(".glide", {
    type: "carousel",
    perView: 1,
    autoplay: contenido.length > 1 ? duracion : false,
    animationDuration: transicion,
    dragThreshold: 330,
  });

  useEffect(() => {
    // Inicialización de Glide.js
    glide.mount();
  }, [null]);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {/* MAPEO DE CONTENIDO */}
          {contenido.map((item) => (
            <li className="glide__slide" key={item.id}>
              <div
                className="hero min-h-screen cursor-all-scroll"
                style={{
                  backgroundImage: item.imagen,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                }}
              >
                <div className={`hero-overlay ${item.clases}`}></div>
                <div className="hero-content text-center text-white">
                  <div className="max-w-screen-2xl">
                    <div>
                      <h1
                        className={`mb-5 text-5xl md:text-5xl lg:text-7xl font-bold ${item.clasesTitulo}`}
                      >
                        {item.titulo}
                      </h1>
                      <div className="mb-5 p-5">
                        <p
                          className={`${
                            item.titulo ? "text-xl md:text-2xl" : "text-4xl"
                          } ${item.clasesSub}`}
                        >
                          {item.subtitulo}
                        </p>
                      </div>
                      <Link
                        href={item.accionHref || ""}
                        className={`${item.clasesBtn || "hidden"}`}
                      >
                        {item.accion}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {contenido.length > 1
        ? `
      <div className="hidden md:block">
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            ◄
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
            >
            ►
          </button>
        </div>
      </div>

      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
      </div>
      `
        : ""}
    </div>
  );
}
