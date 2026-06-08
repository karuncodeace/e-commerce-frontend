import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block leading-none">
      <h1 className="font-heading text-2xl font-bold tracking-tight text-zinc-900">
        Foodzy
      </h1>
      <p className="mt-1 text-[11px] text-zinc-500">A Treasure of Tastes</p>
    </Link>
  );
}
