"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./HeroButton.module.css";

interface ButtonValues {
  text: string;
  location: string;
}

const HeroButton = ({ text, location }: ButtonValues) => {
  return (
    <Button asChild>
      <div className={styles.setcolours}>
        <div className="transform transition-transform duration-300 hover:scale-125">
          <Link className={"text-gray-300  py-3 px-8"} href={location}>
            {text}
          </Link>
        </div>
      </div>
    </Button>
  );
};

export default HeroButton;
