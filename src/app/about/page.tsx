"use client";
import BlurText from "@/core/components/BlueText";
import CustomSectionHeader from "@/core/components/custom_section_header";
import SplitText from "@/core/components/SplitText";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div
      id="about-us"
      className="w-full overflow-x-hidden min-h-screen px-8 md:px-4 pt-10  "
    >
      <div className="flex items-center justify-center ">
        <CustomSectionHeader title="About me" />
      </div>

      <div className="flex flex-col md:flex-row justify-center  lg:gap-x-40 items-center max-w-6xl mx-auto gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/about_me.png"
            alt="About me image"
            width={500}
            height={500}
            className="rounded-xl object-contain w-full max-w-[500px] h-auto"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 text-left text-text-secondry leading-7">
          <div className="text-4xl font-bold text-text-primary mb-4">
            <BlurText text="👋Mohamad Ammis" />
            <SplitText
              text="I'm Mohamad Ammis, a passionate Flutter developer with a strong focus on building clean, high-performance, and user-friendly mobile applications. 

I love turning ideas into elegant digital experiences — combining beautiful UI with smooth functionality. Whether it's crafting modern animations or solving complex state management problems, I enjoy every step of the development process.
Beyond the code, I believe in writing scalable and maintainable software that provides real value to people. I’m also constantly learning and exploring new technologies to stay ahead in the ever-evolving mobile world.
When I'm not coding, you’ll probably find me lifting weights, enjoying a good coffee, or exploring new ideas to turn into my next side project.
"
              className="mt-4 lg:text-[15px] text-[13px] !text-text-secondry   leading-loose "
              delay={30}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="start"
              onLetterAnimationComplete={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
