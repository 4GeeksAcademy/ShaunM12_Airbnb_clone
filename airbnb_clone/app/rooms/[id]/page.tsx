"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BookingCard } from "../../components/sections/BookingCard";
import { RoomGallery } from "../../components/sections/RoomGallery";
import { RoomInfo } from "../../components/sections/RoomInfo";
import { listings } from "../../data/listings";
import { useI18n } from "../../i18n/I18nProvider";

export default function RoomDetailPage() {
  const { t } = useI18n();
  const params = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [guests, setGuests] = useState(1);
  const [photoIndex, setPhotoIndex] = useState(0);

  const room = useMemo(
    () => listings.find((listing) => listing.id === params.id),
    [params.id],
  );

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [params.id]);

  if (loading) {
    return (
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))] py-5 pb-10">
        <main className="grid gap-5">
          <p className="rounded-xl border border-dashed border-amber-200 bg-white p-4 text-sm text-slate-500">
            {t("room.loading")}
          </p>
        </main>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))] py-5 pb-10">
        <main className="grid gap-3">
          <p className="text-slate-700">{t("room.notFound")}</p>
          <Link href="/catalog" className="w-fit text-sm font-semibold text-rose-500">
            {t("room.backCatalog")}
          </Link>
        </main>
      </div>
    );
  }

  const galleryPhotos = room.roomPhotos;

  const previousPhoto = () => {
    setPhotoIndex((current) => (current === 0 ? galleryPhotos.length - 1 : current - 1));
  };

  const nextPhoto = () => {
    setPhotoIndex((current) => (current === galleryPhotos.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="mx-auto w-[min(1200px,calc(100%-2rem))] py-5 pb-10">
      <main className="grid gap-5">
        <nav className="inline-flex items-center gap-2 text-sm text-slate-500">
          <Link href="/catalog" className="font-semibold text-rose-500">
            {t("room.backCatalog")}
          </Link>
          <span>/</span>
          <span>{room.title}</span>
        </nav>

        <RoomGallery
          title={room.title}
          photoUrl={galleryPhotos[photoIndex]}
          photoIndex={photoIndex}
          onPrevious={previousPhoto}
          onNext={nextPhoto}
        />

        <section className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:items-start">
          <RoomInfo room={room} />

          <BookingCard
            price={room.price}
            guests={guests}
            onDecreaseGuests={() => setGuests((count) => Math.max(1, count - 1))}
            onIncreaseGuests={() => setGuests((count) => Math.min(8, count + 1))}
          />
        </section>
      </main>
    </div>
  );
}
