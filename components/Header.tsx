"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const projektovanjeLinks = [
  { label: "Projektovanje", href: "/projektovanje" },
  { label: "IDR — Idejno rešenje", href: "/projektovanje/idr" },
  { label: "PGD — Projekat za građevinsku dozvolu", href: "/projektovanje/pgd" },
  { label: "Enterijer", href: "/projektovanje/enterijer" },
  { label: "Eksterijer", href: "/projektovanje/eksterijer" },
  { label: "Proračuni troškova", href: "/projektovanje/proracuni-troskova" },
];

const urbanizamLinks = [
  { label: "Urbanizam", href: "/urbanizam" },
  { label: "Urbanistički projekat (UP)", href: "/urbanizam/urbanisticki-projekat" },
  { label: "Projekat parcelacije", href: "/urbanizam/projekat-parcelacije" },
  { label: "Urbanistički planovi", href: "/urbanizam/urbanisticki-planovi" },
];

interface DropdownProps {
  label: string;
  links: { label: string; href: string }[];
}

function Dropdown({ label, links }: DropdownProps) {
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
          {/* First item is the section root — visually separated */}
          <Link
            href={links[0]?.href ?? "/"}
            onClick={() => setOpen(false)}
            className="block border-b border-[#e0ddd8] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#c4a84f] transition-colors hover:bg-[#f8f7f4]"
          >
            {links[0]?.label} — sve usluge
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjOpen, setMobileProjOpen] = useState(false);
  const [mobileUrbOpen, setMobileUrbOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e0ddd8] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
            Početna
          </Link>
          <Dropdown label="Projektovanje" links={projektovanjeLinks} />
          <Dropdown label="Urbanizam" links={urbanizamLinks} />
          <Link
            href="/inzenjering-i-nadzor"
            className="text-sm tracking-wide text-[#6b6b6b] transition-colors hover:text-[#c4a84f]"
          >
            Inženjering i nadzor
          </Link>
          <Link
            href="/zastita-zivotne-sredine"
            className="text-sm tracking-wide text-[#6b6b6b] transition-colors hover:text-[#c4a84f]"
          >
            Zaštita životne sredine
          </Link>
          <Link
            href="/kontakt"
            className="text-sm tracking-wide text-[#6b6b6b] transition-colors hover:text-[#c4a84f]"
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Otvori meni"
        >
          <span className={`block h-0.5 w-6 bg-[#1a1a1a] transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#1a1a1a] transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#1a1a1a] transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
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
              Početna
            </Link>

            {/* Projektovanje accordion */}
            <div className="border-b border-[#f0ede8]">
              <button
                onClick={() => setMobileProjOpen(!mobileProjOpen)}
                className="flex w-full items-center justify-between py-3 text-sm tracking-wide text-[#1a1a1a]"
              >
                Projektovanje
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${mobileProjOpen ? "rotate-180" : ""}`}>
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
                Urbanizam
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${mobileUrbOpen ? "rotate-180" : ""}`}>
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

            <Link href="/inzenjering-i-nadzor" onClick={() => setMobileOpen(false)} className="border-b border-[#f0ede8] py-3 text-sm tracking-wide text-[#1a1a1a] hover:text-[#c4a84f]">
              Inženjering i nadzor
            </Link>
            <Link href="/zastita-zivotne-sredine" onClick={() => setMobileOpen(false)} className="border-b border-[#f0ede8] py-3 text-sm tracking-wide text-[#1a1a1a] hover:text-[#c4a84f]">
              Zaštita životne sredine
            </Link>
            <Link href="#kontakt" onClick={() => setMobileOpen(false)} className="py-3 text-sm tracking-wide text-[#1a1a1a] hover:text-[#c4a84f]">
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
