import TopBanner from "@/app/sections/TopBanner";
import Info from "./sections/Info";
import Description from "./sections/Description";
import Sponsors from "@/components/miscellaneous/Sponsors";

export default function Home() {
  return (
    <main
      data-aos="fade-in"
      data-aos-duration="500"
      data-aos-anchor-placement="center"
      data-aos-easing="linear"
    >
      <TopBanner />
      <Info />
      <Description/>
      <Sponsors />
    </main>
  );
}
