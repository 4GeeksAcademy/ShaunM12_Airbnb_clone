"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { useI18n } from "../i18n/I18nProvider";
import { listings } from "../data/listings";

interface TopNavProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function TopNav({ searchValue, onSearchChange }: TopNavProps) {
  const { t, options, setLang, lang } = useI18n();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const roomLinks = listings.map((listing) => ({
    href: `/rooms/${listing.id}`,
    label: listing.title,
  }));

  return (
    <header className="grid grid-cols-1 gap-3 rounded-2xl border border-amber-100 bg-white/90 p-3 shadow-sm backdrop-blur md:grid-cols-[auto_1fr_auto] md:items-center md:rounded-full">
      <Logo />

      <label className="grid min-w-0 gap-1" htmlFor="search-input">
        <span className="text-[11px] uppercase tracking-[0.12em] text-slate-500">{t("topnav.searchLabel")}</span>
        <input
          id="search-input"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={t("topnav.searchPlaceholder")}
          className="w-full rounded-full border border-amber-100 bg-white px-4 py-2 text-sm text-slate-800 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
        />
      </label>

      <div className="flex flex-wrap gap-2 md:flex-nowrap" aria-label="User menu actions">
        <Link
          href="/host"
          className="rounded-full border border-amber-100 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-rose-300"
          aria-label="Become a host"
        >
          {t("topnav.host")}
        </Link>

        <div className="relative">
          <button
            type="button"
            className="rounded-full border border-amber-100 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-rose-300"
            aria-label="Language"
            onClick={() => {
              setLangOpen((open) => !open);
              setMenuOpen(false);
            }}
          >
            {t("topnav.lang")}
          </button>
          {langOpen && (
            <div className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-xl border border-amber-100 bg-white shadow-md">
              {options.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => {
                    setLang(option.code);
                    setLangOpen(false);
                  }}
                  className={`block w-full px-3 py-2 text-left text-xs transition hover:bg-rose-50 ${
                    option.code === lang ? "font-semibold text-rose-600" : "text-slate-700"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            className="rounded-full border border-amber-100 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-rose-300"
            aria-label="Open user menu"
            onClick={() => {
              setMenuOpen((open) => !open);
              setLangOpen(false);
            }}
          >
            {t("topnav.menu")}
          </button>

          {menuOpen && (
            <div className="absolute right-0 z-20 mt-2 w-64 rounded-xl border border-amber-100 bg-white p-2 shadow-md">
              <nav className="grid gap-1">
                <Link
                  href="/"
                  className="rounded-lg px-3 py-2 text-xs text-slate-700 transition hover:bg-rose-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("topnav.menu.home")}
                </Link>
                <Link
                  href="/catalog"
                  className="rounded-lg px-3 py-2 text-xs text-slate-700 transition hover:bg-rose-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("topnav.menu.catalog")}
                </Link>
                <Link
                  href="/host"
                  className="rounded-lg px-3 py-2 text-xs text-slate-700 transition hover:bg-rose-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("topnav.menu.host")}
                </Link>

                <p className="px-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                  {t("topnav.menu.rooms")}
                </p>

                <div className="max-h-52 overflow-auto pr-1">
                  {roomLinks.map((roomLink) => (
                    <Link
                      key={roomLink.href}
                      href={roomLink.href}
                      className="block rounded-lg px-3 py-2 text-xs text-slate-700 transition hover:bg-rose-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      {roomLink.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
