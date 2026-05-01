import Link from "next/link";
import type { Listing } from "../data/listings";

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="grid gap-3 rounded-2xl border border-amber-100 bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="min-h-44 overflow-hidden rounded-xl bg-amber-100">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          loading="lazy"
          className="h-44 w-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-base font-semibold text-slate-900">{listing.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{listing.location}</p>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-700">
          <strong>${listing.price}</strong>
          <span>/ night</span>
          <span className="ml-auto text-amber-700">* {listing.rating.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}
