import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  dark?: boolean;
}

export function PageHero({ title, subtitle, breadcrumbs, dark = false }: PageHeroProps) {
  return (
    <section
      className={`px-6 py-20 ${dark ? "bg-[#1a1a1a] text-white" : "bg-[#f8f7f4] text-[#1a1a1a]"}`}
    >
      <div className="mx-auto max-w-7xl">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-2 text-xs tracking-widest uppercase">
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
  );
}
