import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollYProgressAnimate from "../UtilComponents/ScrollYProgressAnimate";

const ProjectCard = ({ title, description, src, github, live }) => {
  return (
    <ScrollYProgressAnimate>
      <div className="group h-[300px] w-[270px] overflow-clip rounded-lg shadow-[0_10px_20px_rgba(75,_85,_99,_0.7)]">
        <div className="grid h-full w-full grid-cols-2 grid-rows-2">
          <div className="col-span-2 row-span-1 bg-gray-800">
            <div className="p-2 pl-3 pt-4 text-heroBackground">
              <h1 className="text-lg font-semibold text-green-500">{title}</h1>
              <p className="line-clamp-4">{description}</p>
            </div>
          </div>
          <div className="relative col-span-1 row-span-1">
            <div className="absolute bottom-0 left-0 z-10 h-[300px] w-[270px] bg-heroBackground backdrop-blur transition-all duration-300 ease-in-out group-hover:h-full group-hover:w-full">
              <img
                className="h-full w-full object-contain"
                src={src}
                alt="title"
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
                    href={github}
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
                    href={live}
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
