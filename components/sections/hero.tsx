import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-deep">
      {/* Shared wire/hex texture, dimmed — same backdrop as About and Services */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
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

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-medium leading-tight text-text-invert">
            {hero.headline[0]}
            <br />
            <span className="text-brand-light">{hero.headline[1]}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-lg text-muted-slate max-w-2xl mx-auto">
            {hero.subtext}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href={hero.cta.href}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-medium text-text-invert shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-light hover:shadow-xl hover:shadow-brand-light/40 hover:scale-[1.03]"
          >
            <span>{hero.cta.label}</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
