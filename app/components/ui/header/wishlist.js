import Link from "next/link";

function WishlistIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

export default function Wishlist({ count = 0 }) {
  return (
    <Link
      href="/wishlist"
      className="relative flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-zinc-700 transition-colors hover:text-[#F53E32]"
      aria-label={`Wishlist${count ? `, ${count} items` : ""}`}
    >
      <WishlistIcon />
      <span>Wishlist</span>
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
