// components/section-heading.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  headline: string;
  subtext?: string;
  cta?: {
    label: string;
    href: string;
  };
  /** Dark section (e.g. navy-deep bg with texture) vs light (bg-surface). Defaults to "light". */
  tone?: "light" | "dark";
  /** Cap the subtext line length. Defaults to true. */
  constrainWidth?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  headline,
  subtext,
  cta,
  tone = "light",
  constrainWidth = true,
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn(constrainWidth && "max-w-2xl", className)}>
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs tracking-wider",
            isDark
              ? "border-soft-white/15 bg-soft-white/5 text-muted-slate"
              : "border-navy-deep/10 bg-white/60 text-navy-deep/70",
          )}
        >
          <span className="size-1.5 rounded-full bg-brand" />
          {eyebrow}
        </span>

        <h2
          className={cn(
            "mt-4 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-tight",
            isDark ? "text-text-invert" : "text-navy-deep",
          )}
        >
          {headline}
        </h2>

        {subtext && (
          <p
            className={cn(
              "mt-4 text-base leading-relaxed md:text-lg",
              constrainWidth && "max-w-xl",
              isDark ? "text-muted-slate" : "text-muted-slate",
            )}
          >
            {subtext}
          </p>
        )}

        {cta && (
          <Link
            href={cta.href}
            className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-text-invert shadow-[0_1px_2px_rgba(0,74,173,0.15),0_16px_32px_-12px_rgba(0,74,173,0.35)] transition-all duration-300 hover:gap-3 hover:bg-brand-light hover:shadow-[0_1px_2px_rgba(0,74,173,0.15),0_20px_40px_-12px_rgba(0,74,173,0.4)] sm:w-auto"
          >
            {cta.label}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        )}
      </Reveal>
    </div>
  );
}
