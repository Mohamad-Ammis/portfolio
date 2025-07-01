// CustomNavBar.tsx
"use client";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import CustomNavBarActionsSection from "./custom_nav_bar_actions_section";
import CustomNavBarLinksSection from "./custom_nav_bar_links_section";

export default function CustomNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[rgba(255,255,255,0.05)] px-10 text-white shadow blur-[80] shadow-[rgb(0,0,0,0.1)]">
      <div className="relative px-5 py-7">
        <div className="grid grid-cols-3 items-center">
          <div className="justify-self-start">
            <p className="text-2xl font-bold text-primary poppins">
              Mohamad Ammis
            </p>
          </div>
          <div className="hidden lg:flex justify-center">
            <CustomNavBarLinksSection />
          </div>
          <div className="hidden lg:flex justify-self-end">
            <CustomNavBarActionsSection />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground text-3xl absolute top-1/2 right-5 -translate-y-1/2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 items-center px-5 pb-8 lg:hidden animate-in fade-in duration-300">
          <CustomNavBarLinksSection />
          <CustomNavBarActionsSection />
        </div>
      )}
    </div>
  );
}
