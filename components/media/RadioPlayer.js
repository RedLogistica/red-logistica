import Link from "next/link";
import { IoLogoYoutube, IoLogoTwitch, IoMic } from "react-icons/io5";
export default function RadioPlayer() {
  return (
    <article className="w-full items-center justify-center flex my-3 py-3">
      <div className="flex flex-col w-full rounded-lg items-center align-middle">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          <div className="items-center min-h-60 md:h-96 w-full">
            <div className="bg-black w-full h-full rounded-md p-3 py-10 flex flex-col flex-nowrap items-center justify-center text-center">
              <IoMic className="text-4xl text-white" />
              <h2 className="card-title text-2xl text-neutral-content text-center">
                Radio Conurbania Parque
              </h2>
              <audio
                controls="controls"
                preload="none"
                className="p-2 rounded-2xl shadow-lg w-full bg-black"
                data-theme="dark"
              >
                <source
                  src="https://stream.zeno.fm/9tbnnkpcu68uv"
                  type="audio/mpeg"
                />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          </div>

          <Link
            href="https://www.youtube.com/embed/videoseries?list=PLVt8iBuEaBKoaTNbW76uZLjgz_mNPAdgX"
            target="_blank"
            className="cursor-pointer w-full"
          >
            <div className="flex flex-nowrap w-full text-center justify-center items-center">
              <div className="p-3 bg-red-700 rounded-md shadow text-center justify-center flex flex-col items-center w-full py-10 min-h-60 md:h-96">
                <IoLogoYoutube className="text-5xl text-white" />
                <p className="text-2xl text-white">YouTube</p>
                <p className="text-neutral-content">
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

              <div className="p-3 bg-emerald-400 rounded-md shadow text-center justify-center flex flex-col items-center w-full py-10 min-h-60 md:h-96">
                <IoLogoTwitch className="text-5xl text-black" />
                <p className="text-2xl">Twitch</p>
                <p className="">
                  Mirá el straming por el canal de Conurbania de Twitch
                </p>
              </div>

          </Link>
        </div>
      </div>
    </article>
  );
}
