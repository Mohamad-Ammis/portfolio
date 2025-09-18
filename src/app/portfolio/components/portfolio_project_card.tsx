"use client";
import { PortfolioInterface } from "@/lib/interfaces/portfolioInterface";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface PortfolioProjectCard {
  portfolioInterface: PortfolioInterface;
  index: number;
}

export default function PortfolioProjectCard(props: PortfolioProjectCard) {
  const router = useRouter();
  return (
    <motion.div
      onClick={() => {
        router.push(
          `/portfolio/project_details/${props.portfolioInterface.id}`
        );
      }}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: props.index * 0.1, duration: 1 }}
      className="relative group rounded-[10px]   overflow-hidden cursor-pointer transition-all duration-300 will-change-transform"
    >
      <Image
        src={props.portfolioInterface.thumbnail}
        alt={props.portfolioInterface.thumbnail}
        width={300}
        height={300}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
      />
      <div className="absolute h-full inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-start p-4">
        <p className="text-white font-bold text-2xl mb-4 mt-2">
          {props.portfolioInterface.appName}
        </p>
        <p className="text-[#d0cdcd] text-sm mt-1 line-clamp-4 break-words overflow-ellipsis">
          {props.portfolioInterface.shortDescription}
        </p>
      </div>
    </motion.div>
  );
}
