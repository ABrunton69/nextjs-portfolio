import React from "react";
import { use } from "react";
import SkillIcon from "./SkillIcon";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
  faJava,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faWind } from "@fortawesome/free-solid-svg-icons";

type Skill = {
  id: number;
  name: string;
  icon: string;
  color: string;
};

async function fetchSkills(): Promise<Skill[]> {
  const res = await fetch("http://147.93.84.98:5000/api/skills");
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

const iconMap = {
  "fa-brands fa-html5": faHtml5,
  "fa-brands fa-css3-alt": faCss3Alt,
  "fa-brands fa-js": faJs,
  "fa-solid fa-code": faCode,
  "fa-brands fa-python": faPython,
  "fa-brands fa-java": faJava,
  "fa-brands fa-react": faReact,
  "fa-solid fa-wind": faWind,
} as const;

type IconKey = keyof typeof iconMap;

const Skills = () => {
  const skills = use(fetchSkills());

  return (
    <>
      <div className="mt-20 text-center py-20 bg-[#1b2129] rounded-xl">
        <div className="text-3xl font-bold pb-2 inline-block ">
          <h1>Technical Skills</h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
          {skills.map((technical_skill) => (
            <div
              key={technical_skill.id}
              className="transform transition-transform duration-300 hover:scale-125"
            >
              <SkillIcon
                _icon={technical_skill.icon as IconKey}
                _color={technical_skill.color}
              />
              <p className="font-bold">{technical_skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
