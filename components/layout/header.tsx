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
import { getCalApi } from "@calcom/embed-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes (back button, etc.)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { theme: "dark" });
    })();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4">
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-6 sm:py-3 ${
          scrolled
            ? "bg-navy-deep border-white/10 shadow-lg shadow-black/20"
            : "bg-navy-deep/0 border-transparent shadow-none"
        }`}
      >
        <Link href="/" aria-label="Go to homepage" className="shrink-0">
          <Mark variant="white" size={44} />
        </Link>

        {/* Desktop nav — absolutely centered, out of flex flow so it
            never competes for space with the logo or right-side actions */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
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

        <div className="flex shrink-0 items-center gap-3">
          <button
            data-cal-link="lucaselias/30min"
            data-cal-config='{"layout":"month_view"}'
            className="group hidden items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm text-text-invert transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/20 hover:shadow-md hover:shadow-white/10 md:flex"
          >
            <span>Get in touch</span>
            <ArrowRight
              size={16}
              className="ml-0 w-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              className="flex size-9 items-center justify-center rounded-full text-text-invert transition-colors hover:bg-white/10 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-navy-deep border-muted/10 px-6"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="mt-14 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-lg px-3 py-3 text-lg transition-colors ${
                        isActive
                          ? "text-text-invert font-medium"
                          : "text-text-invert/70 hover:bg-white/5 hover:text-text-invert"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <button
                  data-cal-link="lucaselias/30min"
                  data-cal-config='{"layout":"month_view"}'
                  onClick={() => setMenuOpen(false)}
                  className="group mt-4 flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-lg text-text-invert transition-all duration-300 hover:bg-white/20"
                >
                  <span>Get in touch</span>
                  <ArrowRight
                    size={18}
                    className="ml-0 w-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
