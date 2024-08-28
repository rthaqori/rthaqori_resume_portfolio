import React, { useState, useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const data = [
  {
    title: "Shoe Ecommerce",
    description:
      "Ecommerce Shoe Site built with React.js and Tailwind CSS, allowing users to browse various shoe products, filter by gender, category, size, price, and colour, add their favourite items to a favourites list and add the products they want to buy to their bag.",
    image: "./assets/shoe.png",
    GitHub: "https://github.com/rthaqori/ecommerce_shoe_project",
    Live: "https://ecommerce-shoe-project.vercel.app/",
  },
  {
    title: "Clothes Ecommerce",
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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const crop = (string, maxLength) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className="my-10 md:my-20">
      <h2 className="mb-8 text-center text-5xl font-bold md:mb-10 lg:mb-12">
        Projects
      </h2>
      <div className="relative h-fit">
        <div className="top-0 z-[1] w-full">
          <div className="w-full border-t border-gray-400">
            {data.map((project, i) => (
              <Title
                key={i}
                data={{ ...project, i }}
                setSelectedProject={setSelectedProject}
                selectedProject={selectedProject}
                link={project.Live}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute top-[3px] z-[2] h-full w-full">
            {data.map((project, i) => (
              <Description
                key={i}
                title={project.title}
                description={project.description}
                selectedProject={selectedProject}
                index={i}
                crop={crop}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Title({ data, setSelectedProject, selectedProject, link }) {
  const { title, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "25vw end"],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  console.log(link);
  return (
    <div
      ref={container}
      className="relative z-[2] cursor-default border-b border-gray-400"
    >
      <div
        className="inline-block pl-2 md:pl-6 lg:pl-10"
        onMouseOver={() => setSelectedProject(i)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        <a target="_blank" href={link}>
          <motion.p
            style={{ clipPath: clip }}
            className="relative z-[2] m-0 inline-block text-[8vw] font-bold uppercase leading-[7.5vw] text-[#1c1c1c]"
          >
            {title}
          </motion.p>
        </a>
        <p className="absolute top-0 z-[1] m-0 block text-[8vw] font-bold uppercase leading-[7.5vw] text-gray-300">
          {title}
        </p>
      </div>
    </div>
  );
}

function Description({ title, description, selectedProject, index, crop }) {
  return (
    <div
      className={`flex items-center justify-between bg-gray-900 pl-2 pr-10 transition-all duration-300 ease-in-out md:pl-6 lg:pl-10`}
      style={{
        clipPath:
          selectedProject === index ? "inset(0 0 0)" : "inset(50% 0 50%)",
      }}
    >
      <p className="relative z-[2] m-0 text-[8vw] font-bold uppercase leading-[7.5vw] text-heroBackground">
        {crop(title, 9)}
      </p>
      <p className="ml-5 line-clamp-4 w-[40%] text-justify text-[1vw] font-bold text-heroBackground">
        {description}
      </p>
    </div>
  );
}
