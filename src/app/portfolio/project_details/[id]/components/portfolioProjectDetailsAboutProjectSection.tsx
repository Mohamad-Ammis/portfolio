import BlurText from "@/core/components/BlueText";
import CustomSectionHeader from "@/core/components/custom_section_header";
import { PortfolioInterface } from "@/lib/interfaces/portfolioInterface";

export default function PortfolioProjectDetailsAboutProjectSection({
  portfolioInterface,
}: {
  portfolioInterface: PortfolioInterface;
}) {
  return (
    <div
      id="about_project"
      className="h-full flex flex-col items-center py-10  justify-start  bg-card-background-color px-4"
    >
      <CustomSectionHeader title={"About the project"} className="!mb-8 " />
      <BlurText
        text={portfolioInterface.projectDetails.aboutProject}
        delay={50}
        animateBy="words"
        direction="top"
        onAnimationComplete={() => {}}
        className="max-w-3xl text-center flex items-center justify-center   text-gray-600 dark:text-gray-300"
      />
    </div>
  );
}
