const items = [
  "AI strategy",
  "Solution design",
  "Implementation",
  "Measurable improvement",
  "Business understanding",
];

export function Ticker() {
  return (
    <div className="bg-navy py-5 overflow-hidden border-y border-muted-slate/10">
      <div className="flex w-max animate-ticker">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-sm text-muted-slate tracking-wider uppercase whitespace-nowrap"
          >
            {item}
            <span className="mx-6 text-brand-light">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
