"use client";

import Link from "next/link";
import { useI18n } from "../../i18n/I18nProvider";

interface HomeHeaderProps {
  loading: boolean;
  count: number;
}

export function HomeHeader({ loading, count }: HomeHeaderProps) {
  const { t } = useI18n();

  return (
    <section className="flex flex-wrap items-end gap-x-4 gap-y-3 rounded-2xl border border-amber-100 bg-white p-4">
      <h1 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">
        {t("home.title")}
      </h1>
      <p className="text-sm text-slate-500">
        {loading ? t("home.loadingCount") : `${count} ${t("home.homesAvailable")}`}
      </p>
      <Link
        href="/catalog"
        className="ml-auto rounded-full bg-rose-500 px-4 py-2 text-sm text-white transition hover:bg-rose-600 max-md:ml-0"
      >
        {t("home.viewCatalog")}
      </Link>
    </section>
  );
}
