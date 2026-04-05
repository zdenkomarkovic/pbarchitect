import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const serviceLinks = [
  { label: "Projektovanje", href: "/projektovanje" },
  { label: "Urbanizam", href: "/urbanizam" },
  { label: "Inženjering i nadzor", href: "/inzenjering-i-nadzor" },
  { label: "Zaštita životne sredine", href: "/zastita-zivotne-sredine" },
];

export function Footer() {
  return (
    <footer id="kontakt" className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-[0.15em] uppercase">
              PB Architect
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#999]">
              Projektovanje, inženjering i urbanizam. Pouzdani partner u
              svakoj fazi izgradnje.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
              Usluge
            </p>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#999] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
              Kontakt
            </p>
            <address className="not-italic">
              <p className="text-sm text-[#999]">{CONTACT.address}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-3 block text-sm text-[#999] transition-colors hover:text-white"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.phoneHref}
                className="mt-2 block text-sm text-[#999] transition-colors hover:text-white"
              >
                {CONTACT.phone}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-[#333] pt-8 text-center">
          <p className="text-xs text-[#555]">
            © {new Date().getFullYear()} PB Architect. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
