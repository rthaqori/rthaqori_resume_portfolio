import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollYProgressAnimate from "../UtilComponents/ScrollYProgressAnimate";

const ProjectCard = () => {
  return (
    <ScrollYProgressAnimate>
      <div className="group h-[300px] w-[270px] overflow-clip rounded-lg shadow-[0_10px_20px_rgba(75,_85,_99,_0.7)]">
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 bg-blue-300">
          <div className="col-span-2 row-span-1 bg-gray-800">
            <div className="p-2 pl-3 pt-4 text-heroBackground">
              <h1 className="text-lg font-semibold">Project Name</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                enim ratione iusto repellat temporibus quam mollitia dolore
                sint, optio nobis!
              </p>
            </div>
          </div>
          <div className="relative col-span-1 row-span-1">
            <div className="absolute bottom-0 left-0 h-[300px] w-[270px] transition-all duration-300 ease-in-out group-hover:h-full group-hover:w-full">
              <img
                className="h-full w-full object-cover"
                src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
                alt="img"
              />
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex items-center justify-center bg-heroBackground">
            <div className="flex flex-col items-center justify-center gap-2 text-base text-green-900">
              <motion.div
                className="h-fit w-fit"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.button className="px-3 py-1 font-normal hover:font-bold">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-full w-full"
                  >
                    GitHub
                  </a>
                </motion.button>
              </motion.div>

              <motion.div
                className="h-fit w-fit"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.button className="px-3 py-1 font-normal hover:font-bold">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-full w-full"
                  >
                    Live Demo
                  </a>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </ScrollYProgressAnimate>
  );
};

export default ProjectCard;
