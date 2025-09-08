import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <>
      <div className="relative w-full h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized={true}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-300 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        <Link
          href={`/viewprojects/${project.id}`}
          className="transform transition-transform duration-300 hover:scale-105 text-blue-600 hover:text-blue-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold project-link inline-flex items-center"
        >
          View Project
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
