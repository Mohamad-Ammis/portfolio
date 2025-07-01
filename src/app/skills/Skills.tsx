// sections/LandingSkills.tsx (أو أينما تضع الكومبوننت الرئيسي)
"use client";

import CustomSectionHeader from "@/core/components/custom_section_header";
import SkillCard from "./components/tool_card";

const tools = [
  {
    name: "Flutter",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Dart",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    name: "Firebase",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "C++",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Java",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "HTML",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Git",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Android Studio",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "VS Code",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Figma",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Postman",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full overflow-x-hidden px-4 mt-10 min-h-screen pb-4 pt-8 lg:pt-0 lg:pb-0 bg-deep-background"
    >
      <div className=" bg-deep-background flex flex-col min-h-screen justify-center items-center text-center ">
        <CustomSectionHeader title="Skills and Tools" />

        <div
          className="grid gap-y-6 gap-x-3 mb-10 w-full max-w-6xl"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {tools.map((tool, index) => (
            <SkillCard
              key={tool.name}
              name={tool.name}
              iconUrl={tool.iconUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
