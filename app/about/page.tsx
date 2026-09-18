import { Reveal } from "@/components/motion/reveal";
import { about } from "@/content/about";

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-deep pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="font-mono text-xs text-muted-slate tracking-wider">
              {about.eyebrow}
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-medium text-text-invert leading-tight">
              {about.headline}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="text-lg text-navy-deep leading-relaxed">
              {about.intro}
            </p>
            <p className="mt-6 text-lg text-muted-slate leading-relaxed">
              {about.body}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-20 border-t border-navy-deep/15 pt-12">
              <span className="font-mono text-xs text-muted-slate tracking-wider">
                Founder
              </span>
              <h2 className="mt-3 text-2xl font-medium text-navy-deep">
                {about.founder.name}
              </h2>
              <p className="text-sm text-muted-slate">{about.founder.role}</p>
              <p className="mt-4 text-muted-slate leading-relaxed">
                {about.founder.bio}
              </p>
              <div className="mt-4 flex gap-3 font-mono text-xs text-brand">
                {about.founder.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
