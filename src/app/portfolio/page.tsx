import CustomSectionHeader from "@/core/components/custom_section_header";
import PortfolioProjectCard from "./components/portfolio_project_card";

export default function Portfolio() {
  const projects = [
    {
      image: "/portfolio.png",
      title: "App Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      image: "/portfolio1.png",
      title: "App Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      image: "/portfolio2.png",
      title: "App Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      image: "/portfolio1.png",
      title: "App Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      image: "/portfolio2.png",
      title: "App Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      image: "/portfolio.png",
      title: "App Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];
  return (
    <div
      id="portfolio"
      className="w-full overflow-x-hidden min-h-screen bg-background "
    >
      <div className="flex flex-col min-h-screen items-center justify-center   bg-background text-center pt-10 py-10 px-4 transition-all duration-300">
        <CustomSectionHeader title="Portfolio" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-full max-w-6xl transition-all duration-300">
          {projects.map((e, index) => (
            <PortfolioProjectCard
              key={e.image + index}
              image={e.image}
              title={e.title}
              description={e.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
