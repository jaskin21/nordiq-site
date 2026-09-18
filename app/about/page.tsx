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
              <span className="font-mono text-xs text-muted-slate tracking-wider md:sticky md:top-32 md:block">
                Our story
              </span>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-2xl md:text-3xl font-medium text-navy-deep leading-snug max-w-2xl">
                  {about.intro}
                </p>
                <p className="mt-6 text-lg text-muted-slate leading-relaxed max-w-xl">
                  {about.body}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-16 flex flex-col gap-6 border-t border-navy-deep/15 pt-10 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-deep font-mono text-sm text-text-invert">
                    {getInitials(about.founder.name)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium text-navy-deep">
                      {about.founder.name}
                    </h2>
                    <p className="text-sm text-muted-slate">
                      {about.founder.role}
                    </p>
                    <p className="mt-4 text-muted-slate leading-relaxed max-w-xl">
                      {about.founder.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {about.founder.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-brand/25 bg-brand/5 px-3 py-1 font-mono text-xs text-brand"
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
