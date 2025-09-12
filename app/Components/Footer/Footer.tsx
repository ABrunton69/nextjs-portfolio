import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-bg py-8 bg-[#111827]">
      <div className="container mx-auto px-6 text-center text-gray-300">
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="https://github.com/ABrunton69"
            className="text-2xl hover:text-blue-600 dark:hover:text-indigo-400 social-link transition-colors"
          >
            <i className="fab fa-github"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aram-brunton-0b1812343/"
            className="text-2xl hover:text-blue-600 dark:hover:text-indigo-400 social-link transition-colors"
          >
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
        <p>&copy; 2025 Aram Brunton. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
