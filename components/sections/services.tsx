import { Reveal } from "@/components/motion/reveal";
import { investigate } from "@/content/services";

export function Services() {
  return (
    <section className="bg-navy py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-muted-slate tracking-wider">
            {investigate.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-medium text-text-invert leading-tight max-w-2xl">
            {investigate.headline}
          </h2>
          <p className="mt-4 text-muted-slate text-lg max-w-xl">
            {investigate.subtext}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {investigate.areas.map((area, i) => (
            <Reveal key={area.number} delay={i * 0.1}>
              <div className="border-t border-muted-slate/15 pt-6 h-full flex flex-col">
                <span className="font-mono text-sm text-brand-light">
                  {area.number}
                </span>
                <h3 className="mt-3 text-xl font-medium text-text-invert leading-snug">
                  {area.title}
                </h3>
                <p className="mt-3 text-muted-slate leading-relaxed">
                  {area.description}
                </p>
                <p className="mt-4 text-sm text-text-invert/80 italic">
                  {area.question}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
