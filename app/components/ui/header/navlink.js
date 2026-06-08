"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    children: [
      { name: "All Products", href: "/products" },
      { name: "New Arrivals", href: "/products/new-arrivals" },
      { name: "Best Sellers", href: "/products/best-sellers" },
      { name: "Deals", href: "/products/deals" },
    ],
  },
  {
    name: "Category",
    children: [
      { name: "Electronics", href: "/category/electronics" },
      { name: "Clothing", href: "/category/clothing" },
      { name: "Groceries", href: "/category/groceries" },
      { name: "Home & Kitchen", href: "/category/home-kitchen" },
    ],
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DropdownItem({ link, isOpen, onToggle, onClose }) {
  return (
    <li className="relative">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-3 text-sm font-medium text-zinc-700 transition-colors hover:text-[#F53E32]"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {link.name}
        <ChevronIcon open={isOpen} />
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full z-20 mt-1 min-w-[180px] rounded-lg border border-zinc-200 bg-white py-1 shadow-lg">
          {link.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onClose}
                className="block px-4 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-[#F53E32]"
              >
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navlinks() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeDropdown = () => setOpenDropdown(null);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {navLinks.map((link) =>
          link.children ? (
            <DropdownItem
              key={link.name}
              link={link}
              isOpen={openDropdown === link.name}
              onToggle={() =>
                setOpenDropdown((current) =>
                  current === link.name ? null : link.name
                )
              }
              onClose={closeDropdown}
            />
          ) : (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block px-3 py-3 text-sm font-medium text-zinc-700 transition-colors hover:text-[#F53E32]"
              >
                {link.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
