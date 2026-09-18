import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="bg-navy-deep pt-40 pb-28 md:pt-52 md:pb-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
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
            className={buttonVariants({
              size: "lg",
              className: "mt-10 bg-brand hover:bg-brand-light text-text-invert",
            })}
          >
            {hero.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
