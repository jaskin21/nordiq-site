const items = [
  "AI strategy",
  "Solution design",
  "Implementation",
  "Measurable improvement",
  "Business understanding",
];

export function Ticker() {
  return (
    <div
      className="hidden md:block overflow-hidden border-y border-[#001D42]/10 bg-[#F2F3F0] py-6"
      aria-label="What we do"
    >
      <div className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= items.length}
              className="flex items-center whitespace-nowrap font-sans text-[0.95rem] font-normal tracking-wide text-[#001D42]/70"
            >
              {item}
              <span className="mx-10 size-1 rounded-full bg-[#004AAD]" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
