# Airbnb Clone - Project Context

## Table of Contents

1. [Technologies](#technologies)
2. [Logo Component](#logo-component)
3. [Component Specifications](#component-specifications)
   - [Page-Level Layouts](#page-level-layout-components)
   - [Header & Navigation](#header--navigation-components)
   - [Listing Components](#listing-components)
   - [Location & Section Components](#location--section-components)
   - [Listing Detail Components](#listing-detail-components)
   - [Map Components](#map-components)
   - [Filter Components](#filter-components)
   - [Footer Components](#footer-components)
4. [Implementation Requirements](#implementation-requirements)

---

## Technologies

- **React** - UI library for component-based development
- **Next.js** - Framework for routing and page management
- **Tailwind CSS** - Utility-first CSS framework for styling

---

## Logo Component

Based on the desktop screenshot, here's the detailed specification for the Airbnb Logo component.

### `Logo`

**Visual Description:**
The Airbnb logo consists of two parts displayed horizontally:

1. **Bélo Symbol** - The iconic curved "A" shape (resembling a location pin, heart, and person combined)
2. **Wordmark** - Lowercase "airbnb" text

Both elements use the brand's signature coral/red color (`#FF5A5F`).

**Props:**

```typescript
interface LogoProps {
  /** Display variant */
  variant?: 'full' | 'symbol' | 'wordmark'
  
  /** Size preset */
  size?: 'sm' | 'md' | 'lg'
  
  /** Custom color override (defaults to brand coral #FF5A5F) */
  color?: string
  
  /** Link destination (typically homepage) */
  href?: string
  
  /** Accessible label for screen readers */
  ariaLabel?: string
  
  /** Click handler */
  onClick?: () => void
}
```

**Size Specifications:**

| Size | Symbol Height | Wordmark Font Size | Total Width |
|------|---|---|---|
| `sm` | 24px | 16px | ~80px |
| `md` | 32px | 20px | ~102px |
| `lg` | 40px | 24px | ~130px |

**Layout:**

```plaintext
Header
├── Logo (left-aligned)
│   ├── BéloSymbol
│   └── Wordmark
├── Navigation (center)
│   └── CategoryTabs
└── UserActions (right-aligned)
    ├── BecomeHostLink
    ├── LanguageSelector
    └── UserMenu
```

**Component Implementation:**

```typescript
interface BéloSymbolProps {
  size: number
  color: string
}

interface WordmarkProps {
  fontSize: number
  color: string
}
```

**Responsive Behavior:**

| Breakpoint | Display |
|---|---|
| Mobile (`< 768px`) | Symbol only OR hidden (search bar prominent) |
| Tablet (`768px - 1024px`) | Full logo, smaller size |
| Desktop (`> 1024px`) | Full logo, standard size |

**Header Integration:**

```plaintext
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]          [Homes] [Experiences] [Services]    [Host][Menu]│
│  ◯ airbnb            🏠        🎈           🛎                   │
├─────────────────────────────────────────────────────────────────┤
│            ┌──────────────────────────────────────┐             │
│            │ Where    │ When    │ Who   │ What  🔍│             │
│            └──────────────────────────────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```

**Accessibility:**
- Wrapped in an `<a>` tag linking to homepage (`/`)
- Contains `aria-label="Airbnb homepage"` for screen readers
- The SVG symbol has `aria-hidden="true"` since the aria-label covers it
- Focus state shows visible outline for keyboard navigation
- Primary colors: Coral/Rausch (`#FF5A5F`), darker hover state (`#FF385C`), white variant for dark backgrounds

This logo component serves as the primary brand identifier and navigation anchor, positioned in the top-left of the header across all page types.

---

## Component Specifications

Comprehensive breakdown of the component architecture based on the provided screenshots.

## Page-Level Layout Components

### `SearchResultsPage`

**Layout:** Single column with map toggle

- Contains: `Header`, `FilterBar`, `ListingGrid`, `MapView`, `FeaturedSection`


### `HomePage`

**Layout:** Full-width sections stacked vertically

- Contains: `Header`, `CategoryTabs`, `LocationSection[]`, `InspirationSection`, `Footer`


### `ListingDetailPage`

**Layout:** Single column, content-focused

- Contains: `ImageGallery`, `ListingHeader`, `HostInfo`, `Description`, `AmenitiesList`, `LocationMap`, `CalendarPicker`, `ReviewsSection`, `HostCard`, `NearbyListings`, `Footer`

---

## Header & Navigation Components

### `Header`

```typescript
interface HeaderProps {
  variant: 'minimal' | 'full'
  showSearch?: boolean
}
```

**Children:** `Logo`, `SearchBar`, `UserMenu`

### `SearchBar`

```typescript
interface SearchBarProps {
  placeholder?: string
  value?: string
  onSearch: (query: string) => void
  variant: 'pill' | 'expanded'
}
```

### `SearchModal`

```typescript
interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  defaultTab?: 'homes' | 'experiences' | 'services'
}
```

**Children:** `CategoryTabs`, `SearchInput`, `RecentSearches`, `SuggestedDestinations`, `ActionButtons`

### `CategoryTabs`

```typescript
interface CategoryTabsProps {
  tabs: Array<{
    id: string
    label: string
    icon: ReactNode
  }>
  activeTab: string
  onChange: (tabId: string) => void
}
```

---

## Listing Components

### `ListingCard`

```typescript
interface ListingCardProps {
  id: string
  images: string[]
  title: string
  location: string
  price: number
  currency?: string
  period?: string // "night" | "2 nights"
  rating?: number
  reviewCount?: number
  isSuperhost?: boolean
  isGuestFavorite?: boolean
  dates?: string
  onClick?: () => void
}
```

**Children:** `ImageCarousel`, `GuestFavoriteBadge`, `ListingInfo`, `PriceTag`

### `ImageCarousel`

```typescript
interface ImageCarouselProps {
  images: string[]
  showDots?: boolean
  showArrows?: boolean
  aspectRatio?: '1:1' | '4:3' | '16:9'
}
```

### `GuestFavoriteBadge`

```typescript
interface GuestFavoriteBadgeProps {
  variant: 'overlay' | 'inline'
}
```

### `PriceTag`

```typescript
interface PriceTagProps {
  amount: number
  currency: string
  period: string
  originalPrice?: number // for discounts
}
```

### `RatingDisplay`

```typescript
interface RatingDisplayProps {
  rating: number
  reviewCount?: number
  showCount?: boolean
  size?: 'sm' | 'md' | 'lg'
}
```

## Location & Section Components

### `LocationSection`

```typescript
interface LocationSectionProps {
  title: string
  location: string
  listings: ListingCardProps[]
  showViewAll?: boolean
}
```

**Children:** `SectionHeader`, `HorizontalScroll<ListingCard>`

### `SectionHeader`

```typescript
interface SectionHeaderProps {
  title: string
  subtitle?: string
  actionText?: string
  onActionClick?: () => void
}
```

### `FeaturedHotels`

```typescript
interface FeaturedHotelsProps {
  title: string
  location: string
  categories: string[]
  hotels: ListingCardProps[]
}
```

**Children:** `CategoryPills`, `ListingGrid`

---

## Listing Detail Components

### `ImageGallery`

```typescript
interface ImageGalleryProps {
  images: string[]
  showAllButton?: boolean
  onImageClick?: (index: number) => void
}
```

### `ListingHeader`

```typescript
interface ListingHeaderProps {
  title: string
  location: string
  propertyType: string
  guestCount: number
  bedroomCount: number
  bedCount: number
  bathCount: number
}
```

### `HostInfo`

```typescript
interface HostInfoProps {
  name: string
  avatar: string
  hostingDuration: string
  isSuperhost: boolean
  responseRate?: number
  responseTime?: string
}
```

**Children:** `Avatar`, `SuperhostBadge`, `HostStats`

### `AmenitiesList`

```typescript
interface AmenitiesListProps {
  amenities: Array<{
    icon: string
    label: string
    description?: string
  }>
  maxVisible?: number
  showAllButton?: boolean
}
```

### `CalendarPicker`

```typescript
interface CalendarPickerProps {
  checkIn?: Date
  checkOut?: Date
  blockedDates?: Date[]
  minNights?: number
  maxNights?: number
  onDateChange: (checkIn: Date, checkOut: Date) => void
}
```

### `ReviewsSection`

```typescript
interface ReviewsSectionProps {
  overallRating: number
  totalReviews: number
  categories: Array<{
    name: string
    rating: number
  }>
  reviews: ReviewProps[]
}
```

### `ReviewCard`

```typescript
interface ReviewCardProps {
  author: string
  avatar: string
  date: string
  location?: string
  content: string
  rating?: number
}
```

### `HostCard`

```typescript
interface HostCardProps {
  name: string
  avatar: string
  rating: number
  reviewCount: number
  yearsHosting: number
  isSuperhost: boolean
  bio?: string
  highlights: string[]
}
```

**Children:** `Avatar`, `HostStats`, `MessageButton`

### `ThingsToKnow`

```typescript
interface ThingsToKnowProps {
  sections: Array<{
    title: string
    icon: string
    items: string[]
  }>
}
```

## Map Components

### `MapView`

**Props:**

```typescript
interface MapViewProps {
  center: { lat: number; lng: number }
  zoom: number
  markers: MapMarkerProps[]
  onMarkerClick?: (id: string) => void
}
```

---

### `MapMarker`

```typescript
interface MapMarkerProps {
  id: string
  position: { lat: number; lng: number }
  price: number
  isSelected?: boolean
}
```

---

## Filter Components

### `FilterBar`

```typescript
interface FilterBarProps {
  filters: FilterOption[]
  activeFilters: string[]
  onFilterChange: (filters: string[]) => void
}
```

### `FilterPill`

```typescript
interface FilterPillProps {
  label: string
  isActive: boolean
  onClick: () => void
  icon?: ReactNode
}
```

## Footer Components

### `Footer`

```typescript
interface FooterProps {
  sections: FooterSection[]
  showLanguageSelector?: boolean
  showCurrencySelector?: boolean
}
```

### `InspirationSection`

```typescript
interface InspirationSectionProps {
  title: string
  tabs: string[]
  destinations: Array<{
    city: string
    type: string
  }>
}
```

---

## Implementation Requirements

**Core Guidelines:**
- Use Next.js `<Link>` for all navigation between pages
- Update component state on every keystroke where needed

**Constraints:**
- Do not use any pre-built UI component library
- Do not use traditional CSS; use only Tailwind for all styling

### Home Page Features

The homepage serves as the main entry point with search capabilities and curated listings.

**Navigation Bar**
- Logo, search bar input, and user menu icons
- Search bar uses `useState` to track typed values and filter visible listing cards in real time

**Category Filters**
- Horizontal category filter row below navbar (Beach, Mansions, Trending, etc.)
- `useState` tracking for active category with visual highlighting

**Listing Grid**
- Responsive card grid showing: photo placeholder, title, price per night, and star rating
- `useEffect` simulates loading data on page mount: empty list → loading state true → setTimeout 1s → data loaded
- Loading indicator displayed while data loads
- Single column on mobile, multiple columns on desktop

### Catalog Page Features

The catalog/search results page allows users to browse and filter properties with optional map view.

**Results Header**
- Display number of results
- Sort control (ascending/descending by price)
- `useState` tracking for sort order with dynamic card reordering

**Listing Cards**
- Reuse components from home page
- Maintain consistent styling and functionality

**Map Integration**
- Map area positioned to the right of card list (desktop)
- Map area positioned below cards (mobile)
- Default styled placeholder: gray box with "map" text

### Room Detail Page Features

In-depth property information with booking capabilities.

**Photo Gallery**
- Gallery at top with multiple photo placeholders
- `useState` tracks currently displayed photo index
- Previous/Next buttons to cycle through photos

**Property Information**
- Listing heading: title, star rating, number of reviews, location
- Host info row: avatar placeholder, host name, years hosting

**Amenities Section**
- Grid layout of icon + label pairs

**Booking Card**
- Price per night display
- Guest counter: `useState` for incrementing/decrementing within min/max range
- Clear CTA button

### Navigation & Routing

- Clicking listing cards navigates to Room detail page
- Back button or breadcrumb returns from room details to catalog
- All routing uses Next.js `<Link>` component
Implement the top navigation bar: logo, search bar input and user menu icons
Search bar must useState to track the typed value and filter the visible listing cards in real time as the user types, the list of of cards is your local state -update it on every keystroke
Implement the horizontal category filter row below the navbar (icon + label per category: Beach, Mansions, Trending etc.). Use useState to track the active category and highlight the selected one visually
Implement a responsive grid of listing cards, each card must show: a photo placeholder, title, pricer per night and a star rating
Use useEffect to simulate loading the listing data when the page mounts: starts with an empty list, set a loading state to true, and after a short setTimeout of 1 second set the data and mark loading as false. Show loading indicator while the data is not yet available
The card grid must be a single column on a mobile and expand to multiple columns on desktop

Catalog Page
Implement the results header : number of results and a sort control (ascending/descending by price). Use useState to track the selected sort order and reorder the displayed cards accordingly
Reuse the listing card components from the home page
Add a map area to the right of the card list (desktop) or below the cards (mobile). By default, render a styled placeholder - a gray box with the text “map” is enough

Room Detail Page
Use useEffect to load the room data when the component mounts, using the id from the URL. Simulate the fetch with a setTimeout and show the loading state while the data is not yet available
Implement the photo gallery at the top. Use useState to track the currently displayed photo index and render Previous/Next buttons to cycle through a hardcoded array of photo placeholders
Implement the listing heading : title, star rating, number of reviews and location
Implement the host info row: avatar placeholder, host name, and years hosting
Implement the amenities  section as a grid of icon + label pairs
Implement the booking card: price per night, a guest counter (use useState to increase or decrease the number of guests within a min/max range), and a CTA button

Navigation
Clicking a listing card in the home or catalog page must navigate to the Room detail page
Use Next.js <Link> for all navigation between pages
Include a back button or breadcrumb in the room details page that returns to the catalog
