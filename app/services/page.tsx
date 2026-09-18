import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Services } from "@/components/sections/services";
import { WorkingWith } from "@/components/sections/working-with";
import { CtaBand } from "@/components/sections/cta-band";

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-deep pt-40 pb-24 md:pt-48 md:pb-32">
        {/* Shared wire/hex texture, dimmed — same backdrop as Home and About */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/textures/network-texture.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[8%_20%] opacity-60"
          />
          <div className="absolute inset-0 bg-navy-deep/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/10 via-navy-deep/40 to-navy-deep" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
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
