"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
  faJava,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faWind } from "@fortawesome/free-solid-svg-icons";

interface passedParams {
  _icon: IconKey;
  _color: string;
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

const SkillIcon = ({ _icon, _color }: passedParams) => {
  return (
    <div>
      <Link href="/">
        <FontAwesomeIcon
          icon={iconMap[_icon]}
          color={String(_color)}
          size="4x"
        />
      </Link>
    </div>
  );
};

export default SkillIcon;
