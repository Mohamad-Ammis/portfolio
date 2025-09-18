import { ProjectDetailsInterface } from "./projectDetails";

export interface PortfolioInterface {
  id:number;
  thumbnail: string;
  appName: string;
  shortDescription: string;
  projectDetails: ProjectDetailsInterface;
}
