import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="text-center mb-12">
        <h2 className="section-title text-3xl font-bold pb-2 inline-block">
          About Me
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/3">
          <div id="bio-text">
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Hello! I&apos;m a second-year Software Engineering student at
              Teesside University, passionate about building robust and scalable
              applications. My focus is on back-end software development, and I
              enjoy tackling the logic and infrastructure that power modern
              software.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I&apos;m currently expanding my skillset by exploring dynamic web
              application frameworks like Blazor. When I&apos;m not coding,
              I&apos;m diving into new technologies and working on personal
              projects to further my journey toward becoming a back-end software
              engineer.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <Image
            src="/Avatar.png"
            alt="Coding illustration"
            className="rounded-lg shadow-xl"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
