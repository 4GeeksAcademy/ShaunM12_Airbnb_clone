"use client";

import { useMemo, useState } from "react";
import { ListingCard } from "../components/ListingCard";
import { CatalogHeader } from "../components/sections/CatalogHeader";
import { TopNav } from "../components/TopNav";
import { listings } from "../data/listings";

type SortOrder = "asc" | "desc";

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [searchValue, setSearchValue] = useState("");

  const filteredAndSorted = useMemo(() => {
    const filtered = listings.filter((listing) => {
      const query = searchValue.trim().toLowerCase();
      if (!query) {
        return true;
      }

      return (
        listing.title.toLowerCase().includes(query) ||
        listing.location.toLowerCase().includes(query)
      );
    });

    return [...filtered].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
  }, [searchValue, sortOrder]);

  return (
    <div className="mx-auto w-[min(1200px,calc(100%-2rem))] py-5 pb-10">
      <TopNav searchValue={searchValue} onSearchChange={setSearchValue} />

      <main className="grid gap-5">
        <CatalogHeader
          count={filteredAndSorted.length}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        <section className="grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAndSorted.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
