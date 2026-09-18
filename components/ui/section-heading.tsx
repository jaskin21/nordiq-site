// components/section-heading.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionHeadingContent = {
  eyebrow: string;
  headline: string;
  subtext?: string;
  cta?: {
    label: string;
    href: string;
  };
};

type SectionHeadingProps = {
  /** Pass the whole content object from your content file, e.g. `content={approach}`. */
  content: SectionHeadingContent;
  /** Dark section (e.g. navy-deep bg with texture) vs light (bg-surface). Defaults to "light". */
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  content: { eyebrow, headline, subtext, cta },
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("w-full", className)}>
      <Reveal>
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "shrink-0 font-mono text-xs uppercase tracking-[0.2em]",
              isDark ? "text-brand-light" : "text-brand",
            )}
          >
            {eyebrow}
          </span>
          <span
            className={cn(
              "h-px flex-1",
              isDark ? "bg-soft-white/10" : "bg-navy-deep/10",
            )}
          />
        </div>

        <h2
          className={cn(
            "mt-5 text-xl font-medium tracking-tight leading-[1.1]",
            isDark ? "text-text-invert" : "text-navy-deep",
          )}
        >
          {headline}
        </h2>

        {subtext && (
          <p className="mt-4 text-base leading-relaxed text-muted-slate">
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
