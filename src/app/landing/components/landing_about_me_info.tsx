"use client";
import BlurText from "@/core/components/BlueText";
import SplitText from "@/core/components/SplitText";
import { useTheme } from "next-themes";

export default function LandingAboutMeInfo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="md:w-1/2 text-center md:text-left">
      <BlurText
        text="👋Hello i'am "
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={() => {}}
        className="text-4xl md:text-5xl font-bold "
      />
      <BlurText
        text="Mohamad Ammis"
        delay={300}
        animateBy="words"
        direction="bottom"
        onAnimationComplete={() => {}}
        className="text-4xl md:text-5xl font-bold text-primary"
      />
      <SplitText
        text="Turning Ideas Into Beautiful & Functional Flutter Apps.

I craft cross-platform mobile experiences with a focus on performance, clean code, and elegant design.
"
        className={`mt-4 text-lg md:text-xl leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
        delay={30}
        duration={0.6}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="start"
        onLetterAnimationComplete={() => {}}
      />

      <div className="mt-8 flex  justify-start  flex-row items-center gap-4">
        <button className="h-14 max-w-[200px] bg-primary hover:bg-[#7c5eff] text-white px-7 py-2 rounded-[8px] cursor-pointer transition-all duration-300">
          <span className="relative z-10">Contact</span>
        </button>

        <button
          className="h-14 max-w-[200px] relative overflow-hidden text-[var(--text-primary)] hover:text-[var(--onPrimary)] px-7 py-2 rounded-[8px] cursor-pointer transition-all duration-300 border border-[var(--primary)]
          after:content-[''] after:absolute after:inset-0 after:bg-[var(--primary)] after:z-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
        >
          <span className="relative z-10">Download CV</span>
        </button>
      </div>
    </div>
  );
}
