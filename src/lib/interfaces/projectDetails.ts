import { ProjectDetailsLinksInterface } from "./projectDetailsLinksInterface";

export interface ProjectDetailsInterface {
  logo: string;
  title: string;
  slogan: string;
  links: ProjectDetailsLinksInterface[];
  aboutProject: string;
  gallery: string[];
}
