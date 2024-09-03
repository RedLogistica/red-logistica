import SponsorsGrid from "@/components/miscellaneous/SponsorsGrid";
import Hero from "./index/Hero";
import TheProject from "./index/TheProject";
import TheShow from "./index/TheShow";

export default function Home() {
  return (
    <main>
      <Hero />
      <TheProject />
      <TheShow />
      <SponsorsGrid index/>
    </main>
  );
}
