"use client";

import { useI18n } from "../../i18n/I18nProvider";

interface BookingCardProps {
  price: number;
  guests: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
}

export function BookingCard({
  price,
  guests,
  onDecreaseGuests,
  onIncreaseGuests,
}: BookingCardProps) {
  const { t } = useI18n();

  return (
    <aside className="h-fit rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">${price} / {t("room.night")}</h2>
      <div className="my-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onDecreaseGuests}
          aria-label="Decrease guests"
          className="rounded-full border border-amber-100 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-rose-300"
        >
          -
        </button>
        <span className="text-sm font-medium text-slate-700">{guests} {t("room.guests")}</span>
        <button
          type="button"
          onClick={onIncreaseGuests}
          aria-label="Increase guests"
          className="rounded-full border border-amber-100 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-rose-300"
        >
          +
        </button>
      </div>
      <button
        type="button"
        className="w-full rounded-full bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600"
      >
        {t("room.reserve")}
      </button>
    </aside>
  );
}
