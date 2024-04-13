import RadioPlayer from "./RadioPlayer";
import InstaFeed from "../rrss/InstaFeed"

export default function StreamPlayer() {
  return (
    <div className="items-center w-full flex flex-col flex-nowrap">
      <RadioPlayer />
      <InstaFeed />
    </div>
  );
}
