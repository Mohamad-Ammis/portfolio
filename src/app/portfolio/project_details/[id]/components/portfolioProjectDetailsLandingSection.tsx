import FadeContent from "@/components/FadeContent";
import BlurText from "@/core/components/BlueText";
import SplitText from "@/core/components/SplitText";
import { PortfolioInterface } from "@/lib/interfaces/portfolioInterface";
import { useTheme } from "next-themes";
import Image from "next/image";
import { IoIosArrowDown, IoIosLink } from "react-icons/io";
export default function PortfolioProjectDetailsLandingSection({
  portfolioInterface,
}: {
  portfolioInterface: PortfolioInterface;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      className="w-full h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${portfolioInterface.thumbnail})` }}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <Image
            src={portfolioInterface.projectDetails.logo}
            width={250}
            height={100}
            alt="rahhal"
            className="mb-8 object-cover"
          />
        </FadeContent>

        <BlurText
          text={portfolioInterface.projectDetails.title}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => {}}
          className="text-5xl font-bold text-white mb-2"
        />
        <SplitText
          text={portfolioInterface.projectDetails.slogan}
          className={`mt-4 text-lg md:text-l leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
          delay={30}
          duration={2}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
          onLetterAnimationComplete={() => {}}
        />

        {/* links */}
        <div className="flex flex-row items-center gap-4 mt-5">
          {portfolioInterface.projectDetails.links.map((e) => (
            <button
              key={portfolioInterface.id}
              className="max-w-[200px] relative flex flex-row items-center gap-x-2 overflow-hidden text-[var(--text-primary)] hover:text-[var(--onPrimary)] px-6 py-2 rounded-[8px] cursor-pointer transition-all duration-300 border border-white/50 hover:border-primary
            after:content-[''] after:absolute after:inset-0 after:bg-[var(--primary)] after:z-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              <IoIosLink className="relative z-10" />
              <span className="relative z-10">{e.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Animated arrow down */}
      <div
        onClick={() => {
          const aboutProjectSection = document.getElementById("about_project");
          if (aboutProjectSection) {
            aboutProjectSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute cursor-pointer bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <IoIosArrowDown size={32} />
      </div>
    </div>
  );
}
