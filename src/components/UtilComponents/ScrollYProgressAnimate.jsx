import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollYProgressAnimate = ({ children }) => {
  const Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: Ref,
    offset: ["0 1", "1.20 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={Ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollYProgressAnimate;
