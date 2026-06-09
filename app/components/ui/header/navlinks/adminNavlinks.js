"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, ClipboardList, LayoutGrid } from "lucide-react";

export const adminNavlinks = [
  {
    name: "Admin Profile",
    href: "/admin/profile",
    icon: User,
  },
  {
    name: "Admin Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Manage Orders",
    href: "/admin/orders",
    icon: ClipboardList,
  },
  {
    name: "Manage Categories",
    href: "/admin/categories",
    icon: LayoutGrid,
  },
];

export default function AdminNavBar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin navigation">
      <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
        {adminNavlinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#F53E32]"
                    : "text-zinc-700 hover:text-[#F53E32]"
                }`}
              >
                <Icon className="size-5 shrink-0" strokeWidth={1.8} aria-hidden="true" />
                <span className="whitespace-nowrap">{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
