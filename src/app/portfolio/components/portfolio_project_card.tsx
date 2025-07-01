"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { VscLinkExternal } from "react-icons/vsc";

export interface PortfolioProjectCard {
  image: string;
  title: string;
  description: string;
  link?: string;
  index: number;
}

export default function PortfolioProjectCard(props: PortfolioProjectCard) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: props.index * 0.1, duration: 1 }}
      className="relative group rounded-[10px]   overflow-hidden cursor-pointer transition-all duration-300 will-change-transform"
    >
      <Image
        src={props.image}
        alt={props.image}
        width={300}
        height={300}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
      />
      <div className="absolute h-full inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-start p-4">
        <p className="text-white font-bold mb-4">{props.title}</p>
        <p className="text-[#d0cdcd] text-sm mt-1">{props.description}</p>
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            className="mt-3 text-text-secondry text-xs flex items-center gap-1 hover:text-text-primary transition-all"
          >
            View Details <VscLinkExternal />
          </a>
        )}
      </div>
    </motion.div>
  );
}
