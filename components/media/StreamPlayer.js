import RadioPlayer from "./RadioPlayer";
import InstaFeed from "../rrss/InstaFeed"

export default function StreamPlayer() {
  return (
    <div className="items-center w-full  mt-10 flex flex-col flex-nowrap gap-5 my-3 py-3">
      <RadioPlayer />
      <InstaFeed />
    </div>
  );
}
