"use client";
import Galaxy from "@/components/Galaxy";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import CustomNavBar from "./components/custom_nav_bar";
import LandingAboutMeInfo from "./components/landing_about_me_info";

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
      {/* Background Animation - Galaxy */}
      {isDark && (
        <div className="absolute inset-0 z-0">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1}
            glowIntensity={0.3}
            twinkleIntensity={0.5}
            repulsionStrength={5.0}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
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
          {/* <LandingProfileImage /> */}
        </div>
      </div>
    </div>
  );
}
