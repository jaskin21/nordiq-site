import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { workingWith, contact } from "@/content/site";

export function WorkingWith() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-muted-slate tracking-wider">
            {workingWith.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-medium text-navy-deep leading-tight">
            {workingWith.headline}
          </h2>
          <p className="mt-4 text-muted-slate text-lg max-w-xl">
            {workingWith.subtext}
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {workingWith.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="border-t border-navy-deep/15 pt-6">
                <h3 className="text-xl font-medium text-navy-deep">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand">
                  {step.tagline}
                </p>
                <p className="mt-3 text-muted-slate leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Link
            href={`https://cal.com/${contact.calLink}`}
            target="_blank"
            className={buttonVariants({
              size: "lg",
              className: "mt-10 bg-brand hover:bg-brand-light text-text-invert",
            })}
          >
            Book an initial call →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
