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
      className="w-full min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${portfolioInterface.thumbnail})` }}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center px-4 text-center md:text-left">
        {/* Logo */}
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <Image
            src={portfolioInterface.projectDetails.logo}
            width={220}
            height={90}
            alt="rahhal"
            className="mb-6 object-contain max-w-[180px] sm:max-w-[220px] md:max-w-[250px]"
          />
        </FadeContent>

        {/* Title */}
        <BlurText
          text={portfolioInterface.projectDetails.title}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => {}}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-snug"
        />

        {/* Slogan */}
        <SplitText
          text={portfolioInterface.projectDetails.slogan}
          className={`mt-2 sm:mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-[90%] sm:max-w-[70%] lg:max-w-[60%] ${
            isDark ? "text-gray-300" : "text-gray-200"
          }`}
          delay={30}
          duration={2}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => {}}
        />

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4 mt-6">
          {portfolioInterface.projectDetails.links.map((e) => (
            <a
              key={e.link}
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-row items-center gap-x-2 text-sm sm:text-base overflow-hidden text-[var(--text-primary)] hover:text-[var(--onPrimary)] px-4 sm:px-6 py-2 rounded-lg cursor-pointer transition-all duration-300 border border-white/50 hover:border-primary
                after:content-[''] after:absolute after:inset-0 after:bg-[var(--primary)] after:z-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              <IoIosLink className="relative z-10" />
              <span className="relative z-10">{e.title}</span>
            </a>
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
        <IoIosArrowDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
      </div>
    </div>
  );
}
