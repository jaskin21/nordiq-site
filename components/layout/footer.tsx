import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { Mark } from "./logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const contactLinks = [
  {
    label: "lucas@nordiqaisolutions.com",
    href: "mailto:lucas@nordiqaisolutions.com",
  },
  {
    label: "LinkedIn",
    href: "https://se.linkedin.com/in/lucas-elias-887293395",
  },
  { label: "Book a call", href: "https://cal.com/lucaselias/30min" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Cookies", href: "#" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.92 4.92 0 0 0-1.78 1.16A4.92 4.92 0 0 0 2.5 5.47c-.25.64-.42 1.37-.47 2.43C1.98 8.96 1.97 9.3 1.97 12s.01 3.04.06 4.1c.05 1.06.22 1.79.47 2.43a4.92 4.92 0 0 0 1.16 1.78 4.92 4.92 0 0 0 1.78 1.16c.64.25 1.37.42 2.43.47C8.94 22 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.92 4.92 0 0 0 1.78-1.16 4.92 4.92 0 0 0 1.16-1.78c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.1s-.01-3.04-.06-4.1c-.05-1.06-.22-1.79-.47-2.43a4.92 4.92 0 0 0-1.16-1.78A4.92 4.92 0 0 0 18.55.53c-.64-.25-1.37-.42-2.43-.47C15.06.01 14.72 0 12 0zm0 5.4a6.6 6.6 0 1 1 0 13.2 6.6 6.6 0 0 1 0-13.2zm0 10.9a4.3 4.3 0 1 0 0-8.6 4.3 4.3 0 0 0 0 8.6zm8.4-11.16a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
    ),
  },
  {
    label: "X",
    href: "#",
    svg: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-muted-slate/10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Mark variant="white" size={90} />
            <p className="mt-4 text-muted-slate leading-relaxed max-w-xs">
              AI consulting with business first. Analysis, prioritization,
              implementation and follow-up.
            </p>

            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map(({ label, href, svg }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-slate hover:text-text-invert transition-colors"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {svg}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-text-invert">Navigation</h3>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-nav text-muted-slate hover:text-text-invert transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-medium text-text-invert">Contact</h3>
            <nav className="mt-4 flex flex-col gap-3">
              {contactLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={
                    link.href.startsWith("http") ||
                    link.href.startsWith("mailto")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-nav text-muted-slate hover:text-text-invert transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Large faded wordmark, fading to dark at the bottom */}
      <div className="pointer-events-none select-none mb-1 flex justify-center">
        <Image
          src="/brand/wordmark.svg"
          alt=""
          aria-hidden="true"
          width={1000}
          height={120}
          className="w-full max-w-6xl h-auto brightness-0 invert opacity-100 [mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="pt-6 border-t border-muted-slate/10 flex flex-col gap-4 md:flex-row items-center justify-between">
          <p className="text-xs text-muted-slate font-mono">
            © {new Date().getFullYear()} NordIQ AI Solutions
          </p>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-muted-slate hover:text-text-invert transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#top"
              className="flex items-center gap-1 text-xs text-muted-slate hover:text-text-invert transition-colors"
            >
              Back to top <ArrowUp size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
