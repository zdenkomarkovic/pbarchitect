import Link from "next/link";
import Image from "next/image";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface SubServiceCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export function SubServiceCard({ title, description, href, image }: SubServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden border border-[#e0ddd8] bg-white transition-all hover:border-[#c4a84f] hover:shadow-md"
    >
      {image ? (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <ImagePlaceholder label={title} aspectRatio="video" />
      )}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1a1a1a] transition-colors group-hover:text-[#c4a84f]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#6b6b6b]">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
          Više
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
