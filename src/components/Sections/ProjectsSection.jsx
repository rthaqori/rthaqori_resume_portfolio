import React from "react";
import Container from "../UtilComponents/Container";
import ProjectCard from "../Cards/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ShoeEcommerce",
      description:
        "Ecommerce Shoe Site built with React.js and Tailwind CSS, allowing users to browse various shoe products, filter by gender, category, size, price, and colour, add their favourite items to a favourites list and add the products they want to buy to their bag.",
      image: "./assets/shoe.png",
      GitHub: "https://github.com/rthaqori/ecommerce_shoe_project",
      Live: "https://ecommerce-shoe-project.vercel.app/",
    },
    {
      title: "ClothesEcommerce",
      description:
        "Ecommerce Clothes Site developed with React.js and Tailwind CSS, featuring product browsing, filtering by gender, category, size, price, and colour, and a favourites list. Additionally, it integrates Google Firebase for user creation, login authentication, and product management in the database.",
      image: "./assets/clothes.png",
      GitHub: "https://github.com/rthaqori/ecommerce_clothes_project",
      Live: "https://ecommerce-clothes-project.vercel.app/",
    },
    {
      title: "Wordle Game",
      description:
        "A Wordle Game built with React.js and Tailwind CSS, designed for players to guess words in order to win. The game offers a responsive experience across all devices and includes a virtual keyboard specifically tailored for mobile users, ensuring smooth and intuitive word entry. With a clean interface and engaging gameplay, it's both challenging and accessible, making it enjoyable for players of all skill levels.",
      image: "./assets/wordle.png",
      GitHub: "https://github.com/rthaqori/wordle_project",
      Live: "https://project-wordle-omega.vercel.app/",
    },
    {
      title: "Amazon Demo",
      description:
        "An Amazon UI clone created using HTML, vanilla CSS, and vanilla JavaScript, designed to replicate the look and feel of the Amazon website. This project recreates the core layout and interactions to provide a similar shopping experience, showcasing the ability to build responsive and functional web pages without using frameworks.",
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
