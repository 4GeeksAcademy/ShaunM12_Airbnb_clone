"use client";

import type { Listing } from "../../data/listings";
import { useI18n } from "../../i18n/I18nProvider";

interface RoomInfoProps {
  room: Listing;
}

export function RoomInfo({ room }: RoomInfoProps) {
  const { t } = useI18n();

  return (
    <div>
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">{room.title}</h1>
        <p className="mt-2 text-sm text-slate-500">
          * {room.rating.toFixed(2)} ({room.reviewCount} {t("room.reviews")}) - {room.location}
        </p>
      </header>

      <section
        className="mt-4 grid grid-cols-[auto_1fr] items-center gap-3 border-y border-amber-100 py-4"
        aria-label="Host information"
      >
        <img
          src={room.hostAvatarUrl}
          alt={room.hostName}
          className="h-14 w-14 rounded-full border-2 border-amber-100 object-cover"
        />
        <div>
          <h2 className="text-base font-semibold text-slate-900">{t("room.hostedBy")} {room.hostName}</h2>
          <p className="text-sm text-slate-500">{room.yearsHosting} {t("room.yearsHosting")}</p>
        </div>
      </section>

      <section className="mt-4 grid grid-cols-2 gap-2" aria-label="Amenities">
        {room.amenities.map((amenity) => (
          <article
            key={amenity}
            className="flex items-center gap-2 rounded-xl border border-amber-100 bg-white p-2 text-sm text-slate-700"
          >
            <span aria-hidden="true">[+]</span>
            <span>{amenity}</span>
          </article>
        ))}
      </section>
    </div>
  );
}
