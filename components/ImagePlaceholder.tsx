interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
  className?: string;
}

const ratioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[16/7]",
  portrait: "aspect-[3/4]",
};

export function ImagePlaceholder({
  label = "Slika",
  aspectRatio = "video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${ratioClasses[aspectRatio]} w-full overflow-hidden bg-[#e8e6e0] ${className}`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaa9a4"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="text-xs text-[#aaa9a4]">{label}</span>
      </div>
    </div>
  );
}
