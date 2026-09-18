import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyNordiq } from "@/content/site";

export function WhyNordiq() {
  return (
    <section className="relative overflow-hidden bg-surface py-28 md:py-36">
      {/* Soft blue glow + scattered sloped lines — quiet atmosphere behind the content */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 right-[-10%] size-[36rem] rounded-full bg-brand/[0.05] blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[-8%] size-[28rem] rounded-full bg-brand-light/[0.04] blur-[130px]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          preserveAspectRatio="none"
        >
          <line
            x1="8%"
            y1="0"
            x2="2%"
            y2="22%"
            stroke="#004AAD"
            strokeWidth="1"
          />
          <line
            x1="22%"
            y1="15%"
            x2="12%"
            y2="55%"
            stroke="#004AAD"
            strokeWidth="1"
          />
          <line
            x1="48%"
            y1="0"
            x2="38%"
            y2="18%"
            stroke="#004AAD"
            strokeWidth="1"
          />
          <line
            x1="62%"
            y1="40%"
            x2="56%"
            y2="70%"
            stroke="#004AAD"
            strokeWidth="1"
          />
          <line
            x1="78%"
            y1="10%"
            x2="88%"
            y2="45%"
            stroke="#004AAD"
            strokeWidth="1"
          />
          <line
            x1="91%"
            y1="55%"
            x2="82%"
            y2="85%"
            stroke="#004AAD"
            strokeWidth="1"
          />
          <line
            x1="35%"
            y1="60%"
            x2="44%"
            y2="95%"
            stroke="#004AAD"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading content={whyNordiq} tone="light" />

        <div className="mt-20 space-y-14 md:mt-28 md:space-y-20">
          {whyNordiq.points.map((point, i) => {
            const alignRight = i % 2 === 1;

            return (
              <Reveal key={point.number} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative md:max-w-xl",
                    alignRight ? "md:ml-auto md:text-right" : "md:text-left",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute -top-10 select-none font-serif text-8xl font-medium text-brand/[0.14] md:-top-14 md:text-9xl",
                      alignRight ? "-right-1 md:right-0" : "-left-1 md:left-0",
                    )}
                  >
                    {point.title.charAt(0)}
                  </span>

                  <h3 className="relative text-2xl font-medium leading-snug text-navy-deep md:text-3xl">
                    {point.title}
                  </h3>
                  <p
                    className={cn(
                      "relative mt-4 leading-relaxed text-muted-slate md:text-lg",
                      alignRight ? "md:ml-auto" : "",
                    )}
                  >
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
