import Link from "next/link";

interface LogoProps {
  variant?: "full" | "symbol" | "wordmark";
  href?: string;
  ariaLabel?: string;
}

export function Logo({
  variant = "full",
  href = "/",
  ariaLabel = "StayNest homepage",
}: LogoProps) {
  return (
    <Link href={href} aria-label={ariaLabel} className="inline-flex items-center gap-1.5">
      {(variant === "symbol" || variant === "full") && (
        <span className="grid h-8 w-8 place-items-center rounded-full bg-rose-500 text-sm font-bold text-white">
          S
        </span>
      )}
      {(variant === "wordmark" || variant === "full") && (
        <span className="font-[family-name:var(--font-display)] text-2xl lowercase tracking-tight text-rose-500">
          staynest
        </span>
      )}
    </Link>
  );
}
