"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py- bg-[#7D392D]">
      
      <div
        className="
          flex
          items-center
          justify-between
          w-full
          max-w-[650px]
          px-6
          py-3
          bg-[#D2A273]
          rounded-full
          shadow-md
        "
      >
        
        {/* Logo */}
        <div className="text-[#6D322F] font-bold text-lg">
          🐻 Beariel
        </div>

        {/* Menu */}
        <div className="flex gap-3">
          <Link
            href="/"
            className="
              bg-[#753732]
              text-white
              px-5
              py-2
              rounded-full
              text-sm
              hover:opacity-90
              transition
            "
          >
            Home
          </Link>
        </div>

      </div>

    </nav>
  );
}