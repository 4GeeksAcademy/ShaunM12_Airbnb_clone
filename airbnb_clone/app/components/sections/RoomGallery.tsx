"use client";

import { useI18n } from "../../i18n/I18nProvider";

interface RoomGalleryProps {
  title: string;
  photoUrl: string;
  photoIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function RoomGallery({ title, photoUrl, photoIndex, onPrevious, onNext }: RoomGalleryProps) {
  const { t } = useI18n();

  return (
    <section className="rounded-2xl border border-amber-100 bg-white p-4" aria-label="Photo gallery">
      <div className="min-h-[230px] overflow-hidden rounded-xl bg-amber-100">
        <img
          src={photoUrl}
          alt={`${title} photo ${photoIndex + 1}`}
          className="h-[230px] w-full object-cover md:h-[320px]"
        />
      </div>
      <div className="mt-4 flex justify-center gap-3">
        <button
          type="button"
          onClick={onPrevious}
          className="rounded-full border border-amber-100 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-rose-300"
        >
          {t("room.previous")}
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-full border border-amber-100 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-rose-300"
        >
          {t("room.next")}
        </button>
      </div>
    </section>
  );
}
