// src/data/skillsData.ts
import { ReactNode } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiSharp } from "react-icons/si";

// Define the type for a single skill
export interface Skill {
  name: string;
  icon: ReactNode; // ReactNode is the correct type for any renderable element, including icons
}

// Define the type for a category that contains an array of skills
export interface SkillCategory {
  category: string;
  skills: Skill[];
}

// Export the typed data array
export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Javascript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Typescript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
    ],
  },
  {
    category: "Backend & Languages",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C#", icon: <SiSharp className="text-purple-500" /> },
    ],
  },
];
