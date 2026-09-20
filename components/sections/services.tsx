import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { investigate } from "@/content/services";

export function Services() {
  return (
    <section className="relative bg-navy py-28 md:py-36">
      {/* Network/plexus background, pinned to the viewport so it stays put while content scrolls over it */}
      <div className="absolute inset-0 [clip-path:inset(0)]" aria-hidden="true">
        <div
          className="fixed inset-x-0 top-0 h-[100lvh] bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url(/images/network-plexus.jpg)" }}
        />
      </div>
      <div className="absolute inset-0 bg-navy/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/20 via-navy/50 to-navy"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading content={investigate} tone="dark" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {investigate.areas.map((area, i) => (
            <Reveal key={area.number} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-soft-white/10 bg-navy/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-navy/70">
                <span className="font-mono text-sm text-brand-light">
                  {area.number}
                </span>
                <h3 className="mt-4 text-xl font-medium leading-snug text-text-invert">
                  {area.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-slate">
                  {area.description}
                </p>

                <div className="mt-6 border-l-2 border-brand-light/40 pl-4">
                  <p className="text-sm italic text-text-invert/80">
                    {area.question}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
