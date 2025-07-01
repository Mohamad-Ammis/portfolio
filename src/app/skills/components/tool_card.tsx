import { motion } from "framer-motion";
import Image from "next/image";
import "../../skills/style/tool_card.css";

interface ToolCardProps {
  name: string;
  iconUrl: string;
  index: number;
}

export default function ToolCard({ name, iconUrl, index }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 1 }}
      className="tool-card !bg-secondry-card-background-color "
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

      <Image src={iconUrl} alt={name} width={50} height={50} />
      <span className="text-sm mt-4">{name}</span>
    </motion.div>
  );
}
