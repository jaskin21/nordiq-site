import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content/faq";

export function Faq() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 md:py-32">
      {/* Shared wire/hex texture, dimmed — consistent with CtaBand and the page heroes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/textures/network-texture.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[80%_70%] opacity-20"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-muted-slate tracking-wider">
            {faq.eyebrow}
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-text-invert leading-tight">
            {faq.headline}
          </h2>
          <p className="mt-4 text-sm text-muted-slate">
            {faq.subtext}{" "}
            <Link
              href={`mailto:${faq.email}`}
              className="text-brand-light underline"
            >
              {faq.email}
            </Link>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion multiple={false} className="mt-10 space-y-3">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-muted-slate/15 bg-soft-white/[0.03] px-6 py-1 transition-colors data-[state=open]:bg-soft-white/[0.05] hover:bg-soft-white/[0.05]"
              >
                <AccordionTrigger className="py-4 text-sm md:text-base font-medium text-text-invert text-left hover:no-underline [&>svg]:text-brand-light [&>svg]:size-4 [&>svg]:shrink-0">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 pr-8 text-sm text-muted-slate leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
