"use client";

import { useI18n } from "../../i18n/I18nProvider";

type SortOrder = "asc" | "desc";

interface CatalogHeaderProps {
  count: number;
  sortOrder: SortOrder;
  onSortChange: (sortOrder: SortOrder) => void;
}

export function CatalogHeader({ count, sortOrder, onSortChange }: CatalogHeaderProps) {
  const { t } = useI18n();

  return (
    <section className="flex flex-wrap items-end gap-x-4 gap-y-3 rounded-2xl border border-amber-100 bg-white p-4">
      <h1 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">{t("catalog.title")}</h1>
      <p className="text-sm text-slate-500">{count} {t("catalog.staysFound")}</p>
      <label
        htmlFor="sort-order"
        className="ml-auto inline-flex items-center gap-2 text-sm text-slate-700 max-md:ml-0"
      >
        {t("catalog.sortBy")}
        <select
          id="sort-order"
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value as SortOrder)}
          className="rounded-full border border-amber-100 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-rose-400"
        >
          <option value="asc">{t("catalog.ascending")}</option>
          <option value="desc">{t("catalog.descending")}</option>
        </select>
      </label>
    </section>
  );
}
