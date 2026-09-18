"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { contact } from "@/content/site";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { WorkingWith } from "@/components/sections/working-with";
import { Faq } from "@/components/sections/faq";

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

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#004aad" } },
      });
    })();
  }, []);

  return (
    <>
      <section className="bg-navy-deep pt-40 pb-28 md:pt-48 md:pb-36">
        <div className="mx-auto max-w-6xl px-6">
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

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "w-full bg-brand hover:bg-brand-light text-text-invert",
                  })}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
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

            <Reveal delay={0.15}>
              <div className="rounded-lg overflow-hidden bg-surface min-h-[500px]">
                <Cal
                  calLink={contact.calLink}
                  style={{ width: "100%", height: "100%", minHeight: "500px" }}
                  config={{ layout: "month_view" }}
                />
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
