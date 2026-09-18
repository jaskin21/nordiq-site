"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { Mark } from "./logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4">
      <div
        className={`mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center rounded-full border px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-navy-deep border-white/10 shadow-lg shadow-black/20"
            : "bg-navy-deep/0 border-transparent shadow-none"
        }`}
      >
        <div className="flex justify-start">
          <Link href="/" aria-label="Go to homepage">
            <Mark variant="white" size={50} />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-text-invert font-medium"
                    : "text-text-invert/70 hover:text-text-invert"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/contact"
            className="group hidden md:flex items-center rounded-full border border-white/20 bg-white/10 text-text-invert text-sm px-5 py-2.5 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-md hover:shadow-white/10"
          >
            <span>Get in touch</span>
            <ArrowRight
              size={16}
              className="w-0 opacity-0 -translate-x-2 ml-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2"
            />
          </Link>

          <Sheet>
            <SheetTrigger
              className="md:hidden text-text-invert"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-navy-deep border-muted/10">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="mt-12 flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg ${
                        isActive
                          ? "text-text-invert font-medium"
                          : "text-text-invert/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="group flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-text-invert text-lg px-5 py-3 mt-2 transition-all duration-300 hover:bg-white/20"
                >
                  <span>Get in touch</span>
                  <ArrowRight
                    size={18}
                    className="w-0 opacity-0 -translate-x-2 ml-0 transition-all duration-300 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2"
                  />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
