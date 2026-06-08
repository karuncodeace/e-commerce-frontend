"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function ProfileIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 19.125c0-3.106 3.02-5.625 6.75-5.625s6.75 2.519 6.75 5.625" />
    </svg>
  );
}

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("token")));
  }, []);

  return (
    <Link
      href={isLoggedIn ? "/profile" : "/login"}
      className="flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-zinc-700 transition-colors hover:text-[#F53E32]"
      aria-label={isLoggedIn ? "View profile" : "Login"}
    >
      <ProfileIcon />
      <span>{isLoggedIn ? "Profile" : "Login"}</span>
    </Link>
  );
}
