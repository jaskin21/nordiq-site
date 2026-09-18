import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { about } from "@/content/about";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-deep pt-40 pb-24 md:pt-48 md:pb-32">
        {/* Wire/hex texture, heavily dimmed — atmosphere, not a logo */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/textures/network-texture.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[8%_20%] opacity-60"
          />
          <div className="absolute inset-0 bg-navy-deep/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/10 via-navy-deep/40 to-navy-deep" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
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
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
            <Reveal>
              <div className="flex items-center gap-3 md:sticky md:top-32">
                <span className="h-8 w-px bg-brand/40" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                  Our story
                </span>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 -left-3 select-none font-serif text-8xl text-navy-deep/[0.06]"
                  >
                    &ldquo;
                  </span>
                  <p className="relative max-w-2xl text-2xl font-medium leading-snug text-navy-deep md:text-3xl">
                    {about.intro}
                  </p>
                </div>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-slate">
                  {about.body}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-16 flex flex-col gap-6 border-t border-navy-deep/10 pt-10 sm:flex-row sm:items-start">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand/20 shadow-[0_8px_20px_-6px_rgba(0,74,173,0.35)]">
                    <Image
                      src="/images/founder.png"
                      alt={about.founder.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium text-navy-deep">
                      {about.founder.name}
                    </h2>
                    <p className="text-sm text-muted-slate">
                      {about.founder.role}
                    </p>
                    <p className="mt-4 max-w-xl leading-relaxed text-muted-slate">
                      {about.founder.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {about.founder.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-brand/20 bg-brand/[0.06] px-3 py-1 font-mono text-xs text-brand transition-colors hover:bg-brand/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
