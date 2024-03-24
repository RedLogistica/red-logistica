import Link from "next/link";
import { IoLogoYoutube, IoLogoTwitch } from "react-icons/io5";
export default function RadioPlayer() {
  return (
    <article className="w-full items-center justify-center flex my-3 py-3">
      <div
        className="flex flex-col w-full min-h-[calc(100vh/5)] md:min-h-[calc(100vh/3)] rounded-lg p-4 items-center align-middle"
      >
        <div className="items-center">
          <h2 className="card-title text-4xl text-neutral text-center">
            Radio Conurbania Parque
          </h2>
        </div>

        <audio
            controls="controls"
            preload="none"
            className="max-w-5xl md:max-w-7xl p-2 rounded-2xl shadow-lg bg-transparent my-3"
            data-theme="dark"
          >
            <source
              src="https://stream.zeno.fm/9tbnnkpcu68uv"
              type="audio/mpeg"
            />
            Tu navegador no soporta el elemento de audio.
          </audio>
   
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link
            href="https://www.youtube.com/embed/videoseries?list=PLVt8iBuEaBKoaTNbW76uZLjgz_mNPAdgX"
            target="_blank"
            className="cursor-pointer w-full"
          >
            <div className="flex flex-nowrap w-full text-center justify-center items-center h-full p-5">
              <div className="p-3 bg-red-400 rounded-md shadow text-center justify-center flex flex-col items-center w-full">
                <IoLogoYoutube className="text-5xl text-white" />
                <p className="text-2xl text-white">YouTube</p>
                <p className="text-black">
                  Mirá el streaming o reviví nuestros programas en el canal de
                  Conurbania de YouTube
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="https://www.twitch.tv/radioconurbania"
            className="cursor-pointer w-full"
            target="_blank"
          >
            <div className="flex flex-nowrap w-full text-center justify-center items-center h-full  p-5">
              <div className="p-3 bg-cyan-400 rounded-md shadow text-center justify-center flex flex-col items-center w-full">
                <IoLogoTwitch className="text-5xl text-white" />
                <p className="text-2xl text-white">Twitch</p>
                <p className="text-black">
                  Mirá el straming por el canal de Conurbania de Twitch
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
