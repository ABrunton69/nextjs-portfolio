import React from "react";
import Image from "next/image";
import "./Hero.module.css";
import HeroButton from "./HeroButton";
import SplitText from "../ReactBits/SplitText";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center relative"
    >
      <div>
        <Image
          height={500}
          width={500}
          src="/Avatar.png"
          alt="Aram Brunton"
          className="w-40 h-40 mx-auto rounded-full mb-6 border-4 border-gray-200 dark:border-gray-700 shadow-lg"
        />
        <h1 className="font-bold text-gray-100 mb-4">
          {/* Hi, I'm Aram Brunton */}
          {
            <SplitText
              text="Hi, I'm Aram Brunton"
              className="text-5xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          }
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          A second-year Software Engineering student at Teesside University with
          a passion for back-end software development.
        </p>
        {/* <Link
          href="#projects"
          className="btn-primary text-white font-bold py-3 px-8 rounded-lg text-lg inline-block"
        >
          View My Work
        </Link> */}
        <HeroButton text="View my work" location="#projects" />
      </div>
      <div id="scroll-indicator" className="absolute bottom-10">
        <a href="#about">
          <i className="fas fa-chevron-down text-4xl text-gray-400 dark:text-gray-500 animate-bounce-slow"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
