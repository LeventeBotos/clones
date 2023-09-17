import Cards from "./Cards";
import Cards3 from "./Cards3";
import ColsOf3 from "./ColsOf3";
import Faq from "./Faq";
import Grid from "./Grid";
import Hero from "./Hero";
import Pricing from "./Pricing";
import SlidingCards from "./SlidingCards";
import Why from "./Why";

export default function Home() {
  return (
    <main className="flex pb-5 bg-[#f5f5f5] flex-col gap-5 items-center ">
      <Hero />
      <Cards />
      <SlidingCards />
      <ColsOf3 />
      <Cards3 />
      <Grid />
      <Why />
      <Pricing />
      <Faq />
    </main>
  );
}
