"use client";

import AdminNavBar from "./navlinks/adminNavlinks";
import Profile from "./profile";
import Wishlist from "./wishlist";
import Cart from "./cart";
import { useIsAdmin } from "../../../hooks/useIsAdmin";

export default function Navlinks() {
  const isAdmin = useIsAdmin();
  return(
    <>
    {isAdmin ? <AdminNavBar /> : 
    
    <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4">
        <Profile/>
          <Wishlist />
          <Cart />
    </div>
    
    
    }
    
    
    </>
  )
  
}
