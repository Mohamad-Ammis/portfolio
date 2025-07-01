"use client";
import Image from "next/image";

export default function LandingProfileImage() {
  return (
    <div className="  ">
      <Image
        src="/me.png"
        alt="me"
        width={500}
        height={500}
        className="hidden lg:block object-cover w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-full shadow-xl relative z-10"
      />
    </div>
  );
}
