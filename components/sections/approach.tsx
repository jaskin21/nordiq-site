import {
  Lightbulb,
  Search,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { approach } from "@/content/site";

const PHASE_ICONS: LucideIcon[] = [Users, Search, Lightbulb, TrendingUp];

export function Approach() {
  return (
    <section className="bg-surface py-16 md:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading content={approach} tone="light" />

        <div className="mt-16 grid gap-x-6 gap-y-6 sm:mt-20 md:grid-cols-2">
          {approach.phases.map((phase, i) => {
            const Icon = PHASE_ICONS[i % PHASE_ICONS.length];
            return (
              <Reveal key={phase.number} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl border border-navy-deep/[0.06] bg-[#FAF6EE] px-7 pt-8 pb-9 shadow-[0_1px_2px_rgba(0,29,66,0.04),0_12px_32px_-16px_rgba(0,29,66,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-navy-deep/[0.1] hover:shadow-[0_1px_2px_rgba(0,29,66,0.06),0_24px_48px_-16px_rgba(0,74,173,0.16)] sm:px-9 sm:pt-10 sm:pb-11">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-3 right-5 font-mono text-7xl sm:text-8xl font-medium text-navy-deep/[0.05] select-none"
                  >
                    {phase.number}
                  </span>

                  <div className="relative">
                    <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand to-navy-deep shadow-[0_8px_20px_-6px_rgba(0,74,173,0.5)] sm:size-14">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-3 -left-3 size-10 rounded-full bg-white/25 blur-md"
                      />
                      <Icon
                        className="relative size-6 text-white sm:size-7"
                        strokeWidth={2}
                      />
                    </div>

                    <div className="mt-6 flex items-baseline gap-2 sm:mt-7">
                      <span className="font-mono text-xs text-brand tracking-wide">
                        {phase.number}
                      </span>
                      <span className="h-px flex-1 bg-navy-deep/10" />
                    </div>

                    <h3 className="mt-3 text-lg font-medium text-navy-deep sm:text-xl">
                      {phase.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-slate sm:text-base">
                      {phase.description}
                    </p>
                    <p className="mt-5 text-xs font-medium text-navy-deep/70 sm:text-sm">
                      {phase.outcome}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
