import Image from "next/image";
import Link from "next/link";

export function Wordmark({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="NordIQ AI Solutions — Home"
      className={className}
    >
      <Image
        src="/brand/wordmark.png"
        alt="NordIQ AI Solutions"
        width={220}
        height={44}
        priority
        className={`h-8 w-auto md:h-9 ${invert ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}

export function Mark({
  size = 40,
  variant = "color",
}: {
  size?: number;
  variant?: "color" | "white";
}) {
  return (
    <Image
      src={variant === "white" ? "/brand/mark-white.png" : "/brand/mark.png"}
      alt="NordIQ"
      width={size}
      height={size}
      priority
    />
  );
}
