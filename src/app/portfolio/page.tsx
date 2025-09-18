import CustomSectionHeader from "@/core/components/custom_section_header";
import { data } from "@/lib/data";
import PortfolioProjectCard from "./components/portfolio_project_card";

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className="w-full overflow-x-hidden min-h-screen bg-background "
    >
      <div className="flex flex-col min-h-full items-center justify-start   bg-background text-center pt-10 py-10 px-4 transition-all duration-300">
        <CustomSectionHeader title="Portfolio" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-full max-w-6xl transition-all duration-300">
          {data.map((e, index) => (
            <PortfolioProjectCard
              portfolioInterface={e}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
