import React, { useEffect, useRef } from "react";
import Container from "../UtilComponents/Container";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
import ScrollYProgressAnimate from "../UtilComponents/ScrollYProgressAnimate";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("reveal");
    }
  }, [isInView, mainControls]);

  const text =
    "I am a software developer with a passion for creating innovative and user-friendly applications. I have experience working with a variety of programming languages and technologies, including JavaScript, HTML/CSS, and React. Let's build something extraordinary together.";

  const textVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <Container>
      <div
        id="about"
        className="md:py:16 px-6 py-10 md:px-10 lg:px-12 lg:py-20"
      >
        <div className="mt-10 flex flex-col gap-4 md:gap-0 lg:flex-row">
          <div className="text-right lg:w-1/4">
            <div className="h-fit overflow-hidden">
              <h1 className="text-nowrap text-center font-serif text-5xl font-semibold">
                What I do:
              </h1>
            </div>
          </div>
          <div
            ref={ref}
            className="mt-3 px-6 text-justify md:mt-6 lg:mt-0 lg:w-3/4"
          >
            <motion.p
              initial="hidden"
              animate={mainControls}
              variants={textVariants}
              transition={{ staggerChildren: 0.01 }}
              className="mb-8 text-2xl"
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={textVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>
        <div className="mt-2 flex w-full items-center justify-center lg:mt-6">
          <ScrollYProgressAnimate>
            <motion.div
              className="h-32 w-32 rounded-3xl bg-white shadow-2xl"
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
