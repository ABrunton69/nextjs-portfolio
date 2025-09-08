"use client";

import React from "react";
import { usePathname } from "next/navigation";
import HeroButton from "../Hero/HeroButton";

function ButtonRender() {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <div className="mt-8 text-center">
        <HeroButton text="View More" location="/viewprojects" />
      </div>
    );
  } else {
    return (
      <div className="mt-8 text-center">
        <HeroButton text="Go Back" location="/" />
      </div>
    );
  }
}

export default ButtonRender;
