"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111827] text-gray-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-300">
          AB
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#about" className="nav-link transition-colors">
            About
          </Link>

          <Link href="#projects" className="nav-link transition-colors">
            Projects
          </Link>

          <Link
            href="/index.html#skills"
            className="nav-link transition-colors"
          >
            Skills
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
