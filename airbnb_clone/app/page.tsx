"use client";

import { useEffect, useState } from "react";
import { CategoryFilters } from "./components/CategoryFilters";
import { ListingCard } from "./components/ListingCard";
import { HomeHeader } from "./components/sections/HomeHeader";
import { TopNav } from "./components/TopNav";
import type { CategoryId, Listing } from "./data/listings";
import { listings } from "./data/listings";
import { useI18n } from "./i18n/I18nProvider";

export default function Home() {
  const { t } = useI18n();
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [allListings, setAllListings] = useState<Listing[]>([]);
  const [visibleListings, setVisibleListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => {
      setAllListings(listings);
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = [...allListings];

    if (activeCategory !== "all") {
      filtered = filtered.filter((listing) => listing.category === activeCategory);
    }

    const query = searchValue.trim().toLowerCase();
    if (query) {
      filtered = filtered.filter(
        (listing) =>
          listing.title.toLowerCase().includes(query) ||
          listing.location.toLowerCase().includes(query),
      );
    }

    setVisibleListings(filtered);
  }, [activeCategory, allListings, searchValue]);

  return (
    <div className="mx-auto w-[min(1200px,calc(100%-2rem))] py-5 pb-10">
      <TopNav searchValue={searchValue} onSearchChange={setSearchValue} />
      <CategoryFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <main className="grid gap-5">
        <HomeHeader loading={loading} count={visibleListings.length} />

        {loading ? (
          <p className="rounded-xl border border-dashed border-amber-200 bg-white p-4 text-sm text-slate-500">
            {t("home.loadingCards")}
          </p>
        ) : (
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Listings">
            {visibleListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
