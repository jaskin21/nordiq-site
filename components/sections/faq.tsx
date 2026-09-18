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
    <section className="bg-navy-deep py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="font-mono text-xs text-muted-slate tracking-wider">
            {faq.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-medium text-text-invert leading-tight">
            {faq.headline}
          </h2>
          <p className="mt-4 text-muted-slate">
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
          <Accordion multiple={false} className="mt-10">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-muted-slate/15"
              >
                <AccordionTrigger className="text-text-invert text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-slate leading-relaxed">
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
