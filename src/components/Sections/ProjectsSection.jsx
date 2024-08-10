import React from "react";
import Container from "../UtilComponents/Container";
import ProjectCard from "../Cards/ProjectCard";

const ProjectsSection = () => {
  const projects = ["one", "two", "three", "four"];
  return (
    <Container>
      <div id="projects" className="gap-4 p-20">
        <h2 className="text-center text-5xl font-bold">Projects</h2>
        <div className="mx-auto mt-16 grid w-fit grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectsSection;
