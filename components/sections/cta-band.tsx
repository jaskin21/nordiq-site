import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ctaBand } from "@/content/site";

export function CtaBand() {
  return (
    <section className="relative bg-navy-deep py-28 md:py-36">
      {/* Network/plexus background, pinned to the viewport so it stays put while content scrolls over it */}
      <div className="absolute inset-0 [clip-path:inset(0)]" aria-hidden="true">
        <div
          className="fixed inset-x-0 top-0 h-[100lvh] bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url(/images/network-plexus.jpg)" }}
        />
      </div>
      <div className="absolute inset-0 bg-navy-deep/40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-deep/20 via-navy-deep/50 to-navy-deep"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-light/60" />
            <span className="font-mono text-xs text-muted-slate tracking-wider">
              A first step
            </span>
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-medium text-text-invert leading-[1.05] tracking-tight">
            {ctaBand.headline}
          </h2>
          <p className="mt-6 text-muted-slate text-lg max-w-xl mx-auto">
            {ctaBand.subtext}
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href={ctaBand.cta.href}
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-8 py-4 text-base font-medium text-text-invert shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-light hover:shadow-xl hover:shadow-brand-light/40 hover:scale-[1.03]"
            >
              <span>{ctaBand.cta.label}</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
