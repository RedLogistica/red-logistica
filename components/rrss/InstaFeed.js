"use client";
import Script from "next/script";
import { Suspense, useEffect } from "react";

export default function InstaFeed() {
  useEffect(() => {
    // Dynamically load the Elfsight script after component mount
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true; // Load script asynchronously
    script.setAttribute("data-use-service-core", "");
    document.body.appendChild(script);

    // Optionally, clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="glass bg-neutral bg-opacity-10 shadow-xl flex flex-col flex-nowrap items-center rounded-lg p-5">
      <h1 className="text-4xl md:text-5xl text-center py-10 text-neutral">Publicaciones</h1>
      <div className="">
        <Suspense fallback="Cargando..." >
          <div
            className="elfsight-app-fb05002b-8bcc-4850-b6ed-38e8f1fe37a5"
            data-elfsight-app-lazy
          />
        </Suspense>
      </div>
    </section>
  );
}
