import { Link } from "@/i18n/navigation";
import { SITE_URL } from "@/lib/constants";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  dark?: boolean;
  locale?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  dark = false,
  locale = "sr",
}: PageHeroProps) {
  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, i) => {
            const itemUrl = crumb.href
              ? locale === "en"
                ? `${SITE_URL}/en${crumb.href === "/" ? "" : crumb.href}`
                : crumb.href === "/"
                  ? SITE_URL
                  : `${SITE_URL}${crumb.href}`
              : undefined;
            return {
              "@type": "ListItem",
              position: i + 1,
              name: crumb.label,
              ...(itemUrl && { item: itemUrl }),
            };
          }),
        }
      : null;
  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    <section
      className={`px-6 py-20 ${dark ? "bg-[#1a1a1a] text-white" : "bg-[#f8f7f4] text-[#1a1a1a]"}`}
    >
      <div className="mx-auto max-w-7xl">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <span className={dark ? "text-[#555]" : "text-[#bbb]"}>/</span>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className={`transition-colors ${dark ? "text-[#999] hover:text-[#c4a84f]" : "text-[#6b6b6b] hover:text-[#c4a84f]"}`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#c4a84f]">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-[family-name:var(--font-heading)] text-5xl font-light md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-[#999]" : "text-[#6b6b6b]"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
    </>
  );
}
