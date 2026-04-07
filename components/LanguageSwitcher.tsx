"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

const LOCALES = {
  sr: {
    label: "SR",
    flag: "https://flagcdn.com/w20/rs.png",
    flag2x: "https://flagcdn.com/w40/rs.png",
    ariaLabel: "Prebaci na engleski",
  },
  en: {
    label: "EN",
    flag: "https://flagcdn.com/w20/gb.png",
    flag2x: "https://flagcdn.com/w40/gb.png",
    ariaLabel: "Switch to Serbian",
  },
} as const;

export function LanguageSwitcher() {
  const locale = useLocale() as "sr" | "en";
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const target = locale === "sr" ? "en" : "sr";
  const { label, flag, flag2x, ariaLabel } = LOCALES[target];

  function handleSwitch() {
    startTransition(() => {
      router.replace(pathname, { locale: target });
    });
  }

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className="flex items-center gap-1.5 text-sm font-semibold tracking-wide text-[#6b6b6b] transition-colors hover:text-[#c4a84f] disabled:opacity-50"
      aria-label={ariaLabel}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={flag}
        srcSet={`${flag2x} 2x`}
        alt=""
        width={28}
        className="rounded-sm"
        style={{ height: "auto" }}
      />
      <span>{label}</span>
    </button>
  );
}
