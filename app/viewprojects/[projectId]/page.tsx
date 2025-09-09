import React from "react";
import Image from "next/image";
import HeroButton from "@/app/Components/Hero/HeroButton";

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

async function fetchProjects(): Promise<Project[]> {
  const res = await fetch("http://147.93.84.98:5000/api/projects");
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const resolvedParams = await params;
  const projectId = resolvedParams.projectId;

  //   const projects = use(fetchProjects());
  const projects = await fetchProjects();
  const project = projects.find((p) => String(p.id) === String(projectId));

  if (!project) {
    return <div className="mt-10">Project Not Found</div>;
  }

  return (
    <>
      <section className="container mx-auto px-6 pt-32 pb-16 max-w-3xl">
        <div className="mb-8 text-center">
          <Image
            src={project.imageUrl}
            alt={`${project.title} Image`}
            width={500}
            height={500}
            className="rounded-lg shadow-lg mx-auto mb-6 w-full max-w-xl"
            priority
            unoptimized={true}
          />
          <h1 className="section-title text-4xl font-bold pb-2 inline-block mb-2">
            {project.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
            {project.description}
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {project.overview}
          </p>
          {project.overview_points && project.overview_points.length > 0 && (
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
              {project.overview_points.map((point, index) => (
                <li key={`overview-${index}`}>{point}</li>
              ))}
            </ul>
          )}
          {project.key_features && project.key_features.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {project.key_features.map((feature, index) => (
                  <li key={`feature-${index}`}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10 justify-center">
          {/* <Link
            href="/index.html#projects"
            className="btn-primary text-white font-bold py-3 px-8 rounded-lg text-lg mb-4 md:mb-0 md:mr-4 flex items-center justify-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Projects
          </Link> */}
          <HeroButton text="Back to Projects" location="/" />
        </div>
      </section>
    </>
  );
}
