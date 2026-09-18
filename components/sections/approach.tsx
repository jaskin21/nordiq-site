import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { approach } from "@/content/site";

export function Approach() {
  return (
    <section className="bg-surface py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="font-mono text-xs text-muted-slate tracking-wider">
              {approach.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-medium text-navy-deep leading-tight">
              {approach.headline}
            </h2>
            <p className="mt-4 text-muted-slate text-lg">{approach.subtext}</p>
            <Link
              href={approach.cta.href}
              className={buttonVariants({
                className:
                  "mt-6 bg-brand hover:bg-brand-light text-text-invert",
              })}
            >
              {approach.cta.label}
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {approach.phases.map((phase, i) => (
            <Reveal key={phase.number} delay={i * 0.1}>
              <div className="border-t border-navy-deep/15 pt-6">
                <span className="font-mono text-sm text-brand">
                  {phase.number}
                </span>
                <h3 className="mt-2 text-xl font-medium text-navy-deep">
                  {phase.title}
                </h3>
                <p className="mt-3 text-muted-slate leading-relaxed">
                  {phase.description}
                </p>
                <p className="mt-4 text-sm text-navy-deep/70 font-medium">
                  {phase.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
