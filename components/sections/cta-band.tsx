import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { ctaBand } from "@/content/site";

export function CtaBand() {
  return (
    <section className="bg-navy-deep py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-medium text-text-invert leading-tight">
            {ctaBand.headline}
          </h2>
          <p className="mt-4 text-muted-slate text-lg">{ctaBand.subtext}</p>
          <Link
            href={ctaBand.cta.href}
            className={buttonVariants({
              size: "lg",
              className: "mt-8 bg-brand hover:bg-brand-light text-text-invert",
            })}
          >
            {ctaBand.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
