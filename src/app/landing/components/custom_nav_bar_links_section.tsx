import CustomNavBarItem from "./custom_nav_bar_item";

export default function CustomNavBarLinksSection() {
  return (
    <div className="flex gap-x-8 lg:flex-row flex-col  w-full justify-around items-start lg:items-center gap-y-8 lg:gap-0  ">
      <CustomNavBarItem title="Home" />
      <CustomNavBarItem title="Skills" href="#skills" />
      <CustomNavBarItem title="Projects" href="#portfolio" />
      <CustomNavBarItem title="About me" href="#about-us" />
    </div>
  );
}
