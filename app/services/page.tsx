import { Reveal } from "@/components/motion/reveal";
import { Services } from "@/components/sections/services";
import { WorkingWith } from "@/components/sections/working-with";
import { CtaBand } from "@/components/sections/cta-band";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-deep pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs text-muted-slate tracking-wider">
              Services
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-medium text-text-invert leading-tight">
              We investigate first. We recommend second.
            </h1>
            <p className="mt-4 text-muted-slate text-lg max-w-xl mx-auto">
              NordIQ doesn't sell a fixed package. Every engagement starts with
              understanding where time, quality or capacity is actually being
              lost — and only then is the right path decided.
            </p>
          </Reveal>
        </div>
      </section>

      <Services />
      <WorkingWith />
      <CtaBand />
    </>
  );
}
