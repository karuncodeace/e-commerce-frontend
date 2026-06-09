"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProfileDropdown from "./profile-dropdown";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/auth";

function ProfileIcon() {
  return (
    <svg className="size-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 19.125c0-3.106 3.02-5.625 6.75-5.625s6.75 2.519 6.75 5.625" />
    </svg>
  );
}

export default function Profile() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    if (!storedToken) {
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(`${API_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        const data = await response.json();

        if (data.success && data.data?.email) {
          setEmail(data.data.email);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropDown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    if (!token) {
      router.push("/login");
      return;
    }

    setIsDropDown((prev) => !prev);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={handleProfileClick}
      >
        <ProfileIcon />
        <span className="text-[14px] font-sans leading-none text-black">
          {token ? "Profile" : "Login"}
        </span>
      </div>

      {token && isDropDown && <ProfileDropdown email={email} />}
    </div>
  );
}
