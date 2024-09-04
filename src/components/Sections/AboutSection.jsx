import React, { useRef } from "react";
import Container from "../UtilComponents/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollYProgressAnimate from "../UtilComponents/ScrollYProgressAnimate";

const text =
  "I am a front-end developer with strong expertise in HTML, CSS, and Tailwind, paired with solid experience in JavaScript and React.js. I also have a working knowledge of TypeScript and Framer Motion, along with a keen eye for user interface and web design. My focus is on creating visually appealing and responsive web applications that deliver a seamless user experience.";
const AboutSection = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `65vh end`],
  });

  return (
    <Container>
      <div
        id="about"
        className="md:py:16 px-6 py-10 md:px-10 lg:px-12 lg:py-20"
      >
        <div className="mt-10 flex flex-col gap-4 md:gap-0 lg:flex-row">
          <div className="text-right lg:w-1/4">
            <div className="h-fit overflow-hidden">
              <h1 className="text-nowrap text-center font-serif text-5xl font-semibold dark:text-heroBackground">
                What I do:
              </h1>
            </div>
          </div>

          <div
            ref={container}
            className="relative mt-3 text-justify text-2xl md:mt-6 md:text-3xl lg:mt-0 lg:w-3/4"
          >
            <p className="absolute top-0 z-10 mb-8 text-black dark:text-heroBackground">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [index / text.length, (index + 1) / text.length],
                      [0, 1],
                    ),
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
            <p className="absolute top-0 mb-8 text-gray-700">
              {text.split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </p>
            <p className="mb-8 opacity-0">
              {text.split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </p>
          </div>
        </div>
        <div className="mt-2 flex w-full items-center justify-center lg:mt-6">
          <ScrollYProgressAnimate>
            <motion.div
              className="h-32 w-32 rounded-3xl bg-white shadow-2xl dark:bg-heroBackground"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
            >
              <motion.a
                whileHover={{ scale: 1.2, rotate: -90 }}
                className="flex h-full w-full items-center justify-center text-xl font-medium"
                href="#"
              >
                About me
              </motion.a>
            </motion.div>
          </ScrollYProgressAnimate>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
