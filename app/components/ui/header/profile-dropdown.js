export default function ProfileDropdown({ email }) {
  return (
    <div className="absolute top-12 -right-35 w-56 rounded-xl border border-[#E9E9E9] bg-white p-2 shadow-lg">
      <button
        type="button"
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-black transition-colors hover:bg-gray-100"
      >
        <svg
          className="size-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M4.5 19.125c0-3.106 3.02-5.625 6.75-5.625s6.75 2.519 6.75 5.625"
          />
        </svg>

        <span className="truncate text-sm font-medium">
          {email || "Hey Buddy"}
        </span>
      </button>

      <div className="my-1 border-t border-gray-100" />

      <button
        type="button"
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-red-600 transition-colors hover:bg-red-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m16 17 5-5-5-5" />
          <path d="M21 12H9" />
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        </svg>

        <span className="text-sm font-medium">Logout</span>
      </button>
    </div>
  );
}
