import React from "react";
import Container from "../UtilComponents/Container";
import ProjectCard from "../Cards/ProjectCard";

const ProjectsSection = () => {
  const projects = ["one", "two", "three", "four"];
  return (
    <Container>
      <div id="projects" className="gap-4 p-10 md:p-20">
        <h2 className="text-center text-5xl font-bold">Projects</h2>
        <div className="mx-auto mt-8 grid w-fit grid-cols-1 gap-10 md:mt-12 md:grid-cols-2 lg:mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectsSection;
