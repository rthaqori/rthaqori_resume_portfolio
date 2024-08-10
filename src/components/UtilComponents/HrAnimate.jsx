import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedHr = ({
  offset = ["end end", "center center"],
  maxWidth = "100%",
}) => {
  const hrRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: hrRef,
    offset: offset,
  });

  // Ensure width goes from 0% to maxWidth
  const hrProgress = useTransform(scrollYProgress, [0, 1], ["0%", maxWidth]);

  return (
    <motion.hr
      ref={hrRef}
      style={{ width: hrProgress }}
      className="origin-left border border-black"
    />
  );
};

export default AnimatedHr;
