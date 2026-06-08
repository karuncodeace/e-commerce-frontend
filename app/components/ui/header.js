import Logo from "./header/logo";
import Navlinks from "./header/navlink";
import SearchBar from "./header/search-bar";
import Profile from "./header/profile";
import Wishlist from "./header/wishlist";
import Cart from "./header/cart";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-100 bg-white border-[#E9E9E9] border-1">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4 sm:gap-6 sm:px-6">
        <div className="shrink-0">
          <Logo />
        </div>

        <div className="hidden min-w-0 flex-1 justify-center px-4 lg:flex">
          <SearchBar />
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
          <Profile />
          <Wishlist />
          <Cart />
        </div>
      </div>

     
    </header>
  );
}
