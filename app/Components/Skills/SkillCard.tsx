// src/components/SkillCard.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

// Define the type for the props that this component accepts
interface SkillCardProps {
  name: string;
  icon: ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 p-6 bg-[#2a323c] rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:border-blue-800 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-400/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-5xl">{icon}</div>
      <p className="font-bold text-gray-200">{name}</p>
    </motion.div>
  );
};

export default SkillCard;
