"use client";
import CustomSectionHeader from "@/core/components/custom_section_header";
import SocialCard from "./components/social_card";

export default function GetInTouch() {
  const socials = [
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      title: "linkedin",
      link: "https://www.linkedin.com/in/mohamad-ammis",
    },
    // {
    //   image:
    //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    //   title: "facebook",
    //   link: "https://www.linkedin.com/in/mohamad-ammis",
    // },
    {
      image: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
      title: "Github",
      link: "https://github.com/Mohamad-Ammis/",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/128/2504/2504727.png",
      title: "Gmail",
      link: "mailto:mohamad.ammis@gmail.com",
    },
  ];
  return (
    <div className="bg-deep-background flex items-center justify-center flex-col px-4 pt-10 pb-2">
      <CustomSectionHeader title="Get in touch" />
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] w-full max-w-5xl px-10 md:px-4 ">
        {socials.map((e, index) => {
          return (
            <SocialCard
              image={e.image}
              title={e.title}
              key={index}
              link={e.link}
            />
          );
        })}
      </div>
      <p className="mt-10 text-[13px] text-center">
        © 2025 Mohamad Ammis. All rights reserved.
      </p>
    </div>
  );
}
