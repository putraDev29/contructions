import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlightedWord,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  // Split title if highlightedWord is provided
  let titleParts: { before: string; match: string; after: string } | null = null;
  if (highlightedWord && title.includes(highlightedWord)) {
    const index = title.indexOf(highlightedWord);
    titleParts = {
      before: title.slice(0, index),
      match: highlightedWord,
      after: title.slice(index + highlightedWord.length),
    };
  }

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-4 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          {eyebrow}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
        {titleParts ? (
          <>
            {titleParts.before}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              {titleParts.match}
            </span>
            {titleParts.after}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
