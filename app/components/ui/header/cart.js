import Link from "next/link";

function CartIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.25 3h1.5l1.5 12.75A2.25 2.25 0 007.488 18h9.024a2.25 2.25 0 002.238-2.25L20.25 6.75H5.625" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 21a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM18.75 21a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
    </svg>
  );
}

export default function Cart({ count = 0 }) {
  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-zinc-700 transition-colors hover:text-[#F53E32]"
      aria-label={`Cart${count ? `, ${count} items` : ""}`}
    >
      <CartIcon />
      <span>Cart</span>
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
