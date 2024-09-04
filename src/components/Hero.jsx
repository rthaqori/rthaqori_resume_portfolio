import React, { useState, useEffect, useRef } from "react";
import AnimatedHr from "./UtilComponents/HrAnimate";
import AboutSection from "./Sections/AboutSection";
import ProjectsSection from "./Sections/ProjectsSection";
import ContactSection from "./Sections/ContactSection";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import Projects from "./Sections/Projects";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set a timeout to trigger the exit animation after the initial animation is complete
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1500); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  const startText = "Stand By...";

  // Corrected the typo: 'terget' to 'target'
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to horizontal movement
  const xMove = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const yMove = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          delay: 3,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="z-[9999] h-fit w-full"
      >
        {" "}
        <Header />
      </motion.div>
      <div className="bg-heroBackground dark:bg-[#111111]">
        <div ref={containerRef}>
          <motion.div className="pointer-events-none fixed z-50 flex h-screen w-screen items-center justify-center">
            <motion.div
              className="h-full w-1/2 bg-gray-900 dark:bg-white"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 1,
                delay: 2.65,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="h-full w-1/2 bg-gray-900 dark:bg-white"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1,
                delay: 2.65,
                ease: "easeInOut",
              }}
            ></motion.div>
            <div className="absolute text-3xl font-bold md:text-5xl">
              <AnimatePresence>
                {isVisible && (
                  <div className="flex text-heroBackground dark:text-black">
                    {startText.split("").map((char, index) => (
                      <motion.p
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        exit={{ opacity: 0 }} // Exit animation to disappear from left to right
                      >
                        <motion.span
                          initial={{ x: -100, y: -20, opacity: 0 }}
                          animate={{ x: 0, y: 0, opacity: 1 }}
                        >
                          {char}
                        </motion.span>
                      </motion.p>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="flex h-screen items-center justify-center">
            <div className="flex h-fit w-full flex-col items-center justify-center text-5xl font-medium md:text-6xl lg:text-8xl">
              <div className="mt-10 flex w-full items-center justify-center overflow-clip">
                <motion.div
                  initial={{ opacity: 0, y: 75 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 3.1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="h-fit w-fit py-2"
                >
                  <motion.h1
                    style={{ x: xMove }} // Apply the horizontal movement
                    className="dark:text-white"
                  >
                    Frontend
                  </motion.h1>
                </motion.div>
              </div>
              <div className="flex w-full items-center justify-center overflow-clip">
                <motion.div
                  initial={{ opacity: 0, y: 75 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 3.3 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="h-fit w-fit py-2"
                >
                  <motion.h1
                    style={{ x: yMove }} // Apply the horizontal movement
                    className="dark:text-white"
                  >
                    Web Developer
                  </motion.h1>
                </motion.div>
              </div>
              <motion.div
                className="mt-16 h-fit w-fit text-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.button
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 4 }}
                  className="border bg-green-900 px-5 py-2 font-normal text-white"
                >
                  <a className="h-full w-full" href="#myWork">
                    My Work
                  </a>
                </motion.button>
              </motion.div>
            </div>
          </div>

          <AnimatedHr />

          <AboutSection />

          <AnimatedHr />

          <div className="py-1" id="myWork">
            {width > 1024 ? <Projects /> : <ProjectsSection />}
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Hero;
