interface Props {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  centered = false,
  light = false,
}: Props) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-[#c9a84c]" aria-hidden="true" />
          <span
            className={`text-xs font-semibold tracking-[0.2em] uppercase ${
              light ? "text-[#e8c97a]" : "text-[#c9a84c]"
            }`}
          >
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-[#c9a84c]" aria-hidden="true" />
        </div>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-[#0a2342] dark:text-white"
        }`}
      >
        {parts[0]}
        {highlight && (
          <span className="text-[#c9a84c]">{highlight}</span>
        )}
        {parts[1]}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-gray-500 dark:text-gray-400"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
