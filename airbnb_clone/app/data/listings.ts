export type CategoryId = "all" | "beach" | "mansions" | "trending" | "cabins" | "city";

export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: Exclude<CategoryId, "all">;
  imageUrl: string;
  roomPhotos: string[];
  hostName: string;
  hostAvatarUrl: string;
  yearsHosting: number;
  amenities: string[];
}

export const categories: Array<{ id: CategoryId; label: string; icon: string }> = [
  { id: "all", label: "All", icon: "[=]" },
  { id: "beach", label: "Beach", icon: "[~]" },
  { id: "mansions", label: "Mansions", icon: "[M]" },
  { id: "trending", label: "Trending", icon: "[*]" },
  { id: "cabins", label: "Cabins", icon: "[C]" },
  { id: "city", label: "City", icon: "[#]" },
];

export const listings: Listing[] = [
  {
    id: "101",
    title: "Seaside Glass House",
    location: "Malibu, California",
    price: 420,
    rating: 4.95,
    reviewCount: 134,
    category: "beach",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    roomPhotos: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1400&q=80",
    ],
    hostName: "Olivia",
    hostAvatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    yearsHosting: 6,
    amenities: ["Ocean view", "Wifi", "Dedicated workspace", "Pool", "Parking"],
  },
  {
    id: "102",
    title: "Cliffside Modern Villa",
    location: "Santorini, Greece",
    price: 560,
    rating: 4.91,
    reviewCount: 97,
    category: "mansions",
    imageUrl:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    roomPhotos: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7f34b5063ec?auto=format&fit=crop&w=1400&q=80",
    ],
    hostName: "Nikos",
    hostAvatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    yearsHosting: 8,
    amenities: ["Sunset deck", "Chef kitchen", "Hot tub", "Washer", "Air conditioning"],
  },
  {
    id: "103",
    title: "Pine Ridge Cabin",
    location: "Aspen, Colorado",
    price: 310,
    rating: 4.88,
    reviewCount: 182,
    category: "cabins",
    imageUrl:
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=80",
    roomPhotos: [
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    ],
    hostName: "Ethan",
    hostAvatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    yearsHosting: 5,
    amenities: ["Mountain view", "Fireplace", "Ski access", "Wifi", "Parking"],
  },
  {
    id: "104",
    title: "Downtown Skyline Loft",
    location: "Chicago, Illinois",
    price: 245,
    rating: 4.73,
    reviewCount: 210,
    category: "city",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    roomPhotos: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80",
    ],
    hostName: "Camila",
    hostAvatarUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
    yearsHosting: 4,
    amenities: ["City view", "Gym", "Elevator", "Fast wifi", "Kitchen"],
  },
  {
    id: "105",
    title: "Tropical Palm Retreat",
    location: "Tulum, Mexico",
    price: 355,
    rating: 4.84,
    reviewCount: 163,
    category: "trending",
    imageUrl:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    roomPhotos: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    ],
    hostName: "Mateo",
    hostAvatarUrl:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80",
    yearsHosting: 7,
    amenities: ["Private patio", "Plunge pool", "Beach access", "Breakfast", "A/C"],
  },
  {
    id: "106",
    title: "Golden Coast Bungalow",
    location: "Byron Bay, Australia",
    price: 295,
    rating: 4.79,
    reviewCount: 88,
    category: "beach",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    roomPhotos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1400&q=80",
    ],
    hostName: "Sophia",
    hostAvatarUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
    yearsHosting: 3,
    amenities: ["Garden", "Outdoor shower", "Wifi", "Kitchen", "Parking"],
  },
  {
    id: "107",
    title: "Heritage Manor Escape",
    location: "Cotswolds, UK",
    price: 610,
    rating: 4.97,
    reviewCount: 51,
    category: "mansions",
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    roomPhotos: [
      "https://images.unsplash.com/photo-1600607687644-c7f34b5063ec?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1400&q=80",
    ],
    hostName: "George",
    hostAvatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    yearsHosting: 10,
    amenities: ["Library", "Fire pit", "Large kitchen", "Game room", "Parking"],
  },
  {
    id: "108",
    title: "Nordic Lake Cabin",
    location: "Rovaniemi, Finland",
    price: 335,
    rating: 4.89,
    reviewCount: 119,
    category: "cabins",
    imageUrl:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    roomPhotos: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1400&q=80",
    ],
    hostName: "Aino",
    hostAvatarUrl:
      "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=300&q=80",
    yearsHosting: 6,
    amenities: ["Sauna", "Lake view", "Wood stove", "Wifi", "Parking"],
  },
];
