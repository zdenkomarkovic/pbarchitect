import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
}

export async function ServiceCard({
  number,
  title,
  description,
  href,
}: ServiceCardProps) {
  const t = await getTranslations("common");

  return (
    <Link
      href={href}
      className="group block border border-[#e0ddd8] bg-white p-8 transition-all hover:border-[#c4a84f] hover:shadow-lg"
    >
      <p className="font-[family-name:var(--font-heading)] text-5xl font-light text-[#e0ddd8] transition-colors group-hover:text-[#c4a84f]">
        {number}
      </p>
      <h3 className="font-[family-name:var(--font-heading)] mt-4 text-2xl font-semibold text-[#1a1a1a]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">
        {description}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
        {t("learnMore")}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
