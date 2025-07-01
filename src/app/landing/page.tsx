"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import CustomNavBar from "./components/custom_nav_bar";
import LandingAboutMeInfo from "./components/landing_about_me_info";
import LandingProfileImage from "./components/landing_profile_image";

export default function Landing() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen w-screen bg-background" />;

  const isDark = theme === "dark";

  return (
    <div
      className={`relative h-screen w-screen overflow-hidden flex flex-col ${
        isDark ? "bg-black" : "bg-background-shade"
      }`}
    >
      {/* Background Animation - GIF */}
      {isDark && (
        <>
          <Image
            src="/test.gif"
            alt="Stars Background Animation"
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-30 pointer-events-none"
            priority
          />
          <div className="absolute inset-0 bg-black/70 z-0" />
        </>
      )}

      <div
        className={`relative z-10 flex flex-col w-full h-full ${
          !isDark
            ? "bg-deep-background shadow blur-[80] shadow-[rgb(0,0,0,0.1)]"
            : ""
        }`}
      >
        <CustomNavBar />

        <div className="flex flex-1 justify-center items-center flex-col md:flex-row px-10 gap-10 md:gap-30">
          <LandingAboutMeInfo />
          <LandingProfileImage />
        </div>
      </div>
    </div>
  );
}
