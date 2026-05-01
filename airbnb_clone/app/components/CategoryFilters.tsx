"use client";

import type { CategoryId } from "../data/listings";
import { categories } from "../data/listings";
import { useI18n } from "../i18n/I18nProvider";

interface CategoryFiltersProps {
  activeCategory: CategoryId;
  onCategoryChange: (id: CategoryId) => void;
}

export function CategoryFilters({ activeCategory, onCategoryChange }: CategoryFiltersProps) {
  const { t } = useI18n();

  return (
    <section className="my-4 flex gap-3 overflow-x-auto pb-1" aria-label="Categories">
      {categories.map((category) => {
        const active = activeCategory === category.id;

        return (
          <button
            key={category.id}
            type="button"
            className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
              active
                ? "-translate-y-0.5 border-rose-400 bg-rose-50 text-rose-600 shadow-sm"
                : "border-amber-100 bg-white text-slate-700 hover:border-rose-300"
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            <span aria-hidden="true">{category.icon}</span>
            <span>{t(`category.${category.id}`)}</span>
          </button>
        );
      })}
    </section>
  );
}
