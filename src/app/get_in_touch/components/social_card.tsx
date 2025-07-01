"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface SocialCardProps {
  title: string;
  image: string;
  link: string;
}

export default function SocialCard({ title, image, link }: SocialCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.05, duration: 1 }}
        className="tool-card !bg-secondry-card-background-color cursor-pointer"
      >
        <svg
          className="animated-border"
          viewBox="0 0 200 150"
          preserveAspectRatio="none"
        >
          <rect
            x="1"
            y="1"
            width="198"
            height="148"
            rx="12"
            ry="12"
            pathLength="1"
          />
        </svg>
        <Image src={image} alt={title} width={50} height={50} />
        <span className="text-sm mt-4">{title}</span>
      </motion.div>
    </a>
  );
}
