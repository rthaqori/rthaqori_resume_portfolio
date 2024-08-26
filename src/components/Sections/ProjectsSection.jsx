import React from "react";
import Container from "../UtilComponents/Container";
import ProjectCard from "../Cards/ProjectCard";
import { GitHub } from "@mui/icons-material";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ShoeEcommerce",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consectetur recusandae aut soluta quasi, rerum nesciunt quas temporibus asperiores eius.",
      image: "./assets/shoe.png",
      GitHub: "https://github.com/rthaqori/ecommerce_shoe_project",
      Live: "https://ecommerce-shoe-project.vercel.app/",
    },
    {
      title: "ClothesEcommerce",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consectetur recusandae aut soluta quasi, rerum nesciunt quas temporibus asperiores eius.",
      image: "./assets/clothes.png",
      GitHub: "https://github.com/rthaqori/ecommerce_clothes_project",
      Live: "https://ecommerce-clothes-project.vercel.app/",
    },
    {
      title: "Wordle Game",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consectetur recusandae aut soluta quasi, rerum nesciunt quas temporibus asperiores eius.",
      image: "./assets/wordle.png",
      GitHub: "https://github.com/rthaqori/wordle_project",
      Live: "https://project-wordle-omega.vercel.app/",
    },
    {
      title: "Amazon Demo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consectetur recusandae aut soluta quasi, rerum nesciunt quas temporibus asperiores eius.",
      image: "./assets/amazon.png",
      GitHub: "https://github.com/rthaqori/Amazon",
      Live: "https://amazoncopy-ten.vercel.app/",
    },
  ];

  return (
    <Container>
      <div id="projects" className="gap-4 py-10 md:py-20">
        <h2 className="text-center text-5xl font-bold">Projects</h2>
        <div className="mx-auto mt-8 grid w-fit grid-cols-1 gap-10 md:mt-12 md:grid-cols-2 lg:mt-16">
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  src={project.image}
                  github={project.GitHub}
                  live={project.Live}
                />
              </div>
            );
          })}
        </div>
        <p></p>
      </div>
    </Container>
  );
};

export default ProjectsSection;
