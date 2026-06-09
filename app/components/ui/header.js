import Logo from "./header/logo";

import HeaderSearchBar from "./header/header-search-bar";
import Navlinks from "./header/navlink";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-100 bg-white border-[#E9E9E9] border-1">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4 sm:gap-6 sm:px-6">
        <div className="shrink-0">
          <Logo />
        </div>

        <HeaderSearchBar />

        <div className="ml-auto shrink-0">
          <Navlinks />
        </div>
      </div>

     
    </header>
  );
}
