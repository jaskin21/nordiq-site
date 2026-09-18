import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ctaBand } from "@/content/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-28 md:py-36">
      {/* Shared wire/hex texture, very dimmed — ties this band to the rest of the site */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/textures/network-texture.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[80%_30%] opacity-25"
        />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/60 to-navy-deep" />
      </div>

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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link
              href={ctaBand.cta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-medium text-text-invert shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-light hover:shadow-xl hover:shadow-brand-light/40 hover:scale-[1.03]"
            >
              <span>{ctaBand.cta.label}</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-base font-medium text-text-invert/80 transition-colors duration-300 hover:text-text-invert"
            >
              <span>Contact us</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
