import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { workingWith, contact } from "@/content/site";

export function WorkingWith() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading content={workingWith} tone="light" />

        <div className="mt-12 space-y-10">
          {workingWith.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="flex gap-6 border-t border-navy-deep/10 pt-6">
                <span className="shrink-0 font-mono text-sm text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-navy-deep">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand">
                    {step.tagline}
                  </p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-slate">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <Link
            href={`https://cal.com/${contact.calLink}`}
            target="_blank"
            className="group mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-text-invert shadow-[0_1px_2px_rgba(0,74,173,0.15),0_16px_32px_-12px_rgba(0,74,173,0.35)] transition-all duration-300 hover:gap-3 hover:bg-brand-light hover:shadow-[0_1px_2px_rgba(0,74,173,0.15),0_20px_40px_-12px_rgba(0,74,173,0.4)] sm:w-auto"
          >
            Book an initial call
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
