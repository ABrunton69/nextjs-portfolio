"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillsData } from "./SkillsData"; // Adjust path if needed

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Skills: React.FC = () => {
  const categorizedSkills = skillsData;

  return (
    <section id="skills" className="mt-20 w-full py-20 bg-[#1b2129] rounded-xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Technical Skills</h2>
        </div>

        <div className="space-y-12">
          {categorizedSkills.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-semibold text-gray-300 mb-6 text-center md:text-left">
                {category.category}
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <SkillCard name={skill.name} icon={skill.icon} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
