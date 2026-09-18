import { Hero } from "@/components/sections/hero";
import { Approach } from "@/components/sections/approach";
import { Services } from "@/components/sections/services";
import { CtaBand } from "@/components/sections/cta-band";
import { WhyNordiq } from "@/components/sections/why-nordiq";
import { Ticker } from "@/components/sections/ticker";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Approach />
      <Services />
      <WhyNordiq />
      <CtaBand />
    </>
  );
}
