// "use client";

import React from "react";
import { use } from "react";
import ButtonRender from "./ButtonRender";
import ProjectCard from "./ProjectCard/ProjectCard";

interface params {
  index: number;
}

// It's good practice to define the type for your data structure
type Project = {
  id: number;
  title: string;
  description: string;
  projectUrl: string;
  imageUrl: string; // Added for the project image
  overview: string;
  overview_points: string[];
  key_features: string[];
};

// async function fetchProjects(): Promise<Project[]> {
//   const res = await fetch("http://localhost:4000/projects");
//   if (!res.ok) {
//     throw new Error("Failed to fetch projects");
//   }
//   return res.json();
// }
async function fetchProjects(): Promise<Project[]> {
  const res = await fetch("http://147.93.84.98:5000/api/projects");
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

const Projects = ({ index }: params) => {
  const projects = use(fetchProjects());

  const projectsToShow = index === -1 ? projects : projects.slice(0, index);

  return (
    <section id="projects" className="py-20 bg-[#1b2129] rounded-xl">
      <div className="text-center mb-12">
        <h2 className="section-title text-3xl font-bold pb-2 inline-block">
          My Projects
        </h2>
      </div>
      <div id="projects-wrapper" className="relative px-4">
        <div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsToShow.map((_project) => (
            <div
              key={_project.id}
              className="card-light project-card-item rounded-lg overflow-hidden flex flex-col border-solid"
            >
              <ProjectCard project={_project} />
            </div>
          ))}
        </div>
      </div>
      <ButtonRender />
    </section>
  );
};

export default Projects;
