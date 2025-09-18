"use client";

import { data } from "@/lib/data";
import { notFound, useParams } from "next/navigation";
import PortfolioProjectDetailsAboutProjectSection from "./components/portfolioProjectDetailsAboutProjectSection";
import PortfolioProjectDetailsGallerySection from "./components/portfolioProjectDetailsGallerySection";
import PortfolioProjectDetailsLandingSection from "./components/portfolioProjectDetailsLandingSection";

export default function PortfolioProjectDetails() {
  const params = useParams();

  if (!params["id"] || !data) return notFound();

  const id = Number(params["id"]);

  const project = data.find((e) => e.id === id);
  if (!project) {
    return notFound();
  }
  return (
    <>
      <PortfolioProjectDetailsLandingSection portfolioInterface={project} />
      <PortfolioProjectDetailsAboutProjectSection  portfolioInterface={project}/>
      <PortfolioProjectDetailsGallerySection  portfolioInterface={project}/>
    </>
  );
}
