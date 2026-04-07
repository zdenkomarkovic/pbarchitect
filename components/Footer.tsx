import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

  const serviceLinks = [
    { label: tNav("design"), href: "/projektovanje" },
    { label: tNav("urbanism"), href: "/urbanizam" },
    { label: tNav("engineering"), href: "/inzenjering-i-nadzor" },
    { label: tNav("environment"), href: "/zastita-zivotne-sredine" },
  ];

  return (
    <footer id="kontakt" className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="PB Architect"
                width={280}
                height={112}
                className="h-28 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#999]">
              {t("tagline")}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#c4a84f]">
              {t("services")}
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
              {t("contact")}
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

        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-1 border-t border-[#333] pb-2 pt-6">
          <p className="text-sm text-[#aaa]">
            © {new Date().getFullYear()} PB Architect. {t("copyright")}
          </p>
          <p className="text-sm text-[#aaa]">
            {t("madeBy")}:{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
