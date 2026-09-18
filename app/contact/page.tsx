"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/content/site";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { WorkingWith } from "@/components/sections/working-with";
import { Faq } from "@/components/sections/faq";

const ctaClass =
  "group inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 text-text-invert text-sm font-medium px-6 py-3 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-md hover:shadow-white/10";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="min-h-screen flex items-center bg-navy-deep pt-40 pb-28 md:pt-48 md:pb-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
            <div>
              <Reveal>
                <span className="font-mono text-xs text-muted-slate tracking-wider">
                  {contact.eyebrow}
                </span>
                <h1 className="mt-3 text-4xl md:text-5xl font-medium text-text-invert leading-tight max-w-xl">
                  {contact.headline}
                </h1>
                <p className="mt-4 text-muted-slate text-lg max-w-xl">
                  {contact.subtext}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-12 space-y-5"
                >
                  <div>
                    <Input
                      placeholder="Your name"
                      {...register("name")}
                      className="bg-navy border-muted-slate/20 text-text-invert h-12"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...register("email")}
                      className="bg-navy border-muted-slate/20 text-text-invert h-12"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <Input
                    placeholder="Company (optional)"
                    {...register("company")}
                    className="bg-navy border-muted-slate/20 text-text-invert h-12"
                  />

                  <div>
                    <Textarea
                      placeholder="What are you looking to solve?"
                      rows={5}
                      {...register("message")}
                      className="bg-navy border-muted-slate/20 text-text-invert"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${ctaClass} w-full py-3.5 disabled:opacity-60 disabled:hover:scale-100`}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                    <ArrowRight
                      size={16}
                      className="w-0 opacity-0 -translate-x-2 ml-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2"
                    />
                  </button>

                  {status === "success" && (
                    <p className="text-sm text-brand-light">
                      Thanks — we'll be in touch shortly.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong — please try emailing us directly.
                    </p>
                  )}
                </form>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="flex h-full flex-col overflow-hidden rounded-lg border border-muted-slate/10 bg-navy">
                <div className="relative w-full flex-1 min-h-[280px]">
                  <Image
                    src="/contact/workspace.jpg"
                    alt="Workspace where NordIQ AI Solutions projects come together"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-[20%_40%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/5 to-transparent" />
                </div>

                <div className="flex flex-col justify-center gap-3 p-8">
                  <h3 className="text-xl font-medium text-text-invert">
                    Prefer to talk it through?
                  </h3>
                  <p className="text-muted-slate">
                    Book a 30-minute call and we&apos;ll walk through what
                    you&apos;re trying to solve.
                  </p>
                  <button
                    data-cal-link={contact.calLink}
                    data-cal-config='{"layout":"month_view"}'
                    className={`${ctaClass} mt-2`}
                  >
                    <span>Book a call</span>
                    <ArrowRight
                      size={16}
                      className="w-0 opacity-0 -translate-x-2 ml-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2"
                    />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <WorkingWith />
      <Faq />
    </>
  );
}
