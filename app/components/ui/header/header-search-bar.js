"use client";

import SearchBar from "./search-bar";
import { useIsAdmin } from "../../../hooks/useIsAdmin";

export default function HeaderSearchBar() {
  const isAdmin = useIsAdmin();

  if (isAdmin) {
    return null;
  }

  return (
    <div className="hidden min-w-0 flex-1 justify-center px-4 lg:flex">
      <SearchBar />
    </div>
  );
}
