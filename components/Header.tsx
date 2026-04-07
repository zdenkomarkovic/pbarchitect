"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface DropdownProps {
  label: string;
  allServicesLabel: string;
  links: { label: string; href: string }[];
}

function Dropdown({ label, allServicesLabel, links }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm tracking-wide text-[#6b6b6b] transition-colors hover:text-[#c4a84f]"
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 min-w-64 border border-[#e0ddd8] bg-white shadow-lg">
          <Link
            href={links[0]?.href ?? "/"}
            onClick={() => setOpen(false)}
            className="block border-b border-[#e0ddd8] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#c4a84f] transition-colors hover:bg-[#f8f7f4]"
          >
            {allServicesLabel}
          </Link>
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm text-[#1a1a1a] transition-colors hover:bg-[#f8f7f4] hover:text-[#c4a84f]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjOpen, setMobileProjOpen] = useState(false);
  const [mobileUrbOpen, setMobileUrbOpen] = useState(false);

  const projektovanjeLinks = [
    { label: t("design"), href: "/projektovanje" },
    { label: t("design_idr"), href: "/projektovanje/idr" },
    { label: t("design_pgd"), href: "/projektovanje/pgd" },
    { label: t("design_interior"), href: "/projektovanje/enterijer" },
    { label: t("design_exterior"), href: "/projektovanje/eksterijer" },
    { label: t("design_costs"), href: "/projektovanje/proracuni-troskova" },
  ];

  const urbanizamLinks = [
    { label: t("urbanism"), href: "/urbanizam" },
    { label: t("urbanism_project"), href: "/urbanizam/urbanisticki-projekat" },
    { label: t("urbanism_parcelation"), href: "/urbanizam/projekat-parcelacije" },
    { label: t("urbanism_plans"), href: "/urbanizam/urbanisticki-planovi" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e0ddd8] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="PB Architect"
            width={140}
            height={56}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm tracking-wide text-[#6b6b6b] transition-colors hover:text-[#c4a84f]"
          >
            {t("home")}
          </Link>
          <Dropdown
            label={t("design")}
            allServicesLabel={t("design_allServices")}
            links={projektovanjeLinks}
          />
          <Dropdown
            label={t("urbanism")}
            allServicesLabel={t("urbanism_allServices")}
            links={urbanizamLinks}
          />
          <Link
            href="/inzenjering-i-nadzor"
            className="text-sm tracking-wide text-[#6b6b6b] transition-colors hover:text-[#c4a84f]"
          >
            {t("engineering")}
          </Link>
          <Link
            href="/zastita-zivotne-sredine"
            className="text-sm tracking-wide text-[#6b6b6b] transition-colors hover:text-[#c4a84f]"
          >
            {t("environment")}
          </Link>
          <Link
            href="/kontakt"
            className="text-sm tracking-wide text-[#6b6b6b] transition-colors hover:text-[#c4a84f]"
          >
            {t("contact")}
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile burger */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t("openMenu")}
          >
            <span
              className={`block h-0.5 w-6 bg-[#1a1a1a] transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1a1a1a] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1a1a1a] transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#e0ddd8] bg-white px-6 pb-6 md:hidden">
          <nav className="flex flex-col pt-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-[#f0ede8] py-3 text-sm tracking-wide text-[#1a1a1a] hover:text-[#c4a84f]"
            >
              {t("home")}
            </Link>

            {/* Projektovanje accordion */}
            <div className="border-b border-[#f0ede8]">
              <button
                onClick={() => setMobileProjOpen(!mobileProjOpen)}
                className="flex w-full items-center justify-between py-3 text-sm tracking-wide text-[#1a1a1a]"
              >
                {t("design")}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${mobileProjOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {mobileProjOpen && (
                <div className="mb-2 flex flex-col gap-1 pl-4">
                  {projektovanjeLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-[#6b6b6b] hover:text-[#c4a84f]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Urbanizam accordion */}
            <div className="border-b border-[#f0ede8]">
              <button
                onClick={() => setMobileUrbOpen(!mobileUrbOpen)}
                className="flex w-full items-center justify-between py-3 text-sm tracking-wide text-[#1a1a1a]"
              >
                {t("urbanism")}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${mobileUrbOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {mobileUrbOpen && (
                <div className="mb-2 flex flex-col gap-1 pl-4">
                  {urbanizamLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-[#6b6b6b] hover:text-[#c4a84f]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/inzenjering-i-nadzor"
              onClick={() => setMobileOpen(false)}
              className="border-b border-[#f0ede8] py-3 text-sm tracking-wide text-[#1a1a1a] hover:text-[#c4a84f]"
            >
              {t("engineering")}
            </Link>
            <Link
              href="/zastita-zivotne-sredine"
              onClick={() => setMobileOpen(false)}
              className="border-b border-[#f0ede8] py-3 text-sm tracking-wide text-[#1a1a1a] hover:text-[#c4a84f]"
            >
              {t("environment")}
            </Link>
            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm tracking-wide text-[#1a1a1a] hover:text-[#c4a84f]"
            >
              {t("contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
