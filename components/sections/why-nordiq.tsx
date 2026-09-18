import { Reveal } from "@/components/motion/reveal";
import { whyNordiq } from "@/content/site";

export function WhyNordiq() {
  return (
    <section className="bg-surface py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-muted-slate tracking-wider">
            {whyNordiq.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-medium text-navy-deep leading-tight max-w-xl">
            {whyNordiq.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {whyNordiq.points.map((point, i) => (
            <Reveal key={point.number} delay={i * 0.1}>
              <div className="border-t border-navy-deep/15 pt-6">
                <span className="font-mono text-sm text-brand">
                  {point.number}
                </span>
                <h3 className="mt-3 text-xl font-medium text-navy-deep leading-snug">
                  {point.title}
                </h3>
                <p className="mt-3 text-muted-slate leading-relaxed">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
