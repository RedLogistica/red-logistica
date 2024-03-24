import React from "react";

function IFrameComponent({ iframeClassName = "", videoURL = "" }) {
  return (
    <iframe
      title="YouTube"
      className={iframeClassName}
      src="https://www.youtube.com/embed/videoseries?list=PLVt8iBuEaBKoaTNbW76uZLjgz_mNPAdgX"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      width="100%"
      height="513"
      loading="lazy"
    />
  );
}

export default function YoutubePlayer() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-center font-bold text-xl md:text-2xl">YouTube</h2>
      <p className="text-center leading-none text-lg w-full my-3">
        Mirá nuestra transmisión en vivo o reviví nuestros programas anteriores
        en el canal de youtube de Conurbania Parque
      </p>
      {/*       <IFrameComponent
        iframeClassName="rounded-xl w-full h-[calc(100vh/4)] md:h-[calc(100vh/2)]"
      /> */}
      <div className="lg:w-[38rem] h-[calc(100vh/5)]  items-center justify-center flex my-3 py-3">
        <div className="flex flex-col w-full h-full bg-red-500 bg-opacity-80 shadow-xl rounded-lg p-4 items-center align-middle">
          <p>Ver Programas</p>
        </div>
      </div>
    </div>
  );
}
