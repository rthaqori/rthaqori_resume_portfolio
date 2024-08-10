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
      <div id="about" className="px-12 py-20">
        <div className="mt-10 flex">
          <div className="w-1/4 text-right">
            <div className="h-fit overflow-hidden">
              <h1 className="text-nowrap font-serif text-5xl font-semibold">
                What I do:
              </h1>
            </div>
          </div>
          <div ref={ref} className="w-3/4 px-6 text-justify">
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
        <div className="mt-6 flex w-full items-center justify-center">
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
