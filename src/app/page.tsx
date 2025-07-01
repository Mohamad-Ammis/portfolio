import AboutMe from "./about/page";
import GetInTouch from "./get_in_touch/page";
import Landing from "./landing/page";
import Portfolio from "./portfolio/page";
import Skills from "./skills/Skills";
export default function Home() {
  return (
    <>
      <Landing />
      <AboutMe />
      <Skills />
      <Portfolio />
      <GetInTouch />
    </>
  );
}
