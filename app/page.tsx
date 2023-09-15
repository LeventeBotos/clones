import Cards from "./Cards";
import Cards3 from "./Cards3";
import ColsOf3 from "./ColsOf3";
import Grid from "./Grid";
import Hero from "./Hero";
import SlidingCards from "./SlidingCards";

export default function Home() {
  return (
    <main className="flex pb-5 bg-[#f5f5f5] flex-col gap-5 items-center ">
      <Hero />
      <Cards />
      <SlidingCards />
      <ColsOf3 />
      <Cards3 />
      <Grid />
    </main>
  );
}
