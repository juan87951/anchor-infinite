interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string;
  theme?: "sakura" | "premium";
  className?: string;
}

export default function PlaceholderImage({
  label,
  aspectRatio = "aspect-video",
  theme = "sakura",
  className = "",
}: PlaceholderImageProps) {
  const themeStyles =
    theme === "sakura"
      ? "bg-sakura-100 border-sakura-300 text-sakura-500"
      : "bg-navy-800 border-gold-400 text-gold-400";

  return (
    <div
      className={`${aspectRatio} ${themeStyles} flex items-center justify-center rounded-lg border-2 border-dashed ${className}`}
    >
      <div className="px-4 text-center">
        <svg
          className="mx-auto mb-2 h-8 w-8 opacity-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
          />
        </svg>
        <p className="text-sm font-medium">{label}</p>
      </div>
    </div>
  );
}
